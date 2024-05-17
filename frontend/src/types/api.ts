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
  TaskType,
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
  IUpdateGradeRequest,
  Page,
  SubmissionPayload,
  TeamSnippet,
  UserSnippet,
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

export type GetGradesApiArg = Partial<{
  taskType: TaskType;
  /** Learner id */
  ownerId: string;
  /** Team id */
  teamId: string;
  /** Assignment id */
  taskId: string;
  /** Sorting order in format 'sortProperty,sortOrder' */
  sort: string;
  /** Page number */
  page: number;
  /** The size of the page to be returned */
  size: number;
}>;

export type UpdateGradeApiArg = {
  /** id */
  id: string;
  /** Assessment to update */
  updateRequestBody: IUpdateGradeRequest;
};

export type GetHwListApiArg = Partial<{
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

export type GetCompetitionListApiArg = Partial<{
  /** Search title */
  title: string;
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

export type GetLessonsApiArg = Partial<{
  /** Search lesson number */
  lessonNumber: number;
  /** Search lesson title */
  title: string;
  /** The beginning of the desired interval */
  publishDateTo: string;

  publishDateFrom: string;
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

export type GetBuyedLotsApiArg = Partial<{
  /** Search lot number */
  lotNumber: number;
  /** Search lot title */
  lotTitle: string;
  /** Owner id */
  performerId: string;
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

export type GetSellingLotsApiArg = Partial<{
  /** Search lot number */
  lotNumber: number;
  /** Search lot title */
  lotTitle: string;
  /** Owner id */
  performerId: string;
  /** The beginning of the desired interval */
  status: LotStatus;
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
  /** Search lot status */
  lotStatus: LotStatus;
  /** Sorting order in format 'sortProperty,sortOrder' */
  sort: string;
  dateFrom: string;
  dateTo: string;
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
  status: ClaimStatus;
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
  status: ClaimStatus;
  /** Search lot number */
  lotNumber: number;
  /** Search lot title */
  lotTitle: string;
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

export type GetSubmissionsApiArg = Partial<{
  /** Assignment id */
  taskId: string;
  /** Learner id */
  ownerId: string;
  /** Publisher id */
  publisherId: string;
  /** Team id */
  teamId: string;
  /** Sorting order in format 'sortProperty,sortOrder' */
  sort: string;
  /** Page number */
  page: number;
  /** The size of the page to be returned */
  size: number;
}>;

export type GetSubmissionByHWIdAndOwnerIdApiArg = {
  /** Assignment id */
  hwId: string;
  /** Learner id */
  ownerId: string;
};

export interface Submission {
  id: string;
  homework: HomeworkSnippet;
  owner: UserSnippet;
  publisher: UserSnippet;
  /** this field is set only if submission is on team homework */
  team: TeamSnippet | undefined;
  publishedAt: Date;
  payload: SubmissionPayload;
}

export interface IGetSubmissionResponse {
  submission: Submission;
}

export interface ISubmissionsList {
  page: Page;
  submissions: Submission[];
}

export type Attachment = {
  name: string;
  url: string;
};

export type SubmissionWithAttachments = Omit<Submission, 'payload'> & {
  textAnswer: Submission['payload']['textAnswer'];
  attachments: Attachment[];
};

export interface LessonSnippet {
  /** required */
  id: string;
  title: string;
  lessonNumber: number;
  publishDate: Date;
}

export interface HomeworkSnippet {
  id: string;
  lesson: LessonSnippet;
  title: string;
  deadlineDate: Date;
}

export interface ExamSnippet {
  id: string;
  title: string;
  deadlineDate: Date;
}

export interface CompetitionSnippet {
  id: string;
  title: string;
  deadlineDate: Date;
}

export interface TestSnippet {
  id: string;
  lesson: LessonSnippet;
  title: string;
  deadlineDate: Date;
}

export interface IGetGradeResponse {
  grade: Grade;
}

export interface IGradesList {
  page: Page;
  grades: Grade[];
}

export type TaskSnippet = {
  id: string;
  title: string;
  taskType: TaskType;
};

export interface Grade {
  id: string;
  gradeOwner: UserSnippet;
  task:
    | { $case: 'homework'; homework: HomeworkSnippet }
    | { $case: 'exam'; exam: ExamSnippet }
    | { $case: 'competition'; competition: CompetitionSnippet }
    | { $case: 'test'; test: TestSnippet };
  /** this is optional, present only if task is a homework */
  submissionForGrading: Submission | undefined;
  adminGrade: number | undefined;
  adminComment: string | undefined;
  trackerGrades: TrackerGrade[];
}

export interface TrackerGrade {
  id: string;
  tracker: UserSnippet;
  grade: number;
  comment: string | undefined;
}

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
  pagination: Page;
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
  page: Page;
  lots: Lot[];
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
  listingDate: Date | null;
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
  pagination: Page;
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
  page: Page;
  claims: BuyLotClaim[];
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
  status: ClaimStatus;
  buyer: UserSnippet;
  date: Date;
  lot: Lot;
};

export type ListLotClaimSnippet = {
  id: string;
  status: TwoSidedClaimStatus;
  date: string;
  lot: LotSnippet;
};

export type ListLotClaimsPage = {
  page: Page;
  claims: ListLotClaim[];
};

export type ListLotRequest = {
  title: string;
  description: string;
  terms: string;
  price: number;
};

export type ListLotCreateRequestAdmin = {
  title: string;
  description: string;
  terms: string;
  price: number;
  performer: UserSnippet;
};

export type ListLotUpdateRequestAdmin = Omit<
  ListLotCreateRequestAdmin,
  'performer'
> & {
  id: string;
};

export type ListLotClaim = {
  id: string;
  status: ClaimStatus;
  date: Date;
  lot: Lot;
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
  pagination: Page;
  claims: FailedDeadlineClaim[];
};

export type TransferClaim = {
  id: string;
  status: ClaimStatus;
  sender: UserSnippet;
  receiver: UserSnippet;
  sum: number;
  date: Date;
};

export type TransferClaimsPage = {
  page: Page;
  claims: TransferClaim[];
};

export type TransferRequest = {
  receiver: UserSnippet;
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
  lessonId: string;
  learners: {
    learnerId: string;
    accruedСurrency: number | null;
  }[];
};

export type EmailRequest = {
  grouping: EmailGroupingTypes[];
  learnersstrings: string[];
  teamsstrings: string[];
  title: string;
  content: string;
};
