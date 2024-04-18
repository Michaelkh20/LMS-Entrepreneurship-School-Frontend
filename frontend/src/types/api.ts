import {
  Role,
  Sex,
  AssessmentType,
  AssignmentType,
  LotStatus,
  TransactionType,
  TwoSidedClaimStatus,
  ClaimStatus,
  ClaimAction,
  EmailGroupingTypes,
} from './common';

export type AuthApiArg = {
  /** User login */
  login: string;
  /** User password */
  password: string;
};

export type GetAccountsApiArg = {
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
  pageSize: number;
};

export type UpdateAccountApiArg = {
  /** id */
  id: string;
  /** User to update */
  updateRequestBody: UserCreateUpdateRequest;
};

export type GetUserBalanceByIdApiResponse =
  /** status 200 Successful response */ {
    balance: string;
  };

export type GetAccountsForSelectApiArg = {
  /** Search role */
  role: Role;
};

export type GetTeamsApiArg = {
  /** Search team number */
  teamNumber: number;
  /** Search team project theme */
  teamProjectTheme: string;
  /** Sorting order in format 'sortProperty,sortOrder' */
  sort: string;
  /** Page number */
  page: number;
  /** The size of the page to be returned */
  pageSize: number;
};

export type UpdateTeamApiArg = {
  /** id */
  id: string;
  /** Team to update */
  updateRequestBody: TeamCreateUpdateRequest;
};

export type GetAssessmentsApiArg = {
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
  pageSize: number;
};

export type UpdateAssessmentApiArg = {
  /** id */
  id: string;
  /** Assessment to update */
  updateRequestBody: AssessmentCreateUpdateRequest;
};

export type GetHwListApiArg = {
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
  pageSize: number;
};

export type UpdateHwApiArg = {
  /** id */
  id: string;
  /** Assignment to update */
  updateRequestBody: HwCreateUpdateRequest;
};

export type GetTestListApiArg = {
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
  pageSize: number;
};

export type UpdateTestApiArg = {
  /** id */
  id: string;
  /** Test to update */
  updateRequestBody: TestCreateUpdateRequest;
};

export type GetOtherAssignmentListApiArg = {
  /** Search title */
  title: string;
  /** Search assignment type */
  assignmentType: AssignmentType;
  /** The beginning of the desired interval */
  dateFrom: string;
  /** The end of the desired interval */
  dateTo: string;
  /** Sorting order in format 'sortProperty,sortOrder' */
  sort: string;
  /** Page number */
  page: number;
  /** The size of the page to be returned */
  pageSize: number;
};

export type UpdateOtherAssignmentApiArg = {
  /** id */
  id: string;
  /** Other assignment to update */
  updateRequestBody: OtherAssignmentCreateUpdateRequest;
};

export type GetAssignmentSnippetsApiArg = {
  /** Search assignment type */
  assignmentType: AssignmentType;
};

export type GetLessonsApiArg = {
  /** Search lesson number */
  lessonNumber: number;
  /** Search lesson title */
  lessonTheme: string;
  /** The beginning of the desired interval */
  dateFrom: string;
  /** The end of the desired interval */
  dateTo: string;
  /** Sorting order in format 'sortProperty,sortOrder' */
  sort: string;
  /** Page number */
  page: number;
  /** The size of the page to be returned */
  pageSize: number;
};

export type UpdateLessonApiArg = {
  /** id */
  id: string;
  /** Lesson to update */
  updateRequestBody: LessonCreateUpdateRequest;
};

export type GetLotsForMarketPlaceApiArg = {
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
  pageSize: number;
};

export type GetLotsApiArg = {
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
  pageSize: number;
};

export type UpdateLotApiArg = {
  /** id */
  id: string;
  /** Lot to update */
  updateRequestBody: LotCreateUpdateRequest;
};

export type GetTransactionsApiArg = {
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
  pageSize: number;
};

export type GetBuyLotClaimsApiArg = {
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
  pageSize: number;
};

export type GetListLotClaimsApiArg = {
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
  pageSize: number;
};

export type GetFailedDeadlineClaimsApiArg = {
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
  pageSize: number;
};

export type GetTransferClaimsApiArg = {
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
  pageSize: number;
};

export type UpdateAttendanceApiArg = {
  /** id */
  id: string;
  /** Attendance to update */
  updateRequestBody: AttendanceUpdateRequest;
};

export type GetSolutionsApiArg = {
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
  pageSize: number;
};

export type GetSolutionByAssignmentIdAndLearnerIdApiArg = {
  /** Assignment id */
  assignmentId: string;
  /** Learner id */
  learnerId: string;
};

export type AuthResponse = {
  user_id: string;
  role: Role;
  token: string;
};

export type UserCreateUpdateRequest = {
  name: string;
  surname: string;
  patronymic: string | null;
  email: string;
  phone_number: string | null;
  messenger: string | null;
  sex: Sex;
  role: Role;
};

export type Pagination = {
  total_pages: number;
  total_elements: number;
};

export type TeamSnippet = {
  id: string;
  number: number;
};

export type User = {
  id: string;
  name: string;
  surname: string;
  patronymic: string | null;
  email: string;
  phone_number: string | null;
  messenger: string | null;
  teams: TeamSnippet[];
  sex: Sex;
  role: Role;
  balance: string;
};

export type UsersPage = {
  pagination: Pagination;
  users: User[];
};

export type UserSnippet = {
  id: string;
  name: string;
  surname: string;
  patronymic: string | null;
};

export type UserSnippetList = {
  users: UserSnippet[];
};

export type TeamTableSnippet = {
  id: string;
  number: number;
  project_theme: string;
};

export type TeamsPage = {
  pagination: Pagination;
  teams: TeamTableSnippet[];
};

export type TeamCreateUpdateRequest = {
  number: number;
  project_theme: string;
  learners: string[];
  trackers: string[];
};

export type Team = {
  id: string;
  number: number;
  project_theme: string;
  learners: User[];
  trackers: User[];
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

export type TeamSnippetList = {
  teams: TeamSnippet[];
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
  solutionstring: string;
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

export type LessonSnippet = {
  id: string;
  number: number;
  theme: string;
};

export type HwTableSnippet = {
  id: string;
  title: string;
  lesson: LessonSnippet;
  deadline: string;
};

export type HwPage = {
  pagination: Pagination;
  content: HwTableSnippet[];
};

export type HwCreateUpdateRequest = {
  title: string;
  lessonstring: string | null;
  description: string;
  criteria: string;
  isTeamWork: boolean;
  deadline: string;
};

export type Hw = {
  id: string;
  title: string;
  lesson: LessonSnippet;
  description: string;
  criteria: string;
  isTeamWork: boolean;
  deadline: string;
};

export type Test = {
  id: string;
  title: string;
  lesson: LessonSnippet;
  link: string;
  deadline: string;
};

export type TestsPage = {
  pagination: Pagination;
  tests: Test[];
};

export type TestCreateUpdateRequest = {
  title: string;
  lessonstring: string | null;
  link: string;
  deadline: string;
};

export type OtherAssignment = {
  id: string;
  title: string;
  deadline: string;
  assignmentType: AssignmentType;
};

export type OtherAssignmentsPage = {
  pagination: Pagination;
  assignments: OtherAssignment[];
};

export type OtherAssignmentCreateUpdateRequest = {
  title: string;
  deadline: string;
  assignmentType: AssignmentType;
};

export type AssignmentSnippetList = {
  HWs: AssignmentSnippet[];
};

export type LessonTableSnippet = {
  id: string;
  number: number;
  theme: string;
  date: string;
};

export type LessonsPage = {
  pagination: Pagination;
  lessons: LessonTableSnippet[];
};

export type LessonCreateUpdateRequest = {
  number: number;
  theme: string;
  description: string;
  date: string;
  presLinks: string[];
  videoLinks: string[];
};

export type Lesson = {
  id: string;
  number: number;
  theme: string;
  description: string;
  date: string;
  presLinks: string[];
  videoLinks: string[];
  homeworkstring: string | null;
  teststring: string | null;
};

export type LessonSnippetList = {
  lessons: LessonSnippet[];
};

export type PerformerSnippet = {
  id: string | null;
  name: string;
};

export type LotSnippetForTable = {
  id: string;
  number: number | null;
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
  lotstring: string;
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
  lot: LotSnippetForClaim;
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
  HW: HwTableSnippet;
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
