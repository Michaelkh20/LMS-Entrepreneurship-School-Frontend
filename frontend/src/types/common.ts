export type PageNumber = number;
export type PageSize = number;
export type TotalPages = number;
export type TotalElements = number;
export type Id = number;
export type ShortName = string;
export type Email = string;
export type TeamNumber = number;
export type Balance = number;
export type Name = string;
export type Surname = string;
export type MiddleName = string;
export type Phone = string;
export type Messenger = string;
export type Gender = boolean;
export type Password = string;
export type FullName = string;
export type ProjectTheme = string;
export type TaskTitle = string;
export type DateTime = string;
export type Assessment = number;
export type Date = string;
export type Comment = string;
export type Bonus = number;
export type GradeWeight = number;
export type LessonNumber = number;
export type Description = string;
export type Criteria = string;
export type Link = string;
export type LessonTitle = string;
export type LotNumber = number;
export type LotTitle = string;
export type Price = number;
export type Sum = number;
export type ClaimTitle = string;
export type Delay = number;

// Enums
export type Role = 'Learner' | 'Tracker';

export type SortOrder = 'asc' | 'desc';

export type AssessmentType = 'FinalGrade' | 'TrackerGrade';

export type FinalGradeType =
  | 'HW'
  | 'Testing'
  | 'Competitions'
  | 'Exams'
  | 'Attendance';
export type TaskType = 'HW' | 'Test' | 'Competition' | 'Exam';

export type TransactionType =
  | 'Activity'
  | 'SellLot'
  | 'AdminIncome'
  | 'TransferIncome'
  | 'FailedDeadline'
  | 'BuyLot'
  | 'AdminOutcome'
  | 'TransferOutcome';

export type ClaimType =
  | 'BuyingLot'
  | 'FailedDeadline'
  | 'PlacingLot'
  | 'Transfer';

export type ClaimStatus = 'Waiting' | 'Approved' | 'Declined';

export type ClaimAction = 'Approve' | 'Reject';

export type EmailGroupingTypes = 'All' | 'Learners' | 'Trackers';

// Request and response types
export type FinalGradeFormula = {
  weight?: GradeWeight;
  type?: FinalGradeType;
}[];