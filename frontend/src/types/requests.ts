import {
  ShortName,
  Email,
  TeamNumber,
  Role,
  SortOrder,
  PageNumber,
  PageSize,
  Id,
  AssessmentType,
  TaskType,
  LessonNumber,
  LessonTitle,
  LotNumber,
  LotTitle,
  Price,
  TransactionType,
  ClaimType,
  ClaimStatus,
  Name,
  Surname,
  MiddleName,
  Phone,
  Messenger,
  Gender,
  Password,
  ProjectTheme,
  Assessment,
  Bonus,
  TaskTitle,
  Description,
  Criteria,
  DateTime,
  FullName,
  Sum,
  ClaimAction,
  EmailGroupingTypes,
  Link,
} from './common';

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

export type AuthRequest = {
  login?: string;
  password?: string;
};

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

export type TeamRequest = {
  id?: Id;
  projectTheme?: ProjectTheme;
  members?: Id[];
};

export type AssessmentRequest = {
  id?: Id;
  learnerId?: Id;
  teamId?: Id;
  assessment?: Assessment;
  taskId?: Id;
  comment?: Comment;
};

export type BonusRequest = {
  learnerId?: Id;
  bonus?: Bonus;
};

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

export type AdminLotRequest = {
  id?: Id;
  title?: LotTitle;
  description?: Description;
  terms?: Criteria;
  performer?: FullName;
  price?: Price;
};

export type TransactionRequest = {
  learnerId?: Id;
  description?: Description;
  sum?: Sum;
};

export type AdminClaimRequest = {
  /** Поле fine заполняется только при типе заявки = DeadlineFailed и поле action = Approve */
  id?: Id;
  action?: ClaimAction;
  fine?: Sum;
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

export type AttendanceRequest = {
  lessonId?: Id;
  learners?: {
    learnerId?: Id;
    accruedСurrency?: Price;
  }[];
};

export type EmailRequest = {
  grouping?: EmailGroupingTypes[];
  learnersIds?: Id[];
  teamsIds?: Id[];
  title?: string;
  content?: Description;
};