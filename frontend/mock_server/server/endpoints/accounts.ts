import express from 'express';
import DB from '../../db';

import { dto } from '../../../protobuffs/dto/index.js';
import Role = dto.Role;
import ProfileResponse = dto.ProfileResponse;
import AccountResponse = dto.AccountGetResponse;
import AccountCreateRequest = dto.AccountCreateRequest;
import AccountEditRequest = dto.AccountEditRequest;
import AccountChangeSuccessResponse = dto.AccountChangeSuccessResponse;
import AccountChangeErrorResponse = dto.AccountChangeErrorResponse;
import AccountListResponse = dto.AccountListResponse;
import AccountShortListResponse = dto.AccountShortListResponse;
import NameAndBalanceResponse = dto.NameAndBalanceResponse;

export default function injectAccountsEndpoints(
  app: ReturnType<typeof express>,
  db: DB
) {
  app.get('/profile/:id', (req, res) => {
    const id = req.params.id;

    const result = db.getProfileById(id);

    if (!result) {
      res.status(404).send();
      return;
    }

    const profileResponse = ProfileResponse.encode(result).finish();

    res.status(200).type('application/x-protobuf').send(profileResponse);
  });

  app.get('/profile/name-and-balance/:id', (req, res) => {
    const id = req.params.id;

    const result = db.getNameAndBalanceById(id);

    if (!result) {
      res.status(404).send();
      return;
    }

    const nameAndBalanceResponse = NameAndBalanceResponse.encode({
      name: result.partName,
      balance: result.balance,
    }).finish();

    res.status(200).type('application/x-protobuf').send(nameAndBalanceResponse);
  });

  app.get('/admin/users/list', (req, res) => {
    const { name, teamNumber, role, sortProperty, sortOrder, page, pageSize } =
      req.query;
    if (
      (name && typeof name !== 'string') ||
      (teamNumber && typeof teamNumber !== 'string') ||
      (role && typeof role !== 'string') ||
      (sortProperty && typeof sortProperty !== 'string') ||
      (sortOrder && typeof sortOrder !== 'string') ||
      (page && typeof page !== 'string') ||
      (pageSize && typeof pageSize !== 'string')
    ) {
      res.status(400).send();
      return;
    }

    const { accounts, totalElems } = db.getAccountsList({
      name,
      teamNumber,
      role,
      sortProperty,
      sortOrder,
      page,
      pageSize,
    });

    const accountListResponse = AccountListResponse.encode({
      accountList: accounts.map((account) => ({
        ...account,
        teamShort: account.team || null,
      })),
      totalElems,
    }).finish();

    res.status(200).type('application/x-protobuf').send(accountListResponse);
  });

  app.get('/admin/users/list-short', (req, res) => {
    const result = db.getAccountsShortList();

    const accountShortListResponse = AccountShortListResponse.encode({
      accountShortList: result,
    }).finish();

    res
      .status(200)
      .type('application/x-protobuf')
      .send(accountShortListResponse);
  });

  app.get('/admin/users/:id', async (req, res) => {
    const id = req.params.id;

    const account = db.accountsModule.getAccountById(id);

    if (!account) {
      res.status(404).send();
      return;
    }

    const accountResponse = AccountResponse.encode(account).finish();

    res.status(200).type('application/x-protobuf').send(accountResponse);
  });

  app.post('/admin/users', async (req, res) => {
    const newAccount = AccountCreateRequest.decode(req.body);

    const result = await db.accountsModule.createAccountFromDto(newAccount);

    if (typeof result === 'object') {
      const errorResponse = AccountChangeErrorResponse.encode({
        email: result.hasSameEmail,
        phone: result.hasSamePhone,
      }).finish();

      res.status(409).type('application/x-protobuf').send(errorResponse);
      return;
    }

    const accountSuccessResponse = AccountChangeSuccessResponse.encode({
      id: result,
    }).finish();

    console.log('Created account with id:', result);

    res.status(200).type('application/x-protobuf').send(accountSuccessResponse);
  });

  app.put('/admin/users/:id', async (req, res) => {
    const editedAccount = AccountEditRequest.decode(req.body);
    const id = req.params.id;

    const result = await db.accountsModule.updateAccountFromDtoById(
      id,
      editedAccount
    );

    if (!result) {
      res.status(404).send();
      return;
    }

    if (typeof result === 'object') {
      const errorResponse = AccountChangeErrorResponse.encode({
        email: result.hasSameEmail,
        phone: result.hasSamePhone,
      }).finish();

      res.status(409).type('application/x-protobuf').send(errorResponse);
      return;
    }

    res.status(200).send();
  });
}
