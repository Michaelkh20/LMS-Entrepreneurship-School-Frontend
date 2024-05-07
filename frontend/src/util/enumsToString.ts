import {
  AssessmentType,
  ClaimStatus,
  LotStatus,
  Role,
  Sex,
  TwoSidedClaimStatus,
  AssignmentType,
  TransactionType,
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

export function AssignmentTypeToString(
  assignmentType: AssignmentType | undefined
) {
  switch (assignmentType) {
    case AssignmentType.Exam:
      return 'Экзамен';
    case AssignmentType.Competition:
      return 'Конкурс';
    case AssignmentType.HW:
      return 'ДЗ';
    case AssignmentType.Test:
      return 'Тест';
    default:
      return '-';
  }
}

export function transactionTypeToString(
  transactionType: TransactionType | undefined
) {
  switch (transactionType) {
    case TransactionType.Activity:
      return 'Активность';
    case TransactionType.AdminOutcome:
      return 'Списание админом';
    case TransactionType.AdminIncome:
      return 'Подарок админа';
    case TransactionType.BuyLot:
      return 'Покупка лота';
    case TransactionType.FailedDeadline:
      return 'Дедлайн';
    case TransactionType.SellLot:
      return 'Продажа лота';
    case TransactionType.TransferIncome:
      return 'Получение перевода';
    case TransactionType.TransferOutcome:
      return 'Перевод';
    default:
      return '-';
  }
}

