import express from 'express';
import DB from '../../db';

import { dto } from '../../../protobuffs/dto/index.js';
import ProfileResponse = dto.ProfileResponse;
import AccountResponse = dto.AccountGetResponse;
import AccountCreateRequest = dto.AccountCreateRequest;
import AccountEditRequest = dto.AccountEditRequest;
import AccountChangeSuccessResponse = dto.AccountChangeSuccessResponse;
import AccountChangeErrorResponse = dto.AccountChangeErrorResponse;
import AccountListResponse = dto.AccountListResponse;
import AccountShortListResponse = dto.AccountShortListResponse;

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

  app.get('/admin/accounts/list', (req, res) => {
    const result = db.getAccountsList();

    const accountListResponse = AccountListResponse.encode({
      accountList: result.map((account) => ({
        ...account,
        teamShort: account.team || null,
      })),
      totalElems: result.length,
    }).finish();

    res.status(200).type('application/x-protobuf').send(accountListResponse);
  });

  app.get('/admin/accounts/list-short', (req, res) => {
    const result = db.getAccountsShortList();

    const accountShortListResponse = AccountShortListResponse.encode({
      accountShortList: result,
    }).finish();

    res
      .status(200)
      .type('application/x-protobuf')
      .send(accountShortListResponse);
  });

  app.get('/admin/accounts/:id', async (req, res) => {
    const id = req.params.id;

    const account = db.accountsModule.getAccountById(id);

    if (!account) {
      res.status(404).send();
      return;
    }

    const accountResponse = AccountResponse.encode(account).finish();

    res.status(200).type('application/x-protobuf').send(accountResponse);
  });

  app.post('/admin/accounts', async (req, res) => {
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

  app.put('/admin/accounts/:id', async (req, res) => {
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
