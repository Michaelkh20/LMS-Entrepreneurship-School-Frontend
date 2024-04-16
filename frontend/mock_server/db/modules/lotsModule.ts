import { Low } from 'lowdb';
import Lot from '../entities/lot';

interface WithLots {
  lots: Lot[];
}

export class LotsModule<T extends WithLots> {
  constructor(private db: Low<T>) {}

  getLotById(id: string) {
    return this.db.data.lots.find((lot) => lot.id === id);
  }

  populateBuyLotClaimWithLot<T extends { lotId: string }>(buyLotClaim: T) {
    const lot = this.getLotById(buyLotClaim.lotId);

    if (!lot) {
      return null;
    }

    return {
      ...buyLotClaim,
      lot,
    };
  }
}
