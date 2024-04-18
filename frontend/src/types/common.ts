export enum Role {
  NOT_INITIALISED = 'NOT_INITIALISED',
  STUDENT = 'STUDENT',
  TRACKER = 'TRACKER',
  ADMIN = 'ADMIN',
}

export enum Sex {
  NOT_INITIALISED = 'NOT_INITIALISED',
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export enum AssessmentType {
  AdminGrade = 'AdminGrade',
  TrackerGrade = 'TrackerGrade',
}

export enum AssignmentType {
  HW = 'HW',
  Test = 'Test',
  Competition = 'Competition',
  Exam = 'Exam',
}

export enum LotStatus {
  Approval = 'Approval',
  OnSale = 'OnSale',
  Withdrawn = 'Withdrawn',
}

export enum TransactionType {
  Activity = 'Activity',
  SellLot = 'SellLot',
  AdminIncome = 'AdminIncome',
  TransferIncome = 'TransferIncome',
  FailedDeadline = 'FailedDeadline',
  BuyLot = 'BuyLot',
  AdminOutcome = 'AdminOutcome',
  TransferOutcome = 'TransferOutcome',
}

export enum TwoSidedClaimStatus {
  WaitingAdmin = 'WaitingAdmin',
  Approved = 'Approved',
  WaitingLearner = 'WaitingLearner',
  DeclinedAdmin = 'DeclinedAdmin',
  DeclinedLearner = 'DeclinedLearner',
}

export enum ClaimStatus {
  Waiting = 'Waiting',
  Approved = 'Approved',
  Declined = 'Declined',
}

export enum ClaimAction {
  Approve = 'Approve',
  Reject = 'Reject',
  ApproveWithNewPrice = 'ApproveWithNewPrice',
}

export enum EmailGroupingTypes {
  All = 'All',
  Learners = 'Learners',
  Trackers = 'Trackers',
}

export function roleTranslate(role: Role | undefined) {
  switch (role) {
    case Role.ADMIN:
      return 'Администратор';
    case Role.STUDENT:
      return 'Ученик';
    case Role.TRACKER:
      return 'Трекер';
    default:
      return '';
  }
}

export function assessmentTypeTranslate(role: AssessmentType | undefined) {
  switch (role) {
    case AssessmentType.AdminGrade:
      return 'Оц. в ведомость';
    case AssessmentType.TrackerGrade:
      return 'Оц. трекера';
    default:
      return '';
  }
}
