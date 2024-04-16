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
import lots from '../init_data/lots.js';
import injectLotsEndpoints from './endpoints/lots.js';
import injectClaimsEndpoints from './endpoints/claims.js';

const app = express();
const db = new DB();
const port = 3032;

app.use(express.raw({ type: 'application/x-protobuf' }));

app.post('/auth', (req, res) => {
  const authRequest = AuthRequest.decode(req.body);

  const account = db.accountsModule.auth(
    authRequest.login,
    authRequest.password
  );

  if (account) {
    res
      .status(200)
      .type('application/x-protobuf')
      .send(
        AuthResponse.encode({
          role: account.role,
          id: account.id,
        }).finish()
      );
  } else {
    res.status(401).send();
  }
});

injectAccountsEndpoints(app, db);
injectTeamsEndpoints(app, db);
injectLotsEndpoints(app, db);
injectClaimsEndpoints(app, db);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
