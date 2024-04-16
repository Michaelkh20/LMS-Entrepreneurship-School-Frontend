import { Low } from 'lowdb';
import BuyLotClaim from '../entities/buyLotClaim';

interface WithBuyLotClaims {
  buyLotClaims: BuyLotClaim[];
}

export class BuyLotClaimModule<T extends WithBuyLotClaims> {
  constructor(private db: Low<T>) {}

  getBuyLotClaimById(id: string) {
    return this.db.data.buyLotClaims.find(
      (buyLotClaim) => buyLotClaim.id === id
    );
  }
}
