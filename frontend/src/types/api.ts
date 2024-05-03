import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  TypedUseMutationResult,
} from '@reduxjs/toolkit/dist/query/react';
import {
  AssessmentType,
  LotStatus,
  TransactionType,
  TwoSidedClaimStatus,
  ClaimStatus,
  ClaimAction,
  EmailGroupingTypes,
} from './common';

import { Role } from './proto';

import type {
  Competition,
  Exam,
  ICreateUpdateCompetitionRequest,
  ICreateUpdateExamRequest,
  ICreateUpdateHomeworkRequest,
  ICreateUpdateLessonRequest,
  ICreateUpdateTeamRequest,
  ICreateUpdateTestRequest,
  ICreateUpdateUserRequest,
} from '@/types/proto';

export type MutationResultType<ResponseType, ArgType> = TypedUseMutationResult<
  ResponseType,
  ArgType,
  BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError,
    {},
    FetchBaseQueryMeta
  >
>;

export interface ICreateUpdateExamCompetitionRequest
  extends ICreateUpdateExamRequest,
    ICreateUpdateCompetitionRequest {}

export interface ExamCompetition extends Exam, Competition {}

export type AuthApiArg = {
  /** User login */
  login: string;
  /** User password */
  password: string;
};

export type GetAccountsApiArg = Partial<{
  /** Search name */
  name: string;
  /** Search email */
  email: string;
  /** Search team number */
  teamNumber: number;
  /** Search role */
  role: Role;
  /** Sorting order in format 'sortProperty,sortOrder' */
  sort: string;
  /** Page number */
  page: number;
  /** The size of the page to be returned */
  size: number;
}>;

export type UpdateUserApiArg = {
  /** id */
  id: string;
  /** User to update */
  updateRequestBody: ICreateUpdateUserRequest;
};

export type GetUserSnippetListApiArg = {
  /** Search role */
  role?: Role;
};

export type GetTeamsApiArg = Partial<{
  /** Search team number */
  teamNumber: number;
  /** Search team project theme */
  teamProjectTheme: string;
  /** Sorting order in format 'sortProperty,sortOrder' */
  sort: string;
  /** Page number */
  page: number;
  /** The size of the page to be returned */
  size: number;
}>;

export type UpdateTeamApiArg = {
  /** id */
  id: string;
  /** Team to update */
  updateRequestBody: ICreateUpdateTeamRequest;
};

export type GetAssessmentsApiArg = Partial<{
  /** Learner id */
  learnerId: string;
  /** Team id */
  teamId: string;
  /** Assignment id */
  assignmentId: string;
  /** Search assessment type */
  assessmentType: AssessmentType;
  /** Sorting order in format 'sortProperty,sortOrder' */
  sort: string;
  /** Page number */
  page: number;
  /** The size of the page to be returned */
  size: number;
}>;

export type UpdateAssessmentApiArg = {
  /** id */
  id: string;
  /** Assessment to update */
  updateRequestBody: AssessmentCreateUpdateRequest;
};

export type GetHwListApiArg = Partial<{
  /** Search title */
  title: string;
  /** Lesson id */
  lessonId: string;
  /** The beginning of the desired interval */
  dateFrom: string;
  /** The end of the desired interval */
  dateTo: string;
  /** Sorting order in format 'sortProperty,sortOrder' */
  sort: string;
  /** Page number */
  page: number;
  /** The size of the page to be returned */
  size: number;
}>;

export type UpdateHwApiArg = {
  /** id */
  id: string;
  /** Assignment to update */
  updateRequestBody: ICreateUpdateHomeworkRequest;
};

export type GetTestListApiArg = Partial<{
  /** Search title */
  title: string;
  /** Lesson id */
  lessonId: string;
  /** The beginning of the desired interval */
  deadlineFrom: string;
  /** The end of the desired interval */
  deadlineTo: string;
  /** Sorting order in format 'sortProperty,sortOrder' */
  sort: string;
  /** Page number */
  page: number;
  /** The size of the page to be returned */
  size: number;
}>;

export type UpdateTestApiArg = {
  /** id */
  id: string;
  /** Test to update */
  updateRequestBody: ICreateUpdateTestRequest;
};

export type UpdateExamApiArg = {
  /** id */
  id: string;
  /** Test to update */
  updateRequestBody: ICreateUpdateExamRequest;
};

export type UpdateCompetitionApiArg = {
  /** id */
  id: string;
  /** Test to update */
  updateRequestBody: ICreateUpdateCompetitionRequest;
};

export type GetExamListApiArg = Partial<{
  /** Search title */
  title: string;
  /** The beginning of the desired interval */
  dateFrom: string;
  /** The end of the desired interval */
  dateTo: string;
  /** Sorting order in format 'sortProperty,sortOrder' */
  sort: string;
  /** Page number */
  page: number;
  /** The size of the page to be returned */
  size: number;
}>;

export type GetCompetitionListApiArg = Partial<{
  /** Search title */
  title: string;
  /** The beginning of the desired interval */
  dateFrom: string;
  /** The end of the desired interval */
  dateTo: string;
  /** Sorting order in format 'sortProperty,sortOrder' */
  sort: string;
  /** Page number */
  page: number;
  /** The size of the page to be returned */
  size: number;
}>;

export type GetLessonsApiArg = Partial<{
  /** Search lesson number */
  lessonNumber: number;
  /** Search lesson title */
  title: string;
  /** The beginning of the desired interval */
  publishDate: string;
  /** The end of the desired interval */
  dateTo: string;
  /** Sorting order in format 'sortProperty,sortOrder' */
  sort: string;
  /** Page number */
  page: number;
  /** The size of the page to be returned */
  size: number;
}>;

export type UpdateLessonApiArg = {
  /** id */
  id: string;
  /** Lesson to update */
  updateRequestBody: ICreateUpdateLessonRequest;
};

export type GetLotsForMarketPlaceApiArg = Partial<{
  /** Search lot number */
  lotNumber: number;
  /** Search lot title */
  lotTitle: string;
  /** Owner id */
  performerId: string;
  /** Performer name */
  performerName: string;
  /** The beginning of the desired interval */
  priceFrom: number;
  /** The end of the desired interval */
  priceTo: number;
  /** Sorting order in format 'sortProperty,sortOrder' */
  sort: string;
  /** Page number */
  page: number;
  /** The size of the page to be returned */
  size: number;
}>;

export type GetLotsApiArg = Partial<{
  /** Search lot number */
  lotNumber: number;
  /** Search lot title */
  lotTitle: string;
  /** Owner id */
  performerId: string;
  /** Performer name */
  performerName: string;
  /** Search lot status */
  lotStatus: LotStatus;
  /** Sorting order in format 'sortProperty,sortOrder' */
  sort: string;
  /** Page number */
  page: number;
  /** The size of the page to be returned */
  size: number;
}>;

export type UpdateLotApiArg = {
  /** id */
  id: string;
  /** Lot to update */
  updateRequestBody: LotCreateUpdateRequest;
};

export type GetTransactionsApiArg = Partial<{
  /** Learner id */
  learnerId: string;
  /** Search transaction type */
  transactionType: TransactionType;
  /** The beginning of the desired interval */
  dateFrom: string;
  /** The end of the desired interval */
  dateTo: string;
  /** Sorting order in format 'sortProperty,sortOrder' */
  sort: string;
  /** Page number */
  page: number;
  /** The size of the page to be returned */
  size: number;
}>;

export type GetBuyLotClaimsApiArg = Partial<{
  /** Search two-sided claim status */
  twoSidedClaimStatus: TwoSidedClaimStatus;
  /** Search lot number */
  lotNumber: number;
  /** Buyer id */
  buyerId: string;
  /** Seller id */
  sellerId: string;
  /** The beginning of the desired interval */
  dateFrom: string;
  /** The end of the desired interval */
  dateTo: string;
  /** Sorting order in format 'sortProperty,sortOrder' */
  sort: string;
  /** Page number */
  page: number;
  /** The size of the page to be returned */
  size: number;
}>;

export type GetListLotClaimsApiArg = Partial<{
  /** Search two-sided claim status */
  twoSidedClaimStatus: TwoSidedClaimStatus;
  /** Owner id */
  performerId: string;
  /** The beginning of the desired interval */
  dateFrom: string;
  /** The end of the desired interval */
  dateTo: string;
  /** Sorting order in format 'sortProperty,sortOrder' */
  sort: string;
  /** Page number */
  page: number;
  /** The size of the page to be returned */
  size: number;
}>;

export type GetFailedDeadlineClaimsApiArg = Partial<{
  /** Search claim status */
  claimStatus: ClaimStatus;
  /** Learner id */
  learnerId: string;
  /** Assignment id */
  assignmentId: string;
  /** The beginning of the desired interval */
  dateFrom: string;
  /** The end of the desired interval */
  dateTo: string;
  /** Sorting order in format 'sortProperty,sortOrder' */
  sort: string;
  /** Page number */
  page: number;
  /** The size of the page to be returned */
  size: number;
}>;

export type GetTransferClaimsApiArg = Partial<{
  /** Search claim status */
  claimStatus: ClaimStatus;
  /** Sender id */
  senderId: string;
  /** Receiver id */
  receiverId: string;
  /** The beginning of the desired interval */
  dateFrom: string;
  /** The end of the desired interval */
  dateTo: string;
  /** Sorting order in format 'sortProperty,sortOrder' */
  sort: string;
  /** Page number */
  page: number;
  /** The size of the page to be returned */
  size: number;
}>;

export type UpdateAttendanceApiArg = {
  /** id */
  id: string;
  /** Attendance to update */
  updateRequestBody: AttendanceUpdateRequest;
};

export type GetSolutionsApiArg = Partial<{
  /** Assignment id */
  assignmentId: string;
  /** Learner id */
  learnerId: string;
  /** Team id */
  teamId: string;
  /** Sorting order in format 'sortProperty,sortOrder' */
  sort: string;
  /** Page number */
  page: number;
  /** The size of the page to be returned */
  size: number;
}>;

export type GetSolutionByAssignmentIdAndLearnerIdApiArg = {
  /** Assignment id */
  assignmentId: string;
  /** Learner id */
  learnerId: string;
};

export type Pagination = {
  total_pages: number;
  total_elements: number;
};

export type TeamSnippet = {
  id: string;
  number: number;
};

export type UserSnippet = {
  id: string;
  name: string;
  surname: string;
  patronymic: string | null;
};

export type PublicUserProfile = {
  id: string;
  name: string;
  surname: string;
  patronymic: string | null;
  email: string;
  messenger: string | null;
  role: Role;
};

export type TeamPublicProfile = {
  id: string;
  number: number;
  project_theme: string;
  learners: PublicUserProfile[];
  trackers: PublicUserProfile[];
};

export type AssignmentSnippet = {
  id: string;
  title: string;
};

export type AssessmentTableSnippet = {
  id: string;
  learner: UserSnippet;
  assignment: AssignmentSnippet;
  assessmentType: AssessmentType;
  assessment: number;
};

export type AssessmentsPage = {
  pagination: Pagination;
  content: AssessmentTableSnippet[];
};

export type AssessmentCreateUpdateRequest = {
  solutionId: string;
  assessment: number;
  comment: string;
};

export type FinalGrades = {
  HWs: number;
  Tests: number;
  Competitions: number;
  Exams: number;
  Bonus: number;
};

export type FinalGradeFormula = {
  HWs: number;
  Tests: number;
  Competitions: number;
  Exams: number;
};

export type SetBonusRequest = {
  learnerstring: string;
  bonus: number;
};

export type LessonTableSnippet = {
  id: string;
  number: number;
  theme: string;
  date: string;
};

export type PerformerSnippet = {
  id: string | null;
  name: string;
};

export type LotSnippetForTable = {
  id: string;
  number: number | null;
  title: string;
  status: LotStatus;
  listingDate: string | null;
  price: number;
  performer: PerformerSnippet;
};

export type LotsPage = {
  pagination: Pagination;
  lots: LotSnippetForTable[];
};

export type LotCreateUpdateRequest = {
  title: string;
  description: string;
  terms: string;
  performer: {
    id: string | null;
    name: string | null;
  };

  price: number;
};

export type Lot = {
  id: string;
  number: number | null;
  status: LotStatus;
  title: string;
  description: string;
  terms: string;
  price: number;
  performer: PerformerSnippet;
  listingDate: string | null;
};

export type Transaction = {
  id: string;
  learner: UserSnippet;
  type: TransactionType;
  description: string | null;
  date: string;
  sum: number;
};

export type TransactionsPage = {
  pagination: Pagination;
  content: Transaction[];
};

export type ManualAccrualRequest = {
  id: string;
  description: string | null;
  sum: number;
};

export type LotSnippet = {
  number: number | null;
  title: string;
  price: number;
  performer: UserSnippet;
};

export type BuyLotClaimSnippet = {
  id: string;
  status: TwoSidedClaimStatus;
  buyer: UserSnippet;
  date: string;
  lot: LotSnippet;
};

export type BuyLotClaimsPage = {
  pagination: Pagination;
  claims: BuyLotClaimSnippet[];
};

export type BuyLotRequest = {
  lotId: string;
};

export type LotSnippetForClaim = {
  id: string;
  title: string;
  description: string;
  terms: string;
  price: number;
  performer: UserSnippet;
};

export type BuyLotClaim = {
  id: string;
  status: TwoSidedClaimStatus;
  buyer: UserSnippet;
  date: string;
  lot: Lot;
};

export type ListLotClaimSnippet = {
  id: string;
  status: TwoSidedClaimStatus;
  date: string;
  lot: LotSnippet;
};

export type ListLotClaimsPage = {
  pagination: Pagination;
  claims: ListLotClaimSnippet[];
};

export type ListLotRequest = {
  title: string;
  description: string;
  terms: string;
  price: number;
};

export type ListLotClaim = {
  id: string;
  status: TwoSidedClaimStatus;
  date: string;
  lot: LotSnippetForClaim;
};

export type HwSnippetWithDeadline = {
  id: string;
  title: string;
  deadline: string;
};

export type FailedDeadlineClaim = {
  id: string;
  status: ClaimStatus;
  learner: UserSnippet;
  completeDate: string;
  delay: number;
  assignment: HwSnippetWithDeadline;
};

export type FailedDeadlineClaimsPage = {
  pagination: Pagination;
  claims: FailedDeadlineClaim[];
};

export type TransferClaim = {
  id: string;
  sender: UserSnippet;
  receiver: UserSnippet;
  sum: number;
};

export type TransferClaimsPage = {
  pagination: Pagination;
  claims: TransferClaim[];
};

export type TransferRequest = {
  receiverstring: string;
  sum: number;
};

export type ApproveRejectClaimRequest = {
  id: string;
  action: ClaimAction;
  fine: number | null;
  newPrice: number | null;
};

export type UserSnippetWithEmail = {
  id: string;
  name: string;
  email: string;
};

export type AttendanceInfo = {
  lesson: LessonTableSnippet;
  learners: {
    learner: UserSnippetWithEmail;
    hasCome: boolean;
    accruedСurrency: number | null;
  }[];
};

export type AttendanceUpdateRequest = {
  lessonstring: string;
  learners: {
    learnerstring: string;
    accruedСurrency: number | null;
  }[];
};

export type Solution = {
  id: string;
  learner: UserSnippet;
  uploader: UserSnippet;
  team: TeamSnippet;
  HW: { id: string; title: string };
  completeDateTime: string;
  fileUrl: string;
};

export type SolutionsPage = {
  pagination: Pagination;
  content: Solution[];
};

export type SolutionCreateUpdateRequest = {
  HWstring: string;
  fileUrl: string;
};

export type EmailRequest = {
  grouping: EmailGroupingTypes[];
  learnersstrings: string[];
  teamsstrings: string[];
  title: string;
  content: string;
};
