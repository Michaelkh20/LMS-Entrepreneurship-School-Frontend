import express from 'express';
import DB from '../../db';

import { dto } from '../../../protobuffs/dto/index.js';
import LotResponse = dto.LotResponse;
import LotsShortResponse = dto.LotsShortResponse;

export default function injectLotsEndpoints(
  app: ReturnType<typeof express>,
  db: DB
) {
  app.get('/lots-short', (req, res) => {
    const pageNumber = Number(req.query.pageNumber);
    const pageSize = Number(req.query.pageSize);

    const result = db.getLotsShortList(pageNumber, pageSize);

    const lotsShortResponse = LotsShortResponse.encode(result).finish();

    res.status(200).type('application/x-protobuf').send(lotsShortResponse);
  });

  app.get('/lot/:id', (req, res) => {
    const id = req.params.id;

    const lot = db.getLotWithPerformerById(id);

    if (!lot) {
      res.status(404).send();
      return;
    }

    const lotResponse = LotResponse.encode({
      ...lot,
      date: lot.date.toISOString(),
    }).finish();

    res.status(200).type('application/x-protobuf').send(lotResponse);
  });
}
