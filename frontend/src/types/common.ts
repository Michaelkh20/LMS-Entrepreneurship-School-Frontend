export { Role, Sex } from './proto';

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
