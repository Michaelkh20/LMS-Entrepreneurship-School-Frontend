import { nanoid } from 'nanoid';

import { dto } from '../../../protobuffs/dto/index.js';
import LotStatus = dto.LotStatus;

export default class Lot {
  constructor(
    public number: string,
    public title: string,
    public description: string,
    public terms: string,
    public price: number,
    public status: LotStatus,
    public performerId: string,
    public date: Date,
    public id: string = nanoid()
  ) {}
}
