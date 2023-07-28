export type GetAccountsApiArg = {
  name?: ShortName;
  email?: Email;
  teamNumber?: TeamNumber;
  role?: Role;
  sortProperty?: string;
  sortOrder?: SortOrder;
  page?: PageNumber;
  pageSize?: PageSize;
};

export type UserBalance = {
  balance?: number;
  name?: ShortName;
};

export type GetTeamsApiArg = {
  teamNumber?: TeamNumber;
  sortProperty?: string;
  sortOrder?: SortOrder;
  page?: PageNumber;
  pageSize?: PageSize;
};

export type GetAssessmentsApiArg = {
  learnerId?: Id;
  taskId?: Id;
  assessmentType?: AssessmentType;
  dateFrom?: Date;
  dateTo?: Date;
  sortProperty?: string;
  sortOrder?: SortOrder;
  pageable?: boolean;
  page?: PageNumber;
  pageSize?: PageSize;
};

export type GetTasksApiArg = {
  lessonId?: Id;
  taskType?: TaskType;
  sortProperty?: string;
  sortOrder?: SortOrder;
  page?: PageNumber;
  pageSize?: PageSize;
};

export type GetLessonsApiArg = {
  /** Search lesson number */
  lessonNumber?: LessonNumber;
  /** Search lesson title */
  lessonTitle?: LessonTitle;
  /** Property of response to sort by */
  sortProperty?: string;
  /** OSorting order */
  sortOrder?: SortOrder;
  /** Если false, то без pagination. */
  pageable?: boolean;
  /** Page number */
  page?: PageNumber;
  /** The size of the page to be returned */
  pageSize?: PageSize;
};

export type GetLotsApiArg = {
  /** Search lot number */
  lotNumber?: LotNumber;
  /** Search lot title */
  lotTitle?: LotTitle;
  /** Learner id */
  learnerId?: Id;
  /** Property of response to sort by */
  sortProperty?: string;
  /** OSorting order */
  sortOrder?: SortOrder;
  /** Page number */
  page?: PageNumber;
  /** The size of the page to be returned */
  pageSize?: PageSize;
};

export type GetLotsLearnerApiArg = {
  /** Search lot number */
  lotNumber?: LotNumber;
  /** Search lot title */
  lotTitle?: LotTitle;
  /** The beginning of the desired interval */
  priceFrom?: Price;
  /** The end of the desired interval */
  priceTo?: Price;
  /** Page number */
  page?: PageNumber;
  /** The size of the page to be returned */
  pageSize?: PageSize;
};

export type GetTransactionsApiArg = {
  /** Learner id */
  learnerId?: Id;
  /** Search transaction type */
  transactionType?: TransactionType;
  /** The beginning of the desired interval */
  dateFrom?: Date;
  /** The end of the desired interval */
  dateTo?: Date;
  /** Property of response to sort by */
  sortProperty?: string;
  /** OSorting order */
  sortOrder?: SortOrder;
  /** Page number */
  page?: PageNumber;
  /** The size of the page to be returned */
  pageSize?: PageSize;
};

export type GetTransactionsLearnerApiArg = {
  /** Search transaction type */
  transactionType?: TransactionType;
  /** The beginning of the desired interval */
  dateFrom?: Date;
  /** The end of the desired interval */
  dateTo?: Date;
  /** Property of response to sort by */
  sortProperty?: string;
  /** OSorting order */
  sortOrder?: SortOrder;
  /** Page number */
  page?: PageNumber;
  /** The size of the page to be returned */
  pageSize?: PageSize;
};

export type GetClaimsApiArg = {
  /** Search claim type */
  claimType: ClaimType;
  /** Search claim status */
  claimStatus?: ClaimStatus;
  /** Search lot number */
  lotNumber?: LotNumber;
  /** Learner id */
  learnerId?: Id;
  /** Task id */
  taskId?: Id;
  /** Receiver id */
  receiverId?: Id;
  /** The beginning of the desired interval */
  dateFrom?: Date;
  /** The end of the desired interval */
  dateTo?: Date;
  /** Property of response to sort by */
  sortProperty?: string;
  /** OSorting order */
  sortOrder?: SortOrder;
  /** Page number */
  page?: PageNumber;
  /** The size of the page to be returned */
  pageSize?: PageSize;
};

export type GetClaimsLearnerApiArg = {
  /** Search claim type */
  claimType?: ClaimType;
  /** Search claim status */
  claimStatus?: ClaimStatus;
  /** The beginning of the desired interval */
  dateFrom?: Date;
  /** The end of the desired interval */
  dateTo?: Date;
  /** Property of response to sort by */
  sortProperty?: string;
  /** OSorting order */
  sortOrder?: SortOrder;
  /** Page number */
  page?: PageNumber;
  /** The size of the page to be returned */
  pageSize?: PageSize;
};

export type UploadFileApiArg = {
  body: {
    file?: Blob;
    taskId?: Id;
  };
};

export type GetSolutionsApiArg = {
  /** Task id */
  taskId: Id;
  /** Learner id */
  learnerId?: Id;
  /** Team id */
  teamId?: Id;
  /** Property of response to sort by */
  sortProperty?: string;
  /** OSorting order */
  sortOrder?: SortOrder;
  /** Если false, то без pagination. */
  pageable?: boolean;
  /** Page number */
  page?: PageNumber;
  /** The size of the page to be returned */
  pageSize?: PageSize;
};

export type GetSolutionsLearnerApiArg = {
  /** Property of response to sort by */
  sortProperty?: string;
  /** OSorting order */
  sortOrder?: SortOrder;
};

export type GetSolutionsTrackerApiArg = {
  /** Property of response to sort by */
  sortProperty?: string;
  /** OSorting order */
  sortOrder?: SortOrder;
};

export type Role = 'Learner' | 'Tracker';
export type AuthResponse = {
  role?: Role;
};
export type AuthRequest = {
  login?: string;
  password?: string;
};
export type PageNumber = number;
export type PageSize = number;
export type TotalPages = number;
export type TotalElements = number;
export type Pagination = {
  page?: PageNumber;
  pageSize?: PageSize;
  totalPages?: TotalPages;
  totalElements?: TotalElements;
};
export type Id = number;
export type ShortName = string;
export type Email = string;
export type TeamNumber = number;
export type Balance = number;
export type UserTableItem = {
  id?: Id;
  name?: ShortName;
  email?: Email;
  teamNumber?: TeamNumber[];
  role?: Role;
  balance?: Balance;
};
export type AccountsPage = {
  pagination?: Pagination;
  content?: UserTableItem[];
};
export type SortOrder = 'asc' | 'desc';
export type Name = string;
export type Surname = string;
export type MiddleName = string;
export type Phone = string;
export type Messenger = string;
export type Gender = boolean;
export type Password = string;
export type AccountRequest = {
  id?: Id;
  name?: Name;
  surname?: Surname;
  middleName?: MiddleName;
  email?: Email;
  phone?: Phone;
  messenger?: Messenger;
  gender?: Gender;
  role?: Role;
  password?: Password;
};
export type FullName = string;
export type UserProfile = {
  id?: Id;
  fullName?: FullName;
  email?: Email;
  phone?: Phone;
  messenger?: Messenger;
  teamNumber?: TeamNumber[];
  gender?: Gender;
  role?: Role;
  balance?: Balance;
};
export type UserSelectionItem = {
  id?: Id;
  name?: ShortName;
};
export type UserSelectionList = UserSelectionItem[];
export type ProjectTheme = string;
export type TeamTableItem = {
  id?: Id;
  teamNumber?: TeamNumber;
  projectTheme?: ProjectTheme;
};
export type TeamsPage = {
  pagination?: Pagination;
  content?: TeamTableItem[];
};
export type TeamRequest = {
  id?: Id;
  projectTheme?: ProjectTheme;
  members?: Id[];
};
export type TeamProfile = {
  id?: Id;
  teamNumber?: TeamNumber;
  projectTheme?: ProjectTheme;
  members?: UserTableItem[];
};
export type PublicUserProfile = {
  id?: Id;
  fullName?: FullName;
  email?: Email;
  messenger?: Messenger;
  role?: Role;
};
export type LearnerTeamProfile = {
  id?: Id;
  teamNumber?: TeamNumber;
  projectTheme?: ProjectTheme;
  members?: PublicUserProfile[];
};
export type TeamSelectionItem = {
  id?: Id;
  number?: TeamNumber;
};
export type TeamSelectionList = TeamSelectionItem[];
export type TaskTitle = string;
export type TaskSelectionItem = {
  id?: Id;
  title?: TaskTitle;
};
export type DateTime = string;
export type AssessmentType = 'FinalGrade' | 'TrackerGrade';
export type Assessment = number;
export type AssessmentTableItem = {
  id?: Id;
  learner?: UserSelectionItem;
  task?: TaskSelectionItem;
  issueDate?: DateTime;
  assessmentType?: AssessmentType;
  assessment?: Assessment;
};
export type AssessmentsPage = {
  pagination?: Pagination;
  content?: AssessmentTableItem[];
};
export type Date = string;
export type Comment = string;
export type AssessmentRequest = {
  id?: Id;
  learnerId?: Id;
  teamId?: Id;
  assessment?: Assessment;
  taskId?: Id;
  comment?: Comment;
};
export type AssessmentInfo = {
  id?: Id;
  learner?: UserSelectionItem;
  tracker?: UserSelectionItem;
  task?: TaskSelectionItem;
  issueDate?: DateTime;
  assessmentType?: AssessmentType;
  assessment?: Assessment;
  comment?: Comment;
};
export type FinalGradeType =
  | 'HW'
  | 'Testing'
  | 'Competitions'
  | 'Exams'
  | 'Attendance';
export type Bonus = number;
export type FinalGradeInfo = {
  assessments?: {
    finalAssessment?: number;
    type?: FinalGradeType;
  }[];
  bonus?: Bonus;
  total?: number;
};
export type GradeWeight = number;
export type FinalGradeFormula = {
  weight?: GradeWeight;
  type?: FinalGradeType;
}[];
export type BonusRequest = {
  learnerId?: Id;
  bonus?: Bonus;
};
export type TaskType = 'HW' | 'Test' | 'Competition' | 'Exam';
export type LearnerAssessmentTableItem = {
  id?: Id;
  taskTitle?: TaskTitle;
  taskType?: TaskType;
  lessonId?: Id;
  issueDate?: DateTime;
  assessment?: Assessment;
};
export type LessonNumber = number;
export type LessonSelectionItem = {
  id?: Id;
  number?: LessonNumber;
};
export type TaskTableItem = {
  id?: Id;
  title?: TaskTitle;
  lesson?: LessonSelectionItem;
  taskType?: TaskType;
  deadline?: DateTime;
};
export type TasksPage = {
  pagination?: Pagination;
  content?: TaskTableItem[];
};
export type Description = string;
export type Criteria = string;
export type Link = string;
export type TaskRequest = {
  id?: Id;
  title?: TaskTitle;
  lessonId?: Id;
  description?: Description;
  criteria?: Criteria;
  isTeamWork?: boolean;
  link?: Link;
  taskType?: TaskType;
  deadline?: DateTime;
};
export type TaskInfo = {
  id?: Id;
  title?: TaskTitle;
  lesson?: LessonSelectionItem;
  description?: Description;
  criteria?: Criteria;
  isTeamWork?: boolean;
  link?: Link;
  taskType?: TaskType;
  deadline?: DateTime;
};
export type TaskSelectionList = TaskSelectionItem[];
export type DeadlineInfo = {
  lesson?: LessonSelectionItem;
  task?: TaskSelectionItem;
  deadlineTime?: DateTime;
};
export type LessonTitle = string;
export type LessonTableItem = {
  id?: Id;
  number?: LessonNumber;
  title?: LessonTitle;
  date?: Date;
};
export type LessonsPage = {
  pagination?: Pagination;
  content?: LessonTableItem[];
};
export type LessonRequest = {
  id?: Id;
  number?: LessonNumber;
  title?: LessonTitle;
  description?: Description;
  date?: Date;
  presLink?: Link;
  videoLink?: Link;
  homeworkId?: Id;
  testId?: Id;
};
export type LessonInfo = {
  id?: Id;
  number?: LessonNumber;
  title?: LessonTitle;
  description?: Description;
  date?: Date;
  presLink?: Link;
  videoLink?: Link;
  homework?: TaskSelectionItem;
  test?: TaskSelectionItem;
};
export type LessonSelectionList = LessonSelectionItem[];
export type LearnerLessonTableItem = {
  id?: Id;
  number?: LessonNumber;
  title?: LessonTitle;
};
export type LearnerLessonInfo = {
  id?: Id;
  number?: LessonNumber;
  title?: LessonTitle;
  description?: Description;
  date?: Date;
  presLink?: Link;
  videoLink?: Link;
  homework?: TaskInfo;
  test?: TaskInfo;
};
export type LotNumber = number;
export type LotTitle = string;
export type Price = number;
export type LotTableItem = {
  id?: Id;
  number?: LotNumber;
  title?: LotTitle;
  performer?: UserSelectionItem;
  price?: Price;
};
export type LotsPage = {
  pagination?: Pagination;
  content?: LotTableItem[];
};
export type AdminLotRequest = {
  id?: Id;
  title?: LotTitle;
  description?: Description;
  terms?: Criteria;
  performer?: FullName;
  price?: Price;
};
export type LotInfo = {
  id?: Id;
  number?: LotNumber;
  title?: LotTitle;
  description?: Description;
  terms?: Criteria;
  performer?: UserSelectionItem;
  price?: Price;
};
export type LearnerLotsPage = {
  pagination?: Pagination;
  content?: LotInfo[];
};
export type TransactionType =
  | 'Activity'
  | 'SellLot'
  | 'AdminIncome'
  | 'TransferIncome'
  | 'FailedDeadline'
  | 'BuyLot'
  | 'AdminOutcome'
  | 'TransferOutcome';
export type Sum = number;
export type AdminTransactionTableItem = {
  id?: Id;
  learner?: UserSelectionItem;
  type?: TransactionType;
  description?: Description;
  dateTime?: DateTime;
  sum?: Sum;
};
export type TransactionsPage = {
  pagination?: Pagination;
  content?: AdminTransactionTableItem[];
};
export type TransactionRequest = {
  learnerId?: Id;
  description?: Description;
  sum?: Sum;
};
export type ClaimTitle = string;
export type ClaimSelectionItem = {
  id?: Id;
  title?: ClaimTitle;
};
export type TransactionInfo = {
  id?: Id;
  learner?: UserSelectionItem;
  type?: TransactionType;
  description?: Description;
  dateTime?: DateTime;
  sum?: Sum;
  calim?: ClaimSelectionItem;
};
export type LearnerTransactionTableItem = {
  id?: Id;
  type?: TransactionType;
  description?: Description;
  dateTime?: DateTime;
  sum?: Sum;
};
export type LearnerTransactionsPage = {
  pagination?: Pagination;
  content?: LearnerTransactionTableItem[];
};
export type ClaimType =
  | 'BuyingLot'
  | 'FailedDeadline'
  | 'PlacingLot'
  | 'Transfer';
export type LotSelectionItem = {
  id?: Id;
  number?: LotNumber;
};
export type ClaimStatus = 'Waiting' | 'Approved' | 'Declined';
export type Delay = number;
export type AdminClaimTableItem = {
  id?: Id;
  claimType?: ClaimType;
  lot?: LotSelectionItem;
  task?: TaskSelectionItem;
  learner?: UserSelectionItem;
  receiver?: UserSelectionItem;
  dateTime?: DateTime;
  status?: ClaimStatus;
  sum?: Sum;
  delay?: Delay;
};
export type ClaimsPage = {
  /** status 200 Для всех типов заявок в элементах поля content должны быть заполнены поля id, claimType, status и dateTime.

  Если claimType = BuyingLot, то также должны быть заполнены поля lot, learner(покупатель) и sum.

  Если claimType = FailedDeadline, то также должны быть заполнены поля learner(ученик), task и delay.

  Если claimType = PlacingLot, то также должны быть заполнены поля lot, learner(исполнитель) и sum.

  Если claimType = Transfer, то также должны быть заполнены поля learner(отправитель), receiver(получатель) и sum.

  Не заполненные поля должны содержать null.  */
  pagination?: Pagination;
  content?: AdminClaimTableItem[];
};
export type ClaimAction = 'Approve' | 'Reject';
export type AdminClaimRequest = {
  /** Поле fine заполняется только при типе заявки = DeadlineFailed и поле action = Approve */
  id?: Id;
  action?: ClaimAction;
  fine?: Sum;
};
export type ClaimInfo = {
  /** status 200 Для всех типов заявок должны быть заполнены поля id, claimType, status и dateTime.

  Если claimType = BuyingLot, то также должны быть заполнены поля lot и learner(покупатель).

  Если claimType = FailedDeadline, то также должны быть заполнены поля learner(ученик), deadline и fine(если status = Approved).

  Если claimType = PlacingLot, то также должно быть заполнено поле lot.

  claimType = Transfer, не запрашивается.

  Не заполненные поля должны содержать null. */
  id?: Id;
  claimType?: ClaimType;
  lot?: LotInfo;
  deadline?: DeadlineInfo;
  learner?: UserSelectionItem;
  dateTime?: DateTime;
  status?: ClaimStatus;
  fine?: Sum;
};
export type NewClaimsAmount = {
  claimType?: ClaimType;
  amount?: number;
};
export type LearnerClaimTableItem = {
  id?: Id;
  claimType?: ClaimType;
  title?: ClaimTitle;
  dateTime?: DateTime;
  status?: ClaimStatus;
};
export type LearnerClaimsPage = {
  pagination?: Pagination;
  content?: LearnerClaimTableItem[];
};
export type LearnerLotRequest = {
  title?: LotTitle;
  description?: Description;
  terms?: Criteria;
  price?: Price;
};
export type LearnerClaimRequest = {
  /** Для всех типов заявок должно быть заполнено поле claimType.
  
    Если claimType = BuyingLot, то также должно быть заполнены поле buyingLotId.
  
    Если claimType = PlacingLot, то также должно быть заполнены поле lot.
  
    Если claimType = Transfer, то также должны быть заполнены поля receiverId(получатель) и sum.
  
    Не заполненные поля должны содержать null. */
  claimType?: ClaimType;
  lot?: LearnerLotRequest;
  buyingLotId?: Id;
  receiverId?: Id;
  sum?: Sum;
};
export type AttendanceInfo = {
  /** status 200 Ответ содержит информацию об уроке в поле lesson и список learners вообще всех
   * зарегистрированных учеников, с полем didCome = true и возможно accruedСurrency у тех, кто пришёл. */
  lesson?: LessonTableItem;
  learners?: {
    learner?: UserTableItem;
    didCome?: boolean;
    accruedСurrency?: Price;
  }[];
};
export type AttendanceRequest = {
  lessonId?: Id;
  learners?: {
    learnerId?: Id;
    accruedСurrency?: Price;
  }[];
};
export type AdminSolutionTableItem = {
  /** status 200 Если task коммандный, то заполнено поле team, а если task индивидуальный,  то заполнено поле learner. */
  learner?: UserSelectionItem;
  team?: TeamSelectionItem;
  completeDateTime?: DateTime;
  fileId?: Id;
};
export type SolutionsPage = {
  pagination?: Pagination;
  content?: AdminSolutionTableItem[];
};
export type LearnerSolutionTableItem = {
  task?: TaskSelectionItem;
  deadline?: DateTime;
  completeDateTime?: DateTime;
};
export type LearnerSolutionsTable = {
  content?: LearnerSolutionTableItem[];
};
export type TrackerAssessment = {
  id?: Id;
  trackerName?: FullName;
  assessment?: Assessment;
  comment?: Comment;
};
export type LearnerSolutionInfo = {
  id?: Id;
  task?: TaskInfo;
  completeDateTime?: DateTime;
  fileId?: Id;
  trackerAssessments?: TrackerAssessment[];
};
export type TrackerTasksSolutionTableItem = {
  task?: TaskSelectionItem;
  deadline?: DateTime;
  submittedNumber?: number;
  notEvaluatedNumber?: number;
};
export type TrackerTasksSolutionsTable = {
  content?: TrackerTasksSolutionTableItem[];
};
export type TrackerSolutionTableItem = {
  id?: Id;
  name?: string;
  completeDateTime?: DateTime;
  assessment?: Assessment;
};
export type TrackerSolutionsTable = {
  content?: TrackerSolutionTableItem[];
};
export type TrackerSolutionInfo = {
  id?: Id;
  learner?: UserSelectionItem;
  team?: TeamSelectionItem;
  task?: TaskInfo;
  completeDateTime?: DateTime;
  fileId?: Id;
  comment?: Comment;
  assessment?: Assessment;
};
export type EmailGroupingTypes = 'All' | 'Learners' | 'Trackers';
export type EmailRequest = {
  grouping?: EmailGroupingTypes[];
  learnersIds?: Id[];
  teamsIds?: Id[];
  title?: string;
  content?: Description;
};
