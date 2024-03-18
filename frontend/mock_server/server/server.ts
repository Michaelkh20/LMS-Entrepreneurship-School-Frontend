import express from 'express';

import { dto } from '@dto';
import AuthRequest = dto.AuthRequest;
import AuthResponse = dto.AuthResponse;
import ProfileResponse = dto.ProfileResponse;
import Role = dto.Role;
import TeamLearnerResponse = dto.TeamLearnerResponse;
import LotsShortResponse = dto.LotsShortResponse;
import LotResponse = dto.LotResponse;

import AccountResponse = dto.AccountGetResponse;
import AccountEditRequest = dto.AccountEditRequest;
import IAccountEditRequest = dto.IAccountEditRequest;
import AccountCreateRequest = dto.AccountCreateRequest;
import IAccountCreateRequest = dto.IAccountCreateRequest;
import AccountChangeSuccessResponse = dto.AccountChangeSuccessResponse;
import AccountChangeErrorResponse = dto.AccountChangeErrorResponse;

import lots from '../data/lots';
import { accounts } from './../data/accounts';

const app = express();
const port = 3032;

app.use(express.raw({ type: 'application/x-protobuf' }));

app.post('/auth', (req, res) => {
  const authRequest = AuthRequest.decode(req.body);

  const isSuccessful = accounts.some(
    (account) =>
      account.email === authRequest.login &&
      account.password === authRequest.password
  );

  if (isSuccessful) {
    res
      .status(200)
      .type('application/x-protobuf')
      .send(
        AuthResponse.encode({
          result: 'Successfully authenticated',
        }).finish()
      );
  } else {
    res.status(401).send();
  }
});

app.get('/profile', (req, res) => {
  const { accountId } = req.query;

  if (accountId !== '1') {
    res.status(404).send();
    return;
  }

  const profileResponse = ProfileResponse.encode({
    fullName: 'John Doe',
    role: Role.LEARNER,
    email: 'someemail@gmail.com',
    team: {
      id: '1',
      number: '1',
    },
    phone: '+7 (123) 456 78 90',
    messenger: 'tg:@ivan',
    balance: 100,
  }).finish();

  res.status(200).type('application/x-protobuf').send(profileResponse);
});

app.get('/team-learner', (req, res) => {
  const { teamId } = req.query;

  if (teamId !== '1') {
    res.status(404).send();
    return;
  }

  const teamLearnerResponse = TeamLearnerResponse.encode({
    id: '1',
    teamNumber: 1,
    projectTheme: 'Some theme',
    learners: [
      {
        personId: '1',
        fullName: 'John Doe',
        email: 'someemail@gmail.com',
        messenger: 'tg:@ivan',
      },
      {
        personId: '2',
        fullName: 'Jane Smith',
        email: 'janesmith@gmail.com',
        messenger: 'tg:@jane',
      },
      {
        personId: '3',
        fullName: 'Mike Johnson',
        email: 'mikejohnson@gmail.com',
        messenger: 'tg:@mike',
      },
      {
        personId: '4',
        fullName: 'Sarah Williams',
        email: 'sarahwilliams@gmail.com',
        messenger: 'tg:@sarah',
      },
    ],
    trackers: [
      {
        personId: '5',
        fullName: 'Jane Smith',
        email: 'janesmith@gmail.com',
        messenger: 'tg:@jane',
      },
      {
        personId: '6',
        fullName: 'Mike Johnson',
        email: 'mikejohnson@gmail.com',
        messenger: 'tg:@mike',
      },
      {
        personId: '7',
        fullName: 'Sarah Williams',
        email: 'sarahwilliams@gmail.com',
        messenger: 'tg:@sarah',
      },
    ],
  }).finish();

  res.status(200).type('application/x-protobuf').send(teamLearnerResponse);
});

app.get('/lots-short', (req, res) => {
  const pageNumber = Number(req.query.pageNumber);
  const pageSize = Number(req.query.pageSize);

  const shortLots = lots
    .map((lot) => ({
      id: lot.id,
      number: lot.number,
      title: lot.title,
      performer: lot.performer,
      price: lot.price,
    }))
    .slice((pageNumber - 1) * pageSize, pageNumber * pageSize);

  const lotsShortResponse = LotsShortResponse.encode({
    totalLotsNumber: lots.length,
    lots: shortLots,
  }).finish();

  res.status(200).type('application/x-protobuf').send(lotsShortResponse);
});

app.get('/lot', (req, res) => {
  const id = Number(req.query.id);

  const lot = lots.find((lot) => lot.id === id);

  if (!lot) {
    res.status(404).send();
    return;
  }

  const lotResponse = LotResponse.encode(lot).finish();

  res.status(200).type('application/x-protobuf').send(lotResponse);
});

app.post('/learner/claims/buy-lot', (req, res) => {
  const id = Number(req.query.id);

  const shouldApprove = Math.random() > 0.5;

  if (shouldApprove) {
    res.status(200).send();
  } else {
    res.status(400).send();
  }
});

app.get('/admin/accounts/:id', (req, res) => {
  const id = req.params.id;

  const account = accounts.find((account) => account.id === id);

  if (!account) {
    res.status(404).send();
    return;
  }

  const accountResponse = AccountResponse.encode(account).finish();

  res.status(200).type('application/x-protobuf').send(accountResponse);
});

app.post('/admin/accounts', (req, res) => {
  const newAccount = AccountCreateRequest.decode(req.body);

  const hasSamePhone = accounts.some(
    (account) => account.phone === newAccount.phone
  );
  const hasSameEmail = accounts.some(
    (account) => account.email === newAccount.email
  );

  if (hasSamePhone || hasSameEmail) {
    const errorResponse = AccountChangeErrorResponse.encode({
      email: hasSameEmail,
      phone: hasSamePhone,
    }).finish();

    res.status(409).type('application/x-protobuf').send(errorResponse);
    return;
  }

  const accountSuccessResponse = AccountChangeSuccessResponse.encode({
    id: '1',
  }).finish();

  res.status(200).type('application/x-protobuf').send(accountSuccessResponse);
});

app.put('/admin/accounts/:id', (req, res) => {
  const editedAccount = AccountEditRequest.decode(req.body);
  const id = req.params.id;

  const hasThisAccount = accounts.some((account) => account.id === id);

  if (!hasThisAccount) {
    res.status(404).send();
    return;
  }

  const hasSamePhone = accounts.some(
    (account) => account.id !== id && account.phone === editedAccount.phone
  );
  const hasSameEmail = accounts.some(
    (account) => account.id !== id && account.email === editedAccount.email
  );

  if (hasSamePhone || hasSameEmail) {
    const errorResponse = AccountChangeErrorResponse.encode({
      email: hasSameEmail,
      phone: hasSamePhone,
    }).finish();

    res.status(409).type('application/x-protobuf').send(errorResponse);
    return;
  }

  const accountSuccessResponse = AccountChangeSuccessResponse.encode({
    id,
  }).finish();

  res.status(200).type('application/x-protobuf').send(accountSuccessResponse);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
