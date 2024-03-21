import express from 'express';

import { dto } from '../../protobuffs/dto/index.js';
import AuthRequest = dto.AuthRequest;
import AuthResponse = dto.AuthResponse;
import ProfileResponse = dto.ProfileResponse;
import Role = dto.Role;
import LotsShortResponse = dto.LotsShortResponse;
import LotResponse = dto.LotResponse;

import injectAccountsEndpoints from './endpoints/accounts';
import DB from '../db';
import injectTeamsEndpoints from './endpoints/teams.js';

const app = express();
const db = new DB();
const port = 3032;

app.use(express.raw({ type: 'application/x-protobuf' }));

app.post('/auth', (req, res) => {
  const authRequest = AuthRequest.decode(req.body);

  const isSuccessful = db.accountsModule.auth(
    authRequest.login,
    authRequest.password
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

// app.get('/lots-short', (req, res) => {
//   const pageNumber = Number(req.query.pageNumber);
//   const pageSize = Number(req.query.pageSize);

//   const shortLots = lots
//     .map((lot) => ({
//       id: lot.id,
//       number: lot.number,
//       title: lot.title,
//       performer: lot.performer,
//       price: lot.price,
//     }))
//     .slice((pageNumber - 1) * pageSize, pageNumber * pageSize);

//   const lotsShortResponse = LotsShortResponse.encode({
//     totalLotsNumber: lots.length,
//     lots: shortLots,
//   }).finish();

//   res.status(200).type('application/x-protobuf').send(lotsShortResponse);
// });

// app.get('/lot', (req, res) => {
//   const id = Number(req.query.id);

//   const lot = lots.find((lot) => lot.id === id);

//   if (!lot) {
//     res.status(404).send();
//     return;
//   }

//   const lotResponse = LotResponse.encode(lot).finish();

//   res.status(200).type('application/x-protobuf').send(lotResponse);
// });

app.post('/learner/claims/buy-lot', (req, res) => {
  const id = Number(req.query.id);

  const shouldApprove = Math.random() > 0.5;

  if (shouldApprove) {
    res.status(200).send();
  } else {
    res.status(400).send();
  }
});

injectAccountsEndpoints(app, db);
injectTeamsEndpoints(app, db);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
