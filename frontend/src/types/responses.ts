import {
  PageNumber,
  PageSize,
  TotalPages,
  TotalElements,
  ShortName,
  Role,
  Id,
  Email,
  TeamNumber,
  Balance,
  FullName,
  Phone,
  Messenger,
  Gender,
  ProjectTheme,
  TaskTitle,
  DateTime,
  AssessmentType,
  Assessment,
  FinalGradeType,
  Bonus,
  TaskType,
  Description,
  Criteria,
  LessonNumber,
  LessonTitle,
  LotNumber,
  LotTitle,
  Price,
  TransactionType,
  Sum,
  ClaimTitle,
  ClaimType,
  ClaimStatus,
  Delay,
  Link,
  Name,
  Surname,
  MiddleName,
  Comment,
} from './common';

export type Pagination = {
  page: PageNumber;
  pageSize: PageSize;
  totalPages: TotalPages;
  totalElements: TotalElements;
};

export type UserBalance = {
  balance: number;
  name: ShortName;
};

export type AuthResponse = {
  role: Role;
};

export type UserTableItem = {
  id: Id;
  name: ShortName;
  email: Email;
  teamNumber: TeamNumber[];
  role: Role;
  balance: Balance;
};

export type AccountsPage = {
  pagination: Pagination;
  content: UserTableItem[];
};

export type UserProfile = {
  id: Id;
  name: Name;
  surname: Surname;
  middleName: MiddleName | null;
  email: Email;
  phone: Phone;
  messenger: Messenger;
  teamNumber: TeamNumber[];
  gender: Gender;
  role: Role;
  balance: Balance;
};

export type UserSelectionItem = {
  id: Id;
  name: ShortName;
};

export type UserSelectionList = UserSelectionItem[];

export type TeamTableItem = {
  id: Id;
  teamNumber: TeamNumber;
  projectTheme: ProjectTheme;
};

export type TeamsPage = {
  pagination: Pagination;
  content: TeamTableItem[];
};

export type TeamProfile = {
  id: Id;
  teamNumber: TeamNumber;
  projectTheme: ProjectTheme;
  members: UserTableItem[];
};

export type PublicUserProfile = {
  id: Id;
  fullName: FullName;
  email: Email;
  messenger: Messenger;
  role: Role;
};

export type LearnerTeamProfile = {
  id: Id;
  teamNumber: TeamNumber;
  projectTheme: ProjectTheme;
  members: PublicUserProfile[];
};

export type TeamSelectionItem = {
  id: Id;
  number: TeamNumber;
};

export type TeamSelectionList = TeamSelectionItem[];

export type TaskSelectionItem = {
  id: Id;
  title: TaskTitle;
};

export type AssessmentTableItem = {
  id: Id;
  learner: UserSelectionItem;
  task: TaskSelectionItem;
  issueDate: DateTime;
  assessmentType: AssessmentType;
  assessment: Assessment;
};

export type AssessmentsPage = {
  pagination: Pagination;
  content: AssessmentTableItem[];
};

export type AssessmentInfo = {
  id: Id;
  learner: UserSelectionItem;
  tracker: UserSelectionItem;
  task: TaskSelectionItem;
  issueDate: DateTime;
  assessmentType: AssessmentType;
  assessment: Assessment;
  comment: Comment;
};

export type FinalGradeInfo = {
  assessments: {
    finalAssessment: number;
    type: FinalGradeType;
  }[];
  bonus: Bonus;
  total: number;
};

export type LearnerAssessmentTableItem = {
  id: Id;
  taskTitle: TaskTitle;
  taskType: TaskType;
  lessonId: Id;
  issueDate: DateTime;
  assessment: Assessment;
};

export type TaskTableItem = {
  id: Id;
  title: TaskTitle;
  lesson: LessonSelectionItem | null;
  taskType: TaskType;
  deadline: DateTime;
};

export type TasksPage = {
  pagination: Pagination;
  content: TaskTableItem[];
};

export type TaskInfo = {
  id: Id;
  title: TaskTitle;
  lesson: LessonSelectionItem | null;
  description: Description;
  criteria: Criteria;
  isTeamWork: boolean;
  link: Link | null;
  taskType: TaskType;
  deadline: DateTime;
};

export type TaskSelectionList = TaskSelectionItem[];

export type DeadlineInfo = {
  lesson: LessonSelectionItem | null;
  task: TaskSelectionItem;
  deadlineTime: DateTime;
};

export type LessonTableItem = {
  id: Id;
  number: LessonNumber;
  title: LessonTitle;
  date: Date;
};

export type LessonsPage = {
  pagination: Pagination;
  content: LessonTableItem[];
};

export type LessonInfo = {
  id: Id;
  number: LessonNumber;
  title: LessonTitle;
  description: Description;
  date: Date;
  presLink: Link | null;
  videoLink: Link | null;
  homework: TaskSelectionItem | null;
  test: TaskSelectionItem | null;
};

export type LessonSelectionItem = {
  id: Id;
  number: LessonNumber;
};

export type LotSelectionItem = {
  id: Id;
  number: LotNumber;
};

export type LessonSelectionList = LessonSelectionItem[];

export type LearnerLessonTableItem = {
  id: Id;
  number: LessonNumber;
  title: LessonTitle;
};

export type LearnerLessonInfo = {
  id: Id;
  number: LessonNumber;
  title: LessonTitle;
  description: Description;
  date: Date;
  presLink: Link | null;
  videoLink: Link | null;
  homework: TaskInfo | null;
  test: TaskInfo | null;
};

export type LotTableItem = {
  id: Id;
  number: LotNumber;
  title: LotTitle;
  performerUser: UserSelectionItem | null;
  performerOther: FullName | null;
  price: Price;
};

export type LotsPage = {
  pagination: Pagination;
  content: LotTableItem[];
};

export type LotInfo = {
  id: Id;
  number: LotNumber;
  title: LotTitle;
  description: Description;
  terms: Criteria;
  performerUser: UserSelectionItem | null;
  performerOther: FullName | null;
  price: Price;
};

export type LearnerLotsPage = {
  pagination: Pagination;
  content: LotInfo[];
};

export type AdminTransactionTableItem = {
  id: Id;
  learner: UserSelectionItem;
  type: TransactionType;
  description: Description;
  dateTime: DateTime;
  sum: Sum;
};

export type TransactionsPage = {
  pagination: Pagination;
  content: AdminTransactionTableItem[];
};

export type ClaimSelectionItem = {
  id: Id;
  title: ClaimTitle;
};

export type TransactionInfo = {
  id: Id;
  learner: UserSelectionItem;
  type: TransactionType;
  description: Description;
  dateTime: DateTime;
  sum: Sum;
  claim: ClaimSelectionItem | null;
};

export type LearnerTransactionTableItem = {
  id: Id;
  type: TransactionType;
  description: Description;
  dateTime: DateTime;
  sum: Sum;
};

export type LearnerTransactionsPage = {
  pagination: Pagination;
  content: LearnerTransactionTableItem[];
};

export type AdminClaimTableItem = {
  id: Id;
  claimType: ClaimType;
  lot: LotSelectionItem | null;
  task: TaskSelectionItem | null;
  learner: UserSelectionItem;
  receiver: UserSelectionItem | null;
  dateTime: DateTime;
  status: ClaimStatus;
  sum: Sum | null;
  delay: Delay | null;
};

export type ClaimsPage = {
  /** status 200 Для всех типов заявок в элементах поля content должны быть заполнены поля id, claimType, status и dateTime.

  Если claimType = BuyingLot, то также должны быть заполнены поля lot, learner(покупатель) и sum.

  Если claimType = FailedDeadline, то также должны быть заполнены поля learner(ученик), task и delay.

  Если claimType = PlacingLot, то также должны быть заполнены поля lot, learner(исполнитель) и sum.

  Если claimType = Transfer, то также должны быть заполнены поля learner(отправитель), receiver(получатель) и sum.

  Не заполненные поля должны содержать null.  */
  pagination: Pagination;
  content: AdminClaimTableItem[];
};

export type ClaimInfo = {
  /** status 200 Для всех типов заявок должны быть заполнены поля id, claimType, status и dateTime.

  Если claimType = BuyingLot, то также должны быть заполнены поля lot и learner(покупатель).

  Если claimType = FailedDeadline, то также должны быть заполнены поля learner(ученик), deadline и fine(если status = Approved).

  Если claimType = PlacingLot, то также должно быть заполнено поле lot.

  claimType = Transfer, не запрашивается.

  Не заполненные поля должны содержать null. */
  id: Id;
  claimType: ClaimType;
  lot: LotInfo | null;
  deadline: DeadlineInfo | null;
  learner: UserSelectionItem | null;
  dateTime: DateTime;
  status: ClaimStatus;
  fine: Sum | null;
};

export type NewClaimsAmount = {
  claimType: ClaimType;
  amount: number;
};

export type LearnerClaimTableItem = {
  id: Id;
  claimType: ClaimType;
  title: ClaimTitle;
  dateTime: DateTime;
  status: ClaimStatus;
};

export type LearnerClaimsPage = {
  pagination: Pagination;
  content: LearnerClaimTableItem[];
};

export type AttendanceInfo = {
  /** status 200 Ответ содержит информацию об уроке в поле lesson и список learners вообще всех
   * зарегистрированных учеников, с полем didCome = true и возможно accruedСurrency у тех, кто пришёл. */
  lesson: LessonTableItem;
  learners: {
    learner: UserTableItem;
    didCome: boolean;
    accruedСurrency: Price | null;
  }[];
};

export type AdminSolutionTableItem = {
  /** status 200 Если task коммандный, то заполнено поле team, а если task индивидуальный,  то заполнено поле learner. */
  learner: UserSelectionItem | null;
  team: TeamSelectionItem | null;
  completeDateTime: DateTime;
  fileId: Id;
};

export type SolutionsPage = {
  pagination: Pagination;
  content: AdminSolutionTableItem[];
};

export type LearnerSolutionTableItem = {
  task: TaskSelectionItem;
  deadline: DateTime;
  completeDateTime: DateTime | null;
};

export type LearnerSolutionsTable = {
  content: LearnerSolutionTableItem[];
};

export type TrackerAssessment = {
  id: Id;
  trackerName: FullName;
  assessment: Assessment;
  comment: Comment;
};

export type LearnerSolutionInfo = {
  id: Id;
  task: TaskInfo;
  completeDateTime: DateTime | null;
  fileId: Id | null;
  trackerAssessments: TrackerAssessment[];
};

export type TrackerTasksSolutionTableItem = {
  task: TaskSelectionItem;
  deadline: DateTime;
  submittedNumber: number;
  notEvaluatedNumber: number;
};

export type TrackerTasksSolutionsTable = {
  content: TrackerTasksSolutionTableItem[];
};

export type TrackerSolutionTableItem = {
  id: Id;
  name: string;
  completeDateTime: DateTime;
  assessment: Assessment | null;
};

export type TrackerSolutionsTable = {
  content: TrackerSolutionTableItem[];
};

export type TrackerSolutionInfo = {
  id: Id;
  learner: UserSelectionItem;
  team: TeamSelectionItem;
  task: TaskInfo;
  completeDateTime: DateTime;
  fileId: Id;
  comment: Comment;
  assessment: Assessment | null;
};
