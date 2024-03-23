import { Low, Memory } from 'lowdb';
import Account from './entities/account';
import accountsInit from '../init_data/accounts';
import { AccountsModule } from './modules/accountsModule';
import Team from './entities/team';
import teamsInit from '../init_data/teams';
import { TeamsModule } from './modules/teamsModule';

import { dto } from '../../protobuffs/dto/index.js';
import Role = dto.Role;
import TeamCreateRequest = dto.TeamCreateRequest;

export type DBDataType = {
  accounts: Account[];
  teams: Team[];
};

export default class DB {
  db: Low<DBDataType>;
  accountsModule: AccountsModule<DBDataType>;
  teamsModule: TeamsModule<DBDataType>;

  constructor() {
    const initData: DBDataType = { accounts: accountsInit, teams: teamsInit };
    this.db = new Low(new Memory<DBDataType>(), initData);

    this.accountsModule = new AccountsModule(this.db);
    this.teamsModule = new TeamsModule(this.db);
  }

  getProfileById(id: string) {
    const account = this.accountsModule.getAccountById(id)?.addFullName();

    if (!account) {
      return null;
    }

    const accountWithTeam = this.teamsModule.populateAccountWithTeam(account);

    return accountWithTeam;
  }

  getAccountsList({
    name,
    teamNumber,
    role,
    sortProperty,
    sortOrder,
    page = '1',
    pageSize = '10',
  }: {
    name?: string;
    teamNumber?: string;
    role?: string;
    sortProperty?: string;
    sortOrder?: string;
    page?: string;
    pageSize?: string;
  }) {
    const accountsWithPartNmae = this.accountsModule.getAccountsWithPartName();
    let accounts = accountsWithPartNmae.map((account) =>
      this.teamsModule.populateAccountWithTeam(account)
    );

    if (name) {
      accounts = accounts.filter((account) =>
        account.partName.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (teamNumber && !Number.isNaN(Number(teamNumber))) {
      const teamNumberParsed = Number(teamNumber);
      accounts = accounts.filter(
        (account) => account.team?.number === teamNumberParsed
      );
    }

    accounts = accounts.filter((account) => account.role !== Role.ADMIN);

    let roleParsed: Role | undefined = undefined;
    if (role === '1') {
      roleParsed = Role.TRACKER;
    } else if (role === '2') {
      roleParsed = Role.LEARNER;
    }

    if (roleParsed) {
      accounts = accounts.filter((account) => account.role === roleParsed);
    }

    if (sortProperty === 'name') {
      if (sortOrder === 'asc') {
        accounts = accounts.sort((a, b) =>
          a.partName.localeCompare(b.partName)
        );
      } else {
        accounts = accounts.sort((a, b) =>
          b.partName.localeCompare(a.partName)
        );
      }
    }

    let parsedPage = Number(page);
    let parsedPageSize = Number(pageSize);

    const start = (parsedPage - 1) * parsedPageSize;
    const end = start + parsedPageSize;

    const totalElems = accounts.length;
    accounts = accounts.slice(start, end);

    return { accounts, totalElems };
  }

  getAccountsShortList() {
    const accountsWithFullName = this.accountsModule.getAccountsWithFullName();

    return accountsWithFullName;
  }

  getTeam(id: string) {
    const team = this.teamsModule.getTeamById(id);

    if (!team) {
      return null;
    }

    const teamWithAccounts = this.accountsModule.populateTeamWithAccounts(team);
    teamWithAccounts.learners = teamWithAccounts.learners.map((account) =>
      account.addPartName()
    );
    teamWithAccounts.trackers = teamWithAccounts.trackers.map((account) =>
      account.addPartName()
    );

    return teamWithAccounts;
  }

  async createTeamFromDto(dto: TeamCreateRequest) {
    const newTeam = Team.fromTeamCreateRequest(dto);

    const hasSameNumber = this.db.data.teams.some(
      (team) => team.number === newTeam.number
    );

    const learnersAlredyInTeam = dto.learnersIds.filter((learnerId) =>
      this.db.data.accounts.some(
        (account) => account.id === learnerId && account.teamId !== null
      )
    );

    const trackersAlredyInTeam = dto.trackersIds.filter((learnerId) =>
      this.db.data.accounts.some(
        (account) => account.id === learnerId && account.teamId !== null
      )
    );

    if (
      hasSameNumber ||
      learnersAlredyInTeam.length ||
      trackersAlredyInTeam.length
    ) {
      return {
        error: {
          number: hasSameNumber,
          learnersIds: learnersAlredyInTeam,
          trackersIds: trackersAlredyInTeam,
        },
      };
    }

    this.db.data.teams.push(newTeam);

    dto.learnersIds.forEach((learnerId) => {
      this.accountsModule.setTeamIdByAccountId(learnerId, newTeam.id);
    });

    dto.trackersIds.forEach((trackerId) => {
      this.accountsModule.setTeamIdByAccountId(trackerId, newTeam.id);
    });

    await this.db.write();

    return { team: newTeam };
  }
}
