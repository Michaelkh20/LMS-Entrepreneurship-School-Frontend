import { emptyApi as api } from './emptyApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    auth: build.mutation<AuthApiResponse, AuthApiArg>({
      query: (queryArg) => ({
        url: `/auth`,
        method: 'POST',
        body: queryArg.authRequest,
      }),
    }),
    getAccounts: build.query<GetAccountsApiResponse, GetAccountsApiArg>({
      query: (queryArg) => ({
        url: `/admin/accounts`,
        params: {
          name: queryArg.name,
          email: queryArg.email,
          teamNumber: queryArg.teamNumber,
          role: queryArg.role,
          sortProperty: queryArg.sortProperty,
          sortOrder: queryArg.sortOrder,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),
    createAccount: build.mutation<
      CreateAccountApiResponse,
      CreateAccountApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/accounts`,
        method: 'POST',
        body: queryArg.userRequest,
      }),
    }),
    updateAccount: build.mutation<
      UpdateAccountApiResponse,
      UpdateAccountApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/accounts`,
        method: 'PUT',
        body: queryArg.userRequest,
      }),
    }),
    getAccountById: build.query<
      GetAccountByIdApiResponse,
      GetAccountByIdApiArg
    >({
      query: (queryArg) => ({ url: `/accounts/${queryArg.id}` }),
    }),
    getUserBalanceById: build.query<
      GetUserBalanceByIdApiResponse,
      GetUserBalanceByIdApiArg
    >({
      query: () => ({ url: `/learner/accounts/balance-name` }),
    }),
    deleteAccountById: build.mutation<
      DeleteAccountByIdApiResponse,
      DeleteAccountByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/accounts/${queryArg.id}`,
        method: 'DELETE',
      }),
    }),
    getAccountsForSelect: build.query<
      GetAccountsForSelectApiResponse,
      GetAccountsForSelectApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/accounts/select`,
        params: { role: queryArg.role },
      }),
    }),
    getTeams: build.query<GetTeamsApiResponse, GetTeamsApiArg>({
      query: (queryArg) => ({
        url: `/admin/teams`,
        params: {
          teamNumber: queryArg.teamNumber,
          sortProperty: queryArg.sortProperty,
          sortOrder: queryArg.sortOrder,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),
    createTeam: build.mutation<CreateTeamApiResponse, CreateTeamApiArg>({
      query: (queryArg) => ({
        url: `/admin/teams`,
        method: 'POST',
        body: queryArg.teamRequest,
      }),
    }),
    updateTeam: build.mutation<UpdateTeamApiResponse, UpdateTeamApiArg>({
      query: (queryArg) => ({
        url: `/admin/teams`,
        method: 'PUT',
        body: queryArg.teamRequest,
      }),
    }),
    getTeamById: build.query<GetTeamByIdApiResponse, GetTeamByIdApiArg>({
      query: (queryArg) => ({ url: `/admin/teams/${queryArg.id}` }),
    }),
    deleteTeamById: build.mutation<
      DeleteTeamByIdApiResponse,
      DeleteTeamByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/teams/${queryArg.id}`,
        method: 'DELETE',
      }),
    }),
    getTeamByIdLearner: build.query<
      GetTeamByIdLearnerApiResponse,
      GetTeamByIdLearnerApiArg
    >({
      query: (queryArg) => ({ url: `/learner/teams/${queryArg.id}` }),
    }),
    getTeamsForSelect: build.query<
      GetTeamsForSelectApiResponse,
      GetTeamsForSelectApiArg
    >({
      query: () => ({ url: `/admin/teams/select` }),
    }),
    getAssessments: build.query<
      GetAssessmentsApiResponse,
      GetAssessmentsApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/assessments`,
        params: {
          learnerId: queryArg.learnerId,
          taskId: queryArg.taskId,
          assessmentType: queryArg.assessmentType,
          dateFrom: queryArg.dateFrom,
          dateTo: queryArg.dateTo,
          sortProperty: queryArg.sortProperty,
          sortOrder: queryArg.sortOrder,
          pageable: queryArg.pageable,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),
    createAssessment: build.mutation<
      CreateAssessmentApiResponse,
      CreateAssessmentApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/assessments`,
        method: 'POST',
        body: queryArg.assessmentRequest,
      }),
    }),
    updateAssessment: build.mutation<
      UpdateAssessmentApiResponse,
      UpdateAssessmentApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/assessments`,
        method: 'PUT',
        body: queryArg.assessmentRequest,
      }),
    }),
    getAssessmentById: build.query<
      GetAssessmentByIdApiResponse,
      GetAssessmentByIdApiArg
    >({
      query: (queryArg) => ({ url: `/admin/assessments/${queryArg.id}` }),
    }),
    deleteAssessmentById: build.mutation<
      DeleteAssessmentByIdApiResponse,
      DeleteAssessmentByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/assessments/${queryArg.id}`,
        method: 'DELETE',
      }),
    }),
    getFinalGradesByLearnerId: build.query<
      GetFinalGradesByLearnerIdApiResponse,
      GetFinalGradesByLearnerIdApiArg
    >({
      query: (queryArg) => ({
        url: `/assessments/final-grades`,
        params: { learnerId: queryArg.learnerId },
      }),
    }),
    getFinalGradeFormula: build.query<
      GetFinalGradeFormulaApiResponse,
      GetFinalGradeFormulaApiArg
    >({
      query: () => ({ url: `/assessments/formula` }),
    }),
    updateFinalGradeFormula: build.mutation<
      UpdateFinalGradeFormulaApiResponse,
      UpdateFinalGradeFormulaApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/assessments/formula`,
        method: 'PUT',
        body: queryArg.finalGradeFormula,
      }),
    }),
    increaseFinalGrade: build.mutation<
      IncreaseFinalGradeApiResponse,
      IncreaseFinalGradeApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/assessments/increase-final-grade`,
        method: 'POST',
        body: queryArg.bonusRequest,
      }),
    }),
    getFinalAssessmentsLearner: build.query<
      GetFinalAssessmentsLearnerApiResponse,
      GetFinalAssessmentsLearnerApiArg
    >({
      query: (queryArg) => ({
        url: `/learner/assessments/final`,
        params: { taskType: queryArg.taskType },
      }),
    }),
    createAssessmentByTracker: build.mutation<
      CreateAssessmentByTrackerApiResponse,
      CreateAssessmentByTrackerApiArg
    >({
      query: (queryArg) => ({
        url: `/tracker/assessments`,
        method: 'POST',
        body: queryArg.assessmentRequest,
      }),
    }),
    updateAssessmentByTracker: build.mutation<
      UpdateAssessmentByTrackerApiResponse,
      UpdateAssessmentByTrackerApiArg
    >({
      query: (queryArg) => ({
        url: `/tracker/assessments`,
        method: 'PUT',
        body: queryArg.assessmentRequest,
      }),
    }),
    getTasks: build.query<GetTasksApiResponse, GetTasksApiArg>({
      query: (queryArg) => ({
        url: `/admin/tasks`,
        params: {
          lessonId: queryArg.lessonId,
          taskType: queryArg.taskType,
          sortProperty: queryArg.sortProperty,
          sortOrder: queryArg.sortOrder,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),
    createTask: build.mutation<CreateTaskApiResponse, CreateTaskApiArg>({
      query: (queryArg) => ({
        url: `/admin/tasks`,
        method: 'POST',
        body: queryArg.taskRequest,
      }),
    }),
    updateTask: build.mutation<UpdateTaskApiResponse, UpdateTaskApiArg>({
      query: (queryArg) => ({
        url: `/admin/tasks`,
        method: 'PUT',
        body: queryArg.taskRequest,
      }),
    }),
    getTaskById: build.query<GetTaskByIdApiResponse, GetTaskByIdApiArg>({
      query: (queryArg) => ({ url: `/admin/tasks/${queryArg.id}` }),
    }),
    deleteTaskById: build.mutation<
      DeleteTaskByIdApiResponse,
      DeleteTaskByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/tasks/${queryArg.id}`,
        method: 'DELETE',
      }),
    }),
    getTasksForSelect: build.query<
      GetTasksForSelectApiResponse,
      GetTasksForSelectApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/tasks/select`,
        params: { taskType: queryArg.taskType },
      }),
    }),
    getDeadlineByTask: build.query<
      GetDeadlineByTaskApiResponse,
      GetDeadlineByTaskApiArg
    >({
      query: (queryArg) => ({ url: `/admin/tasks/${queryArg.id}/deadline` }),
    }),
    getLessons: build.query<GetLessonsApiResponse, GetLessonsApiArg>({
      query: (queryArg) => ({
        url: `/admin/lessons`,
        params: {
          lessonNumber: queryArg.lessonNumber,
          lessonTitle: queryArg.lessonTitle,
          sortProperty: queryArg.sortProperty,
          sortOrder: queryArg.sortOrder,
          pageable: queryArg.pageable,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),
    createLesson: build.mutation<CreateLessonApiResponse, CreateLessonApiArg>({
      query: (queryArg) => ({
        url: `/admin/lessons`,
        method: 'POST',
        body: queryArg.lessonRequest,
      }),
    }),
    updateLesson: build.mutation<UpdateLessonApiResponse, UpdateLessonApiArg>({
      query: (queryArg) => ({
        url: `/admin/lessons`,
        method: 'PUT',
        body: queryArg.lessonRequest,
      }),
    }),
    getLessonById: build.query<GetLessonByIdApiResponse, GetLessonByIdApiArg>({
      query: (queryArg) => ({ url: `/admin/lessons/${queryArg.id}` }),
    }),
    deleteLessonById: build.mutation<
      DeleteLessonByIdApiResponse,
      DeleteLessonByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/lessons/${queryArg.id}`,
        method: 'DELETE',
      }),
    }),
    getLessonsForSelect: build.query<
      GetLessonsForSelectApiResponse,
      GetLessonsForSelectApiArg
    >({
      query: () => ({ url: `/admin/lessons/select` }),
    }),
    getLessonsLearner: build.query<
      GetLessonsLearnerApiResponse,
      GetLessonsLearnerApiArg
    >({
      query: () => ({ url: `/learner/lessons` }),
    }),
    getLessonByIdLearner: build.query<
      GetLessonByIdLearnerApiResponse,
      GetLessonByIdLearnerApiArg
    >({
      query: (queryArg) => ({ url: `/learner/lessons/${queryArg.id}` }),
    }),
    getLots: build.query<GetLotsApiResponse, GetLotsApiArg>({
      query: (queryArg) => ({
        url: `/admin/lots`,
        params: {
          lotNumber: queryArg.lotNumber,
          lotTitle: queryArg.lotTitle,
          learnerId: queryArg.learnerId,
          sortProperty: queryArg.sortProperty,
          sortOrder: queryArg.sortOrder,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),
    createLot: build.mutation<CreateLotApiResponse, CreateLotApiArg>({
      query: (queryArg) => ({
        url: `/admin/lots`,
        method: 'POST',
        body: queryArg.adminLotRequest,
      }),
    }),
    updateLot: build.mutation<UpdateLotApiResponse, UpdateLotApiArg>({
      query: (queryArg) => ({
        url: `/admin/lots`,
        method: 'PUT',
        body: queryArg.adminLotRequest,
      }),
    }),
    getLotById: build.query<GetLotByIdApiResponse, GetLotByIdApiArg>({
      query: (queryArg) => ({ url: `/admin/lots/${queryArg.id}` }),
    }),
    deleteLotById: build.mutation<
      DeleteLotByIdApiResponse,
      DeleteLotByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/lots/${queryArg.id}`,
        method: 'DELETE',
      }),
    }),
    getLotsLearner: build.query<
      GetLotsLearnerApiResponse,
      GetLotsLearnerApiArg
    >({
      query: (queryArg) => ({
        url: `/learner/lots`,
        params: {
          lotNumber: queryArg.lotNumber,
          lotTitle: queryArg.lotTitle,
          priceFrom: queryArg.priceFrom,
          priceTo: queryArg.priceTo,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),
    getTransactions: build.query<
      GetTransactionsApiResponse,
      GetTransactionsApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/transactions`,
        params: {
          learnerId: queryArg.learnerId,
          transactionType: queryArg.transactionType,
          dateFrom: queryArg.dateFrom,
          dateTo: queryArg.dateTo,
          sortProperty: queryArg.sortProperty,
          sortOrder: queryArg.sortOrder,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),
    createManualTransaction: build.mutation<
      CreateManualTransactionApiResponse,
      CreateManualTransactionApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/transactions`,
        method: 'POST',
        body: queryArg.transactionRequest,
      }),
    }),
    getTransactionById: build.query<
      GetTransactionByIdApiResponse,
      GetTransactionByIdApiArg
    >({
      query: (queryArg) => ({ url: `/admin/transactions/${queryArg.id}` }),
    }),
    getTransactionsLearner: build.query<
      GetTransactionsLearnerApiResponse,
      GetTransactionsLearnerApiArg
    >({
      query: (queryArg) => ({
        url: `/learner/transactions`,
        params: {
          transactionType: queryArg.transactionType,
          dateFrom: queryArg.dateFrom,
          dateTo: queryArg.dateTo,
          sortProperty: queryArg.sortProperty,
          sortOrder: queryArg.sortOrder,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),
    getClaims: build.query<GetClaimsApiResponse, GetClaimsApiArg>({
      query: (queryArg) => ({
        url: `/admin/claims`,
        params: {
          claimType: queryArg.claimType,
          claimStatus: queryArg.claimStatus,
          lotNumber: queryArg.lotNumber,
          learnerId: queryArg.learnerId,
          taskId: queryArg.taskId,
          receiverId: queryArg.receiverId,
          dateFrom: queryArg.dateFrom,
          dateTo: queryArg.dateTo,
          sortProperty: queryArg.sortProperty,
          sortOrder: queryArg.sortOrder,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),
    updateClaim: build.mutation<UpdateClaimApiResponse, UpdateClaimApiArg>({
      query: (queryArg) => ({
        url: `/admin/claims`,
        method: 'PUT',
        body: queryArg.adminClaimRequest,
      }),
    }),
    getClaimById: build.query<GetClaimByIdApiResponse, GetClaimByIdApiArg>({
      query: (queryArg) => ({ url: `/admin/claims/${queryArg.id}` }),
    }),
    getNewClaimsAmount: build.query<
      GetNewClaimsAmountApiResponse,
      GetNewClaimsAmountApiArg
    >({
      query: () => ({ url: `/admin/claims/new-amount` }),
    }),
    getClaimsLearner: build.query<
      GetClaimsLearnerApiResponse,
      GetClaimsLearnerApiArg
    >({
      query: (queryArg) => ({
        url: `/learner/claims`,
        params: {
          claimType: queryArg.claimType,
          claimStatus: queryArg.claimStatus,
          dateFrom: queryArg.dateFrom,
          dateTo: queryArg.dateTo,
          sortProperty: queryArg.sortProperty,
          sortOrder: queryArg.sortOrder,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),
    createClaim: build.mutation<CreateClaimApiResponse, CreateClaimApiArg>({
      query: (queryArg) => ({
        url: `/learner/claims`,
        method: 'POST',
        body: queryArg.learnerClaimRequest,
      }),
    }),
    getAttendance: build.query<GetAttendanceApiResponse, GetAttendanceApiArg>({
      query: (queryArg) => ({
        url: `/admin/attendance`,
        params: { lessonId: queryArg.lessonId },
      }),
    }),
    updateAttendance: build.mutation<
      UpdateAttendanceApiResponse,
      UpdateAttendanceApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/attendance`,
        method: 'PUT',
        body: queryArg.attendanceRequest,
      }),
    }),
    uploadFile: build.mutation<UploadFileApiResponse, UploadFileApiArg>({
      query: (queryArg) => ({
        url: `/learner/files`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getFilesByFileId: build.query<
      GetFilesByFileIdApiResponse,
      GetFilesByFileIdApiArg
    >({
      query: (queryArg) => ({ url: `/files/${queryArg.fileId}` }),
    }),
    getSolutions: build.query<GetSolutionsApiResponse, GetSolutionsApiArg>({
      query: (queryArg) => ({
        url: `/admin/solutions`,
        params: {
          taskId: queryArg.taskId,
          learnerId: queryArg.learnerId,
          teamId: queryArg.teamId,
          sortProperty: queryArg.sortProperty,
          sortOrder: queryArg.sortOrder,
          pageable: queryArg.pageable,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),
    getSolutionsLearner: build.query<
      GetSolutionsLearnerApiResponse,
      GetSolutionsLearnerApiArg
    >({
      query: (queryArg) => ({
        url: `/learner/solutions`,
        params: {
          sortProperty: queryArg.sortProperty,
          sortOrder: queryArg.sortOrder,
        },
      }),
    }),
    getSolutionByIdLearner: build.query<
      GetSolutionByIdLearnerApiResponse,
      GetSolutionByIdLearnerApiArg
    >({
      query: (queryArg) => ({ url: `/learner/solutions/${queryArg.taskId}` }),
    }),
    getSolutionsTracker: build.query<
      GetSolutionsTrackerApiResponse,
      GetSolutionsTrackerApiArg
    >({
      query: (queryArg) => ({
        url: `/tracker/solutions/tasks`,
        params: {
          sortProperty: queryArg.sortProperty,
          sortOrder: queryArg.sortOrder,
        },
      }),
    }),
    getSolutionsByTaskIdTracker: build.query<
      GetSolutionsByTaskIdTrackerApiResponse,
      GetSolutionsByTaskIdTrackerApiArg
    >({
      query: (queryArg) => ({
        url: `/tracker/solutions`,
        params: { taskId: queryArg.taskId },
      }),
    }),
    getSolutionInfoByIdTracker: build.query<
      GetSolutionInfoByIdTrackerApiResponse,
      GetSolutionInfoByIdTrackerApiArg
    >({
      query: (queryArg) => ({ url: `/tracker/solutions/${queryArg.id}` }),
    }),
    createEmail: build.mutation<CreateEmailApiResponse, CreateEmailApiArg>({
      query: (queryArg) => ({
        url: `/admin/mail`,
        method: 'POST',
        body: queryArg.emailRequest,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as lmsApi };
export type AuthApiResponse =
  /** status 200 Successful response */ AuthResponse;
export type AuthApiArg = {
  /** Credentials */
  authRequest: AuthRequest;
};
export type GetAccountsApiResponse =
  /** status 200 Successful response */ AccountsPage;
export type GetAccountsApiArg = {
  /** Search name */
  name?: ShortName;
  /** Search email */
  email?: Email;
  /** Search team number */
  teamNumber?: TeamNumber;
  /** Search role */
  role?: Role;
  /** Property of response to sort by */
  sortProperty?: string;
  /** OSorting order */
  sortOrder?: SortOrder;
  /** Page number */
  page?: PageNumber;
  /** The size of the page to be returned */
  pageSize?: PageSize;
};
export type CreateAccountApiResponse =
  /** status 200 Successful response */ undefined;
export type CreateAccountApiArg = {
  /** User to create */
  userRequest: UserRequest;
};
export type UpdateAccountApiResponse =
  /** status 200 Successful response */ undefined;
export type UpdateAccountApiArg = {
  /** User to update */
  userRequest: UserRequest;
};
export type GetAccountByIdApiResponse =
  /** status 200 Successful response */ UserProfile;
export type GetAccountByIdApiArg = {
  /** id */
  id: Id;
};
export type GetUserBalanceByIdApiResponse =
  /** status 200 Successful response */ {
    balance?: number;
    name?: ShortName;
  };
export type GetUserBalanceByIdApiArg = void;
export type DeleteAccountByIdApiResponse = unknown;
export type DeleteAccountByIdApiArg = {
  /** id */
  id: Id;
};
export type GetAccountsForSelectApiResponse =
  /** status 200 Successful response */ UserSelectionList;
export type GetAccountsForSelectApiArg = {
  /** Search role */
  role?: Role;
};
export type GetTeamsApiResponse =
  /** status 200 Successful response */ TeamsPage;
export type GetTeamsApiArg = {
  /** Search team number */
  teamNumber?: TeamNumber;
  /** Property of response to sort by */
  sortProperty?: string;
  /** OSorting order */
  sortOrder?: SortOrder;
  /** Page number */
  page?: PageNumber;
  /** The size of the page to be returned */
  pageSize?: PageSize;
};
export type CreateTeamApiResponse =
  /** status 200 Successful response */ undefined;
export type CreateTeamApiArg = {
  /** Team to create */
  teamRequest: TeamRequest;
};
export type UpdateTeamApiResponse =
  /** status 200 Successful response */ undefined;
export type UpdateTeamApiArg = {
  /** Team to update */
  teamRequest: TeamRequest;
};
export type GetTeamByIdApiResponse =
  /** status 200 Successful response */ TeamProfile;
export type GetTeamByIdApiArg = {
  /** id */
  id: Id;
};
export type DeleteTeamByIdApiResponse = unknown;
export type DeleteTeamByIdApiArg = {
  /** id */
  id: Id;
};
export type GetTeamByIdLearnerApiResponse =
  /** status 200 Successful response */ LearnerTeamProfile;
export type GetTeamByIdLearnerApiArg = {
  /** id */
  id: Id;
};
export type GetTeamsForSelectApiResponse =
  /** status 200 Successful response */ TeamSelectionList;
export type GetTeamsForSelectApiArg = void;
export type GetAssessmentsApiResponse =
  /** status 200 Successful response */ AssessmentsPage;
export type GetAssessmentsApiArg = {
  /** Learner id */
  learnerId?: Id;
  /** Task id */
  taskId?: Id;
  /** Search assessment type */
  assessmentType?: AssessmentType;
  /** The beginning of the desired interval */
  dateFrom?: Date;
  /** The end of the desired interval */
  dateTo?: Date;
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
export type CreateAssessmentApiResponse =
  /** status 200 Successful response */ undefined;
export type CreateAssessmentApiArg = {
  /** Assessment to create */
  assessmentRequest: AssessmentRequest;
};
export type UpdateAssessmentApiResponse = unknown;
export type UpdateAssessmentApiArg = {
  /** Assessment to update */
  assessmentRequest: AssessmentRequest;
};
export type GetAssessmentByIdApiResponse =
  /** status 200 Successful response */ AssessmentInfo;
export type GetAssessmentByIdApiArg = {
  /** id */
  id: Id;
};
export type DeleteAssessmentByIdApiResponse = unknown;
export type DeleteAssessmentByIdApiArg = {
  /** id */
  id: Id;
};
export type GetFinalGradesByLearnerIdApiResponse =
  /** status 200 Successful response */ FinalGradeInfo;
export type GetFinalGradesByLearnerIdApiArg = {
  /** Learner id */
  learnerId: Id;
};
export type GetFinalGradeFormulaApiResponse =
  /** status 200 Содержит массив объектов, состоящих из типа оценивания и его веса. */ FinalGradeFormula;
export type GetFinalGradeFormulaApiArg = void;
export type UpdateFinalGradeFormulaApiResponse = unknown;
export type UpdateFinalGradeFormulaApiArg = {
  /** Final grade formula */
  finalGradeFormula: FinalGradeFormula;
};
export type IncreaseFinalGradeApiResponse = unknown;
export type IncreaseFinalGradeApiArg = {
  /** Bonus value */
  bonusRequest: BonusRequest;
};
export type GetFinalAssessmentsLearnerApiResponse =
  /** status 200 Successful response */ LearnerAssessmentTableItem[];
export type GetFinalAssessmentsLearnerApiArg = {
  /** Search task type */
  taskType?: TaskType;
};
export type CreateAssessmentByTrackerApiResponse =
  /** status 200 Successful response */ undefined;
export type CreateAssessmentByTrackerApiArg = {
  /** Assessment to create */
  assessmentRequest: AssessmentRequest;
};
export type UpdateAssessmentByTrackerApiResponse = unknown;
export type UpdateAssessmentByTrackerApiArg = {
  /** Assessment to update */
  assessmentRequest: AssessmentRequest;
};
export type GetTasksApiResponse =
  /** status 200 Successful response */ TasksPage;
export type GetTasksApiArg = {
  /** Lesson id */
  lessonId?: Id;
  /** Search task type */
  taskType?: TaskType;
  /** Property of response to sort by */
  sortProperty?: string;
  /** OSorting order */
  sortOrder?: SortOrder;
  /** Page number */
  page?: PageNumber;
  /** The size of the page to be returned */
  pageSize?: PageSize;
};
export type CreateTaskApiResponse =
  /** status 200 Successful response */ undefined;
export type CreateTaskApiArg = {
  /** Task to create */
  taskRequest: TaskRequest;
};
export type UpdateTaskApiResponse =
  /** status 200 Successful response */ undefined;
export type UpdateTaskApiArg = {
  /** Task to update */
  taskRequest: TaskRequest;
};
export type GetTaskByIdApiResponse =
  /** status 200 Successful response */ TaskInfo;
export type GetTaskByIdApiArg = {
  /** id */
  id: Id;
};
export type DeleteTaskByIdApiResponse = unknown;
export type DeleteTaskByIdApiArg = {
  /** id */
  id: Id;
};
export type GetTasksForSelectApiResponse =
  /** status 200 Successful response */ TaskSelectionList;
export type GetTasksForSelectApiArg = {
  /** Search task type */
  taskType?: TaskType;
};
export type GetDeadlineByTaskApiResponse =
  /** status 200 Successful response */ DeadlineInfo;
export type GetDeadlineByTaskApiArg = {
  /** id */
  id: Id;
};
export type GetLessonsApiResponse =
  /** status 200 Successful response */ LessonsPage;
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
export type CreateLessonApiResponse =
  /** status 200 Successful response */ undefined;
export type CreateLessonApiArg = {
  /** Lesson to create */
  lessonRequest: LessonRequest;
};
export type UpdateLessonApiResponse =
  /** status 200 Successful response */ undefined;
export type UpdateLessonApiArg = {
  /** Lesson to update */
  lessonRequest: LessonRequest;
};
export type GetLessonByIdApiResponse =
  /** status 200 Successful response */ LessonInfo;
export type GetLessonByIdApiArg = {
  /** id */
  id: Id;
};
export type DeleteLessonByIdApiResponse = unknown;
export type DeleteLessonByIdApiArg = {
  /** id */
  id: Id;
};
export type GetLessonsForSelectApiResponse =
  /** status 200 Successful response */ LessonSelectionList;
export type GetLessonsForSelectApiArg = void;
export type GetLessonsLearnerApiResponse =
  /** status 200 Successful response */ LearnerLessonTableItem[];
export type GetLessonsLearnerApiArg = void;
export type GetLessonByIdLearnerApiResponse =
  /** status 200 Successful response */ LearnerLessonInfo;
export type GetLessonByIdLearnerApiArg = {
  /** id */
  id: Id;
};
export type GetLotsApiResponse = /** status 200 Successful response */ LotsPage;
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
export type CreateLotApiResponse = unknown;
export type CreateLotApiArg = {
  /** Lot to create */
  adminLotRequest: AdminLotRequest;
};
export type UpdateLotApiResponse = unknown;
export type UpdateLotApiArg = {
  /** Lot to update */
  adminLotRequest: AdminLotRequest;
};
export type GetLotByIdApiResponse =
  /** status 200 Successful response */ LotInfo;
export type GetLotByIdApiArg = {
  /** id */
  id: Id;
};
export type DeleteLotByIdApiResponse = unknown;
export type DeleteLotByIdApiArg = {
  /** id */
  id: Id;
};
export type GetLotsLearnerApiResponse =
  /** status 200 Successful response */ LearnerLotsPage;
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
export type GetTransactionsApiResponse =
  /** status 200 Successful response */ TransactionsPage;
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
export type CreateManualTransactionApiResponse = unknown;
export type CreateManualTransactionApiArg = {
  /** Manual transaction to create */
  transactionRequest: TransactionRequest;
};
export type GetTransactionByIdApiResponse =
  /** status 200 Successful response */ TransactionInfo;
export type GetTransactionByIdApiArg = {
  /** id */
  id: Id;
};
export type GetTransactionsLearnerApiResponse =
  /** status 200 Successful response */ LearnerTransactionsPage;
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
export type GetClaimsApiResponse =
  /** status 200 Для всех типов заявок в элементах поля content должны быть заполнены поля id, claimType, status и dateTime.

 Если claimType = BuyingLot, то также должны быть заполнены поля lot, learner(покупатель) и sum.

 Если claimType = FailedDeadline, то также должны быть заполнены поля learner(ученик), task и delay.

 Если claimType = PlacingLot, то также должны быть заполнены поля lot, learner(исполнитель) и sum.

 Если claimType = Transfer, то также должны быть заполнены поля learner(отправитель), receiver(получатель) и sum.

 Не заполненные поля должны содержать null.  */ ClaimsPage;
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
export type UpdateClaimApiResponse = unknown;
export type UpdateClaimApiArg = {
  /** Поле fine заполняется только при типе заявки = DeadlineFailed и поле action = Approve */
  adminClaimRequest: AdminClaimRequest;
};
export type GetClaimByIdApiResponse =
  /** status 200 Для всех типов заявок должны быть заполнены поля id, claimType, status и dateTime.

 Если claimType = BuyingLot, то также должны быть заполнены поля lot и learner(покупатель).

 Если claimType = FailedDeadline, то также должны быть заполнены поля learner(ученик), deadline и fine(если status = Approved).

 Если claimType = PlacingLot, то также должно быть заполнено поле lot.

 claimType = Transfer, не запрашивается.

 Не заполненные поля должны содержать null. */ ClaimInfo;
export type GetClaimByIdApiArg = {
  /** id */
  id: Id;
};
export type GetNewClaimsAmountApiResponse =
  /** status 200 Ответ содержит массив объектов, каждый из которых соответствует одному из типов заявок и содержит количество заявок этого типа в статусе = Waiting. */ NewClaimsAmount[];
export type GetNewClaimsAmountApiArg = void;
export type GetClaimsLearnerApiResponse =
  /** status 200 Successful response */ LearnerClaimsPage;
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
export type CreateClaimApiResponse = unknown;
export type CreateClaimApiArg = {
  /** Для всех типов заявок должно быть заполнено поле claimType.
    
     Если claimType = BuyingLot, то также должно быть заполнены поле buyingLotId.
    
     Если claimType = PlacingLot, то также должно быть заполнены поле lot.
    
     Если claimType = Transfer, то также должны быть заполнены поля receiverId(получатель) и sum.
    
     Не заполненные поля должны содержать null. */
  learnerClaimRequest: LearnerClaimRequest;
};
export type GetAttendanceApiResponse =
  /** status 200 Ответ содержит информацию об уроке в поле lesson и список learners вообще всех зарегистрированных учеников, с полем didCome = true и возможно accruedСurrency у тех, кто пришёл. */ AttendanceInfo;
export type GetAttendanceApiArg = {
  /** Lesson id */
  lessonId: Id;
};
export type UpdateAttendanceApiResponse = unknown;
export type UpdateAttendanceApiArg = {
  /** Attendance to update */
  attendanceRequest: AttendanceRequest;
};
export type UploadFileApiResponse = unknown;
export type UploadFileApiArg = {
  body: {
    file?: Blob;
    taskId?: Id;
  };
};
export type GetFilesByFileIdApiResponse = unknown;
export type GetFilesByFileIdApiArg = {
  /** The id of the ZIP file to download */
  fileId: Id;
};
export type GetSolutionsApiResponse =
  /** status 200 Если task коммандный, то заполнено поле team, а если task индивидуальный,  то заполнено поле learner. */ SolutionsPage;
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
export type GetSolutionsLearnerApiResponse =
  /** status 200 Successful response */ LearnerSolutionsTable;
export type GetSolutionsLearnerApiArg = {
  /** Property of response to sort by */
  sortProperty?: string;
  /** OSorting order */
  sortOrder?: SortOrder;
};
export type GetSolutionByIdLearnerApiResponse =
  /** status 200 Successful response */ LearnerSolutionInfo;
export type GetSolutionByIdLearnerApiArg = {
  /** Task id */
  taskId: Id;
};
export type GetSolutionsTrackerApiResponse =
  /** status 200 Successful response */ TrackerTasksSolutionsTable;
export type GetSolutionsTrackerApiArg = {
  /** Property of response to sort by */
  sortProperty?: string;
  /** OSorting order */
  sortOrder?: SortOrder;
};
export type GetSolutionsByTaskIdTrackerApiResponse =
  /** status 200 Successful response */ TrackerSolutionsTable;
export type GetSolutionsByTaskIdTrackerApiArg = {
  /** Task id */
  taskId: Id;
};
export type GetSolutionInfoByIdTrackerApiResponse =
  /** status 200 Successful response */ TrackerSolutionInfo;
export type GetSolutionInfoByIdTrackerApiArg = {
  /** id */
  id: Id;
};
export type CreateEmailApiResponse = unknown;
export type CreateEmailApiArg = {
  /** E-mail to create */
  emailRequest: EmailRequest;
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
export type UserRequest = {
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
  pagination?: Pagination;
  content?: AdminClaimTableItem[];
};
export type ClaimAction = 'Approve' | 'Reject';
export type AdminClaimRequest = {
  id?: Id;
  action?: ClaimAction;
  fine?: Sum;
};
export type ClaimInfo = {
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
  claimType?: ClaimType;
  lot?: LearnerLotRequest;
  buyingLotId?: Id;
  receiverId?: Id;
  sum?: Sum;
};
export type AttendanceInfo = {
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
export const {
  useAuthMutation,
  useGetAccountsQuery,
  useCreateAccountMutation,
  useUpdateAccountMutation,
  useGetAccountByIdQuery,
  useGetUserBalanceByIdQuery,
  useDeleteAccountByIdMutation,
  useGetAccountsForSelectQuery,
  useGetTeamsQuery,
  useCreateTeamMutation,
  useUpdateTeamMutation,
  useGetTeamByIdQuery,
  useDeleteTeamByIdMutation,
  useGetTeamByIdLearnerQuery,
  useGetTeamsForSelectQuery,
  useGetAssessmentsQuery,
  useCreateAssessmentMutation,
  useUpdateAssessmentMutation,
  useGetAssessmentByIdQuery,
  useDeleteAssessmentByIdMutation,
  useGetFinalGradesByLearnerIdQuery,
  useGetFinalGradeFormulaQuery,
  useUpdateFinalGradeFormulaMutation,
  useIncreaseFinalGradeMutation,
  useGetFinalAssessmentsLearnerQuery,
  useCreateAssessmentByTrackerMutation,
  useUpdateAssessmentByTrackerMutation,
  useGetTasksQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useGetTaskByIdQuery,
  useDeleteTaskByIdMutation,
  useGetTasksForSelectQuery,
  useGetDeadlineByTaskQuery,
  useGetLessonsQuery,
  useCreateLessonMutation,
  useUpdateLessonMutation,
  useGetLessonByIdQuery,
  useDeleteLessonByIdMutation,
  useGetLessonsForSelectQuery,
  useGetLessonsLearnerQuery,
  useGetLessonByIdLearnerQuery,
  useGetLotsQuery,
  useCreateLotMutation,
  useUpdateLotMutation,
  useGetLotByIdQuery,
  useDeleteLotByIdMutation,
  useGetLotsLearnerQuery,
  useGetTransactionsQuery,
  useCreateManualTransactionMutation,
  useGetTransactionByIdQuery,
  useGetTransactionsLearnerQuery,
  useGetClaimsQuery,
  useUpdateClaimMutation,
  useGetClaimByIdQuery,
  useGetNewClaimsAmountQuery,
  useGetClaimsLearnerQuery,
  useCreateClaimMutation,
  useGetAttendanceQuery,
  useUpdateAttendanceMutation,
  useUploadFileMutation,
  useGetFilesByFileIdQuery,
  useGetSolutionsQuery,
  useGetSolutionsLearnerQuery,
  useGetSolutionByIdLearnerQuery,
  useGetSolutionsTrackerQuery,
  useGetSolutionsByTaskIdTrackerQuery,
  useGetSolutionInfoByIdTrackerQuery,
  useCreateEmailMutation,
} = injectedRtkApi;
