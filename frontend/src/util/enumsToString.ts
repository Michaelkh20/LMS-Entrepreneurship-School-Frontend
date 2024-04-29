import {
  AssessmentType,
  ClaimStatus,
  LotStatus,
  Role,
  Sex,
  TwoSidedClaimStatus,
} from '@/types/common';

export function roleToString(role: Role | undefined) {
  switch (role) {
    case Role.ADMIN:
      return 'Администратор';
    case Role.LEARNER:
      return 'Ученик';
    case Role.TRACKER:
      return 'Трекер';
    default:
      return '';
  }
}

export function roleToSearchParam(role: Role | undefined) {
  switch (role) {
    case Role.ADMIN:
      return 'admin';
    case Role.LEARNER:
      return 'learner';
    case Role.TRACKER:
      return 'tracker';
    default:
      return undefined;
  }
}

export function sexToString(sex: Sex | undefined) {
  switch (sex) {
    case Sex.MALE:
      return 'Мужской';
    case Sex.FEMALE:
      return 'Женский';
    default:
      return '-';
  }
}

export function assessmentTypeToString(role: AssessmentType | undefined) {
  switch (role) {
    case AssessmentType.AdminGrade:
      return 'Оц. в ведомость';
    case AssessmentType.TrackerGrade:
      return 'Оц. трекера';
    default:
      return '';
  }
}

export function lotStatusToString(lotStatus: LotStatus | undefined) {
  switch (lotStatus) {
    case LotStatus.Approval:
      return 'На рассмотрении';
    case LotStatus.OnSale:
      return 'В продаже';
    case LotStatus.Withdrawn:
      return 'Снят с продажи';
    default:
      return 'Неизвестный статус';
  }
}

export function claimStatusToString(claimStatus: ClaimStatus | undefined) {
  switch (claimStatus) {
    case ClaimStatus.Waiting:
      return 'Ожидание';
    case ClaimStatus.Approved:
      return 'Одобрено';
    case ClaimStatus.Declined:
      return 'Отклонено';
    default:
      return 'Неизвестный статус';
  }
}

export function twoSidedClaimStatusToString(
  claimStatus: TwoSidedClaimStatus | undefined
) {
  switch (claimStatus) {
    case TwoSidedClaimStatus.WaitingAdmin:
      return 'Ожидание aдмина';
    case TwoSidedClaimStatus.WaitingLearner:
      return 'Ожидание ученика';
    case TwoSidedClaimStatus.DeclinedAdmin:
      return 'Отклонено aдмином';
    case TwoSidedClaimStatus.DeclinedLearner:
      return 'Отклонено учеником';
    case TwoSidedClaimStatus.Approved:
      return 'Одобрено';
    default:
      return 'Неизвестный статус';
  }
}
