import express from 'express';
import DB from '../../db';

import { dto } from '../../../protobuffs/dto/index.js';
import ClaimBuyLotRequest = dto.ClaimBuyLotRequest;
import ClaimBuyLotListRequest = dto.ClaimBuyLotListRequest;
import ClaimBuyLotListResponse = dto.ClaimBuyLotListResponse;
import BuyLotClaim from '../../db/entities/buyLotClaim';

export default function injectClaimsEndpoints(
  app: ReturnType<typeof express>,
  db: DB
) {
  app.post('/learner/claims/buy-lot', async (req, res) => {
    const requst = ClaimBuyLotRequest.decode(req.body);
    const claim = BuyLotClaim.fromDto(requst);
    const isApproved = await db.proccessBuyLotClaim(claim);

    if (isApproved) {
      res.status(200).send();
    } else {
      res.status(400).send();
    }
  });

  app.post('/admin/claims/buy-lot/list', (req, res) => {
    const requst = ClaimBuyLotListRequest.decode(req.body);
    const claims = db.getBuyLotClaimsList(requst.page, requst.pageSize);
    console.log(claims);

    const response = ClaimBuyLotListResponse.encode(claims).finish();

    res.status(200).type('application/x-protobuf').send(response);
  });
}
