import express from 'express';
import DB from '../../db';

import { dto } from '../../../protobuffs/dto/index.js';
import ClaimBuyLotRequest = dto.ClaimBuyLotRequest;
import ClaimBuyLotListRequest = dto.ClaimBuyLotListRequest;
import ClaimBuyLotListResponse = dto.ClaimBuyLotListResponse;
import ClaimBuyLotResponse = dto.ClaimBuyLotResponse;
import BuyLotClaim from '../../db/entities/buyLotClaim';

export default function injectClaimsEndpoints(
  app: ReturnType<typeof express>,
  db: DB
) {
  app.post('/claims/buy-lot', async (req, res) => {
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

    const response = ClaimBuyLotListResponse.encode(claims).finish();

    res.status(200).type('application/x-protobuf').send(response);
  });

  app.get('/admin/claims/buy-lot/approve/:id', (req, res) => {
    const id = req.params.id;
    const isSuccess = db.approveBuyLotClaim(id);

    if (!isSuccess) {
      res.status(400).send();
      return;
    } else {
      res.status(200).send();
    }
  });

  app.get('/admin/claims/buy-lot/decline/:id', (req, res) => {
    const id = req.params.id;
    const isSuccess = db.declineBuyLotClaim(id);

    if (!isSuccess) {
      res.status(400).send();
      return;
    } else {
      res.status(200).send();
    }
  });

  app.get('/admin/claims/buy-lot/:id', (req, res) => {
    const id = req.params.id;
    const claim = db.getBuyLotClaimById(id);
    console.log(claim);

    if (!claim) {
      res.status(404).send();
      return;
    }

    const response = ClaimBuyLotResponse.encode(claim).finish();

    res.status(200).type('application/x-protobuf').send(response);
  });
}
