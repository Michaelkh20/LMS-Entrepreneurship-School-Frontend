import { dto } from '@dto';
import BuyLotClaimStatus = dto.BuyLotClaimStatus;

export default function buyLotClaimStatusToString(
  lotStatus: BuyLotClaimStatus | undefined
) {
  switch (lotStatus) {
    case BuyLotClaimStatus.WAITING:
      return 'Ожидание';
    case BuyLotClaimStatus.APPROVED:
      return 'Одобрено';
    case BuyLotClaimStatus.DENIED:
      return 'Отклонено';
    default:
      return 'Неизвестный статус';
  }
}
