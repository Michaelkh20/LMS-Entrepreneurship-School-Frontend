import { nanoid } from 'nanoid';

import { dto } from '../../../protobuffs/dto/index.js';
import ClaimBuyLotRequest = dto.ClaimBuyLotRequest;
import BuyLotClaimStatus = dto.BuyLotClaimStatus;

export default class BuyLotClaim {
  constructor(
    public lotId: string,
    public buyerId: string,
    public status: BuyLotClaimStatus = BuyLotClaimStatus.WAITING,
    public date: Date = new Date(),
    public id: string = nanoid()
  ) {}

  static fromDto(dto: ClaimBuyLotRequest) {
    return new BuyLotClaim(dto.lotId, dto.buyerId);
  }
}
