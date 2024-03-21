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

  getAccountsList() {
    const accountsWithPartName = this.accountsModule.getAccountsWithPartName();
    const accountsWithTeam = accountsWithPartName.map((account) =>
      this.teamsModule.populateAccountWithTeam(account)
    );

    return accountsWithTeam;
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
