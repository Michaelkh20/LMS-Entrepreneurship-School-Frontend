import { Low } from 'lowdb';
import Account from '../entities/account';

import { dto } from '../../../protobuffs/dto/index.js';
import AccountCreateRequest = dto.AccountCreateRequest;
import AccountEditRequest = dto.AccountEditRequest;
import { WithLearnersAndTrackers } from '../../types';

interface WithAccounts {
  accounts: Account[];
}

export class AccountsModule<T extends WithAccounts> {
  constructor(private db: Low<T>) {}

  auth(login: string, password: string) {
    return this.db.data.accounts.find(
      (account) => account.email === login && account.password === password
    );
  }

  getAccountById(id: string) {
    return this.db.data.accounts.find((account) => account.id === id);
  }

  async createAccountFromDto(dto: AccountCreateRequest) {
    const newAccount = Account.fromAccountCreateRequest(dto);

    const hasSamePhone = this.db.data.accounts.some(
      (account) => account.phone === newAccount.phone
    );
    const hasSameEmail = this.db.data.accounts.some(
      (account) => account.email === newAccount.email
    );

    if (hasSamePhone || hasSameEmail) {
      return {
        hasSameEmail,
        hasSamePhone,
      };
    }

    await this.db.update(({ accounts }) => accounts.push(newAccount));
    return newAccount.id;
  }

  async updateAccountFromDtoById(id: string, dto: AccountEditRequest) {
    const accountToUpdate = this.db.data.accounts.find(
      (account) => account.id === id
    );

    if (!accountToUpdate) {
      return null;
    }

    const hasSamePhone = this.db.data.accounts.some(
      (account) =>
        account.id !== accountToUpdate.id &&
        account.phone === accountToUpdate.phone
    );
    const hasSameEmail = this.db.data.accounts.some(
      (account) =>
        account.id !== accountToUpdate.id &&
        account.email === accountToUpdate.email
    );

    if (hasSamePhone || hasSameEmail) {
      return {
        hasSameEmail,
        hasSamePhone,
      };
    }

    accountToUpdate.updateByAccountEditRequest(dto);
    await this.db.write();

    return true;
  }

  getAccounts() {
    return this.db.data.accounts;
  }

  getAccountsWithFullName() {
    return this.db.data.accounts.map((account) => account.addFullName());
  }

  getAccountsWithPartName() {
    return this.db.data.accounts.map((account) => ({
      ...account,
      partName: account.getPartName(),
    }));
  }

  populateTeamWithAccounts<T extends { id: string }>(
    team: T
  ): WithLearnersAndTrackers<T> {
    const learners = this.db.data.accounts.filter(
      (account) =>
        account.teamId === team.id && account.role === dto.Role.LEARNER
    );
    const trackers = this.db.data.accounts.filter(
      (account) =>
        account.teamId === team.id && account.role === dto.Role.TRACKER
    );

    return {
      ...team,
      learners,
      trackers,
    };
  }

  setTeamIdByAccountId(accountId: string, teamId: string | null) {
    const account = this.db.data.accounts.find(
      (account) => account.id === accountId
    );

    if (!account) {
      return false;
    }

    account.teamId = teamId;
    return true;
  }

  populateLotWithPerformer<T extends { performerId: string }>(lot: T) {
    let performer = this.db.data.accounts.find(
      (account) => account.id === lot.performerId
    );

    performer?.addPartName();

    return {
      ...lot,
      performer,
    };
  }

  populateLotWithPerformerString<T extends { performerId: string }>(lot: T) {
    let performer = this.db.data.accounts.find(
      (account) => account.id === lot.performerId
    );

    return {
      ...lot,
      performer: performer?.getPartName(),
    };
  }

  populateBuyLotClaimWithBuyer<T extends { buyerId: string }>(lot: T) {
    const buyer = this.db.data.accounts.find(
      (account) => account.id === lot.buyerId
    );

    return {
      ...lot,
      buyer,
    };
  }
}
