import { BuyLotClaimModule } from './modules/buyLotClaimModule';
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
import LotStatus = dto.LotStatus;
import { LotsModule } from './modules/lotsModule';
import Lot from './entities/lot';
import BuyLotClaim from './entities/buyLotClaim';
import lotsInit from '../init_data/lots';

export type DBDataType = {
  accounts: Account[];
  teams: Team[];
  lots: Lot[];
  buyLotClaims: BuyLotClaim[];
};

export default class DB {
  db: Low<DBDataType>;
  accountsModule: AccountsModule<DBDataType>;
  teamsModule: TeamsModule<DBDataType>;
  lotsModule: LotsModule<DBDataType>;
  BuyLotClaimModule: BuyLotClaimModule<DBDataType>;

  constructor() {
    const initData: DBDataType = {
      accounts: accountsInit,
      teams: teamsInit,
      lots: lotsInit,
      buyLotClaims: [],
    };
    this.db = new Low(new Memory<DBDataType>(), initData);

    this.accountsModule = new AccountsModule(this.db);
    this.teamsModule = new TeamsModule(this.db);
    this.lotsModule = new LotsModule(this.db);
    this.BuyLotClaimModule = new BuyLotClaimModule(this.db);
  }

  getProfileById(id: string) {
    const account = this.accountsModule.getAccountById(id)?.addFullName();

    if (!account) {
      return null;
    }

    const accountWithTeam = this.teamsModule.populateAccountWithTeam(account);

    return accountWithTeam;
  }

  getNameAndBalanceById(id: string) {
    const account = this.accountsModule.getAccountById(id)?.addPartName();

    if (!account) {
      return null;
    }

    return account;
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
    const accountsWithPartName = this.accountsModule.getAccountsWithPartName();

    return accountsWithPartName;
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

  getLotWithPerformerById(id: string) {
    const lot = this.lotsModule.getLotById(id);

    if (!lot) {
      return null;
    }

    const lotWithPerformer = this.accountsModule.populateLotWithPerformer(lot);
    lotWithPerformer.performer = lotWithPerformer.performer?.addPartName();

    return lotWithPerformer;
  }

  getLotsShortList(pageNumber: number, pageSize: number) {
    const lots = this.db.data.lots
      .filter((lot) => lot.status === LotStatus.ACTIVE)
      .map((lot) => this.accountsModule.populateLotWithPerformerString(lot));
    const lotsSliced = lots.slice(
      (pageNumber - 1) * pageSize,
      pageNumber * pageSize
    );

    return {
      totalLotsNumber: lots.length,
      lots: lotsSliced,
    };
  }

  async proccessBuyLotClaim(claim: BuyLotClaim) {
    const lot = this.lotsModule.getLotById(claim.lotId);
    const buyer = this.accountsModule.getAccountById(claim.buyerId);

    if (!lot || !buyer) {
      return false;
    }

    if (lot.status !== LotStatus.ACTIVE) {
      return false;
    }

    if (buyer.balance < lot.price) {
      return false;
    }

    buyer.balance -= lot.price;

    this.db.data.buyLotClaims.push(claim);

    await this.db.write();

    return true;
  }

  getBuyLotClaimsList(pageNumber: number, pageSize: number) {
    const claims = this.db.data.buyLotClaims.map((claim) => {
      const lot = this.lotsModule.getLotById(claim.lotId);
      const buyer = this.accountsModule.getAccountById(claim.buyerId);

      return {
        id: claim.id,
        lotNumber: lot?.number,
        buyer: buyer?.getPartName(),
        status: claim.status,
        date: claim.date.toISOString(),
        price: lot?.price,
      };
    });

    const claimsSliced = claims.slice(
      (pageNumber - 1) * pageSize,
      pageNumber * pageSize
    );

    return {
      totalElems: claims.length,
      claimBuyLotList: claimsSliced,
    };
  }
}
