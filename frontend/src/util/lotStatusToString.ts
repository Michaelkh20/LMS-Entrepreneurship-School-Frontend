import { dto } from '@dto';
import LotStatus = dto.LotStatus;

export default function lotStatusToString(lotStatus: LotStatus | undefined) {
  switch (lotStatus) {
    case LotStatus.APPROVAL:
      return 'На рассмотрении';
    case LotStatus.ACTIVE:
      return 'В продаже';
    case LotStatus.INACTIVE:
      return 'Снят с продажи';
    default:
      return 'Неизвестный статус';
  }
}
