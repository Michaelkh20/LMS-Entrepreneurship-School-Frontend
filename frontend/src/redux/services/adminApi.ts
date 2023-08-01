import { FinalGradeFormula, Id, Role, TaskType } from '@/types/common';
import {
  AccountRequest,
  AdminClaimRequest,
  AdminLotRequest,
  AssessmentRequest,
  AttendanceRequest,
  BonusRequest,
  EmailRequest,
  GetAccountsApiArg,
  GetAssessmentsApiArg,
  GetClaimsApiArg,
  GetLessonsApiArg,
  GetLotsApiArg,
  GetSolutionsApiArg,
  GetTasksApiArg,
  GetTeamsApiArg,
  GetTransactionsApiArg,
  LessonRequest,
  TaskRequest,
  TeamRequest,
  TransactionRequest,
} from '@/types/requests';
import {
  AccountsPage,
  AssessmentInfo,
  AssessmentsPage,
  AttendanceInfo,
  ClaimInfo,
  ClaimsPage,
  DeadlineInfo,
  FinalGradeInfo,
  LessonInfo,
  LessonSelectionList,
  LessonsPage,
  LotInfo,
  LotsPage,
  NewClaimsAmount,
  SolutionsPage,
  TaskInfo,
  TaskSelectionList,
  TasksPage,
  TeamProfile,
  TeamSelectionList,
  TeamsPage,
  TransactionInfo,
  TransactionsPage,
  UserProfile,
  UserSelectionList,
} from '@/types/responses';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export const adminApi = createApi({
  reducerPath: 'adminAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BACKEND_URL,
  }),
  endpoints: (build) => ({
    getAccounts: build.query<AccountsPage, GetAccountsApiArg>({
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

    createAccount: build.mutation<undefined, AccountRequest>({
      query: (accountRequest) => ({
        url: `/admin/accounts`,
        method: 'POST',
        body: accountRequest,
      }),
    }),

    updateAccount: build.mutation<undefined, AccountRequest>({
      query: (accountRequest) => ({
        url: `/admin/accounts`,
        method: 'PUT',
        body: accountRequest,
      }),
    }),

    getAccountById: build.query<UserProfile, Id>({
      query: (id) => ({ url: `/accounts/${id}` }),
    }),

    deleteAccountById: build.mutation<undefined, Id>({
      query: (id) => ({
        url: `/admin/accounts/${id}`,
        method: 'DELETE',
      }),
    }),

    getAccountsForSelect: build.query<UserSelectionList, Role | undefined>({
      query: (role) => ({
        url: `/admin/accounts/select`,
        params: { role: role },
      }),
    }),

    getTeams: build.query<TeamsPage, GetTeamsApiArg>({
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

    createTeam: build.mutation<undefined, TeamRequest>({
      query: (teamRequest) => ({
        url: `/admin/teams`,
        method: 'POST',
        body: teamRequest,
      }),
    }),

    updateTeam: build.mutation<undefined, TeamRequest>({
      query: (teamRequest) => ({
        url: `/admin/teams`,
        method: 'PUT',
        body: teamRequest,
      }),
    }),

    getTeamById: build.query<TeamProfile, Id>({
      query: (id) => ({ url: `/admin/teams/${id}` }),
    }),

    deleteTeamById: build.mutation<undefined, Id>({
      query: (id) => ({
        url: `/admin/teams/${id}`,
        method: 'DELETE',
      }),
    }),

    getTeamsForSelect: build.query<TeamSelectionList, void>({
      query: () => ({ url: `/admin/teams/select` }),
    }),

    getAssessments: build.query<AssessmentsPage, GetAssessmentsApiArg>({
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

    createAssessment: build.mutation<undefined, AssessmentRequest>({
      query: (assessmentRequest) => ({
        url: `/admin/assessments`,
        method: 'POST',
        body: assessmentRequest,
      }),
    }),

    updateAssessment: build.mutation<undefined, AssessmentRequest>({
      query: (assessmentRequest) => ({
        url: `/admin/assessments`,
        method: 'PUT',
        body: assessmentRequest,
      }),
    }),

    getAssessmentById: build.query<AssessmentInfo, Id>({
      query: (id) => ({ url: `/admin/assessments/${id}` }),
    }),

    deleteAssessmentById: build.mutation<undefined, Id>({
      query: (id) => ({
        url: `/admin/assessments/${id}`,
        method: 'DELETE',
      }),
    }),

    getFinalGradesByLearnerId: build.query<FinalGradeInfo, Id>({
      query: (learnerId) => ({
        url: `/assessments/final-grades`,
        params: { learnerId: learnerId },
      }),
    }),

    getFinalGradeFormula: build.query<FinalGradeFormula, void>({
      query: () => ({ url: `/assessments/formula` }),
    }),

    updateFinalGradeFormula: build.mutation<undefined, FinalGradeFormula>({
      query: (finalGradeFormula) => ({
        url: `/admin/assessments/formula`,
        method: 'PUT',
        body: finalGradeFormula,
      }),
    }),

    increaseFinalGrade: build.mutation<undefined, BonusRequest>({
      query: (bonusRequest) => ({
        url: `/admin/assessments/increase-final-grade`,
        method: 'POST',
        body: bonusRequest,
      }),
    }),

    getTasks: build.query<TasksPage, GetTasksApiArg>({
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

    createTask: build.mutation<undefined, TaskRequest>({
      query: (taskRequest) => ({
        url: `/admin/tasks`,
        method: 'POST',
        body: taskRequest,
      }),
    }),

    updateTask: build.mutation<undefined, TaskRequest>({
      query: (taskRequest) => ({
        url: `/admin/tasks`,
        method: 'PUT',
        body: taskRequest,
      }),
    }),

    getTaskById: build.query<TaskInfo, Id>({
      query: (id) => ({ url: `/admin/tasks/${id}` }),
    }),

    deleteTaskById: build.mutation<undefined, Id>({
      query: (id) => ({
        url: `/admin/tasks/${id}`,
        method: 'DELETE',
      }),
    }),

    getTasksForSelect: build.query<TaskSelectionList, TaskType>({
      query: (taskType) => ({
        url: `/admin/tasks/select`,
        params: { taskType: taskType },
      }),
    }),

    getDeadlineByTask: build.query<DeadlineInfo, Id>({
      query: (id) => ({ url: `/admin/tasks/${id}/deadline` }),
    }),

    getLessons: build.query<LessonsPage, GetLessonsApiArg>({
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

    createLesson: build.mutation<undefined, LessonRequest>({
      query: (lessonRequest) => ({
        url: `/admin/lessons`,
        method: 'POST',
        body: lessonRequest,
      }),
    }),

    updateLesson: build.mutation<undefined, LessonRequest>({
      query: (lessonRequest) => ({
        url: `/admin/lessons`,
        method: 'PUT',
        body: lessonRequest,
      }),
    }),

    getLessonById: build.query<LessonInfo, Id>({
      query: (id) => ({ url: `/admin/lessons/${id}` }),
    }),

    deleteLessonById: build.mutation<undefined, Id>({
      query: (id) => ({
        url: `/admin/lessons/${id}`,
        method: 'DELETE',
      }),
    }),

    getLessonsForSelect: build.query<LessonSelectionList, void>({
      query: () => ({ url: `/admin/lessons/select` }),
    }),

    getLots: build.query<LotsPage, GetLotsApiArg>({
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

    createLot: build.mutation<undefined, AdminLotRequest>({
      query: (adminLotRequest) => ({
        url: `/admin/lots`,
        method: 'POST',
        body: adminLotRequest,
      }),
    }),

    updateLot: build.mutation<undefined, AdminLotRequest>({
      query: (adminLotRequest) => ({
        url: `/admin/lots`,
        method: 'PUT',
        body: adminLotRequest,
      }),
    }),

    getLotById: build.query<LotInfo, Id>({
      query: (id) => ({ url: `/admin/lots/${id}` }),
    }),

    deleteLotById: build.mutation<undefined, Id>({
      query: (id) => ({
        url: `/admin/lots/${id}`,
        method: 'DELETE',
      }),
    }),

    getTransactions: build.query<TransactionsPage, GetTransactionsApiArg>({
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

    createManualTransaction: build.mutation<undefined, TransactionRequest>({
      query: (transactionRequest) => ({
        url: `/admin/transactions`,
        method: 'POST',
        body: transactionRequest,
      }),
    }),

    getTransactionById: build.query<TransactionInfo, Id>({
      query: (id) => ({ url: `/admin/transactions/${id}` }),
    }),

    getClaims: build.query<ClaimsPage, GetClaimsApiArg>({
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

    updateClaim: build.mutation<undefined, AdminClaimRequest>({
      query: (adminClaimRequest) => ({
        url: `/admin/claims`,
        method: 'PUT',
        body: adminClaimRequest,
      }),
    }),

    getClaimById: build.query<ClaimInfo, Id>({
      query: (id) => ({ url: `/admin/claims/${id}` }),
    }),

    getNewClaimsAmount: build.query<NewClaimsAmount[], void>({
      query: () => ({ url: `/admin/claims/new-amount` }),
    }),

    getAttendance: build.query<AttendanceInfo, Id>({
      query: (lessonId) => ({
        url: `/admin/attendance`,
        params: { lessonId: lessonId },
      }),
    }),

    updateAttendance: build.mutation<undefined, AttendanceRequest>({
      query: (attendanceRequest) => ({
        url: `/admin/attendance`,
        method: 'PUT',
        body: attendanceRequest,
      }),
    }),

    getSolutions: build.query<SolutionsPage, GetSolutionsApiArg>({
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

    createEmail: build.mutation<undefined, EmailRequest>({
      query: (emailRequest) => ({
        url: `/admin/mail`,
        method: 'POST',
        body: emailRequest,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAccountByIdQuery,
  useGetFinalGradesByLearnerIdQuery,
  useGetAccountsQuery,
  useCreateAccountMutation,
  useUpdateAccountMutation,
  useDeleteAccountByIdMutation,
  useGetAccountsForSelectQuery,
  useGetTeamsQuery,
  useCreateTeamMutation,
  useUpdateTeamMutation,
  useGetTeamByIdQuery,
  useDeleteTeamByIdMutation,
  useGetTeamsForSelectQuery,
  useGetAssessmentsQuery,
  useCreateAssessmentMutation,
  useUpdateAssessmentMutation,
  useGetAssessmentByIdQuery,
  useDeleteAssessmentByIdMutation,
  useUpdateFinalGradeFormulaMutation,
  useIncreaseFinalGradeMutation,
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
  useGetLotsQuery,
  useCreateLotMutation,
  useUpdateLotMutation,
  useGetLotByIdQuery,
  useDeleteLotByIdMutation,
  useGetTransactionsQuery,
  useCreateManualTransactionMutation,
  useGetTransactionByIdQuery,
  useGetClaimsQuery,
  useUpdateClaimMutation,
  useGetClaimByIdQuery,
  useGetNewClaimsAmountQuery,
  useGetAttendanceQuery,
  useUpdateAttendanceMutation,
  useGetSolutionsQuery,
  useCreateEmailMutation,
  useGetFinalGradeFormulaQuery,
} = adminApi;
