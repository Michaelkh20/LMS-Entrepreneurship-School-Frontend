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
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { errorHandler, providesList } from './helpers/tagHelpers';

export const adminApi = createApi({
  reducerPath: 'adminAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  tagTypes: [
    'Account',
    'Team',
    'Assessment',
    'FinalGrades',
    'FinalGradeFormula',
    'Task',
    'Lesson',
    'Lot',
    'Transaction',
    'Claim',
    'Attendance',
  ],
  keepUnusedDataFor: 180,
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
      providesTags: (result) => providesList(result?.content, 'Account'),
    }),

    createAccount: build.mutation<undefined, AccountRequest>({
      query: (accountRequest) => ({
        url: `/admin/accounts`,
        method: 'POST',
        body: accountRequest,
      }),
      invalidatesTags: (result, error, accountRequest) =>
        errorHandler(error, 'Account', 'LIST'),
    }),

    updateAccount: build.mutation<undefined, AccountRequest>({
      query: (accountRequest) => ({
        url: `/admin/accounts`,
        method: 'PUT',
        body: accountRequest,
      }),
      invalidatesTags: (result, error, accountRequest) =>
        errorHandler(error, 'Account', [accountRequest.id!, 'LIST']),
    }),

    getAccountById: build.query<UserProfile, Id>({
      query: (id) => ({ url: `/accounts/${id}` }),
      providesTags: (result, error, id) => errorHandler(error, 'Account', id),
    }),

    deleteAccountById: build.mutation<undefined, Id>({
      query: (id) => ({
        url: `/admin/accounts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) =>
        errorHandler(error, 'Account', [id, 'LIST']),
    }),

    getAccountsForSelect: build.query<UserSelectionList, Role | void>({
      query: (role) => ({
        url: `/admin/accounts/select`,
        params: role ? { role: role } : undefined,
      }),
      providesTags: (result) => providesList(result, 'Account'),
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
      providesTags: (result) => providesList(result?.content, 'Team'),
    }),

    createTeam: build.mutation<undefined, TeamRequest>({
      query: (teamRequest) => ({
        url: `/admin/teams`,
        method: 'POST',
        body: teamRequest,
      }),
      invalidatesTags: (result, error, teamRequest) =>
        errorHandler(error, 'Team', 'LIST'),
    }),

    updateTeam: build.mutation<undefined, TeamRequest>({
      query: (teamRequest) => ({
        url: `/admin/teams`,
        method: 'PUT',
        body: teamRequest,
      }),
      invalidatesTags: (result, error, teamRequest) =>
        errorHandler(error, 'Team', [teamRequest.id!, 'LIST']),
    }),

    getTeamById: build.query<TeamProfile, Id>({
      query: (id) => ({ url: `/admin/teams/${id}` }),
      providesTags: (result, error, id) => errorHandler(error, 'Team', id),
    }),

    deleteTeamById: build.mutation<undefined, Id>({
      query: (id) => ({
        url: `/admin/teams/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) =>
        errorHandler(error, 'Team', [id, 'LIST']),
    }),

    getTeamsForSelect: build.query<TeamSelectionList, void>({
      query: () => ({ url: `/admin/teams/select` }),
      providesTags: (result) => providesList(result, 'Team'),
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
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
      providesTags: (result) => providesList(result?.content, 'Assessment'),
    }),

    createAssessment: build.mutation<undefined, AssessmentRequest>({
      query: (assessmentRequest) => ({
        url: `/admin/assessments`,
        method: 'POST',
        body: assessmentRequest,
      }),
      invalidatesTags: (result, error, assessmentRequest) =>
        errorHandler(error, 'Assessment', 'LIST'),
    }),

    updateAssessment: build.mutation<undefined, AssessmentRequest>({
      query: (assessmentRequest) => ({
        url: `/admin/assessments`,
        method: 'PUT',
        body: assessmentRequest,
      }),
      invalidatesTags: (result, error, assessmentRequest) =>
        errorHandler(error, 'Assessment', [assessmentRequest.id!, 'LIST']),
    }),

    getAssessmentById: build.query<AssessmentInfo, Id>({
      query: (id) => ({ url: `/admin/assessments/${id}` }),
      providesTags: (result, error, id) =>
        errorHandler(error, 'Assessment', id),
    }),

    deleteAssessmentById: build.mutation<undefined, Id>({
      query: (id) => ({
        url: `/admin/assessments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) =>
        errorHandler(error, 'Assessment', [id, 'LIST']),
    }),

    getFinalGradesByLearnerId: build.query<FinalGradeInfo, Id>({
      query: (learnerId) => ({
        url: `/assessments/final-grades`,
        params: { learnerId: learnerId },
      }),
      providesTags: (result, error, learnerId) =>
        errorHandler(error, 'FinalGrades', learnerId),
    }),

    getFinalGradeFormula: build.query<FinalGradeFormula, void>({
      query: () => ({ url: `/assessments/formula` }),
      providesTags: ['FinalGradeFormula'],
    }),

    updateFinalGradeFormula: build.mutation<undefined, FinalGradeFormula>({
      query: (finalGradeFormula) => ({
        url: `/admin/assessments/formula`,
        method: 'PUT',
        body: finalGradeFormula,
      }),
      invalidatesTags: (result, error) => (!error ? ['FinalGradeFormula'] : []),
    }),

    increaseFinalGrade: build.mutation<undefined, BonusRequest>({
      query: (bonusRequest) => ({
        url: `/admin/assessments/increase-final-grade`,
        method: 'POST',
        body: bonusRequest,
      }),
      invalidatesTags: (result, error, bonusRequest) =>
        errorHandler(error, 'FinalGrades', bonusRequest.learnerId),
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
      providesTags: (result) => providesList(result?.content, 'Task'),
    }),

    createTask: build.mutation<undefined, TaskRequest>({
      query: (taskRequest) => ({
        url: `/admin/tasks`,
        method: 'POST',
        body: taskRequest,
      }),
      invalidatesTags: (result, error, taskRequest) =>
        errorHandler(error, 'Task', 'LIST'),
    }),

    updateTask: build.mutation<undefined, TaskRequest>({
      query: (taskRequest) => ({
        url: `/admin/tasks`,
        method: 'PUT',
        body: taskRequest,
      }),
      invalidatesTags: (result, error, taskRequest) =>
        errorHandler(error, 'Task', [taskRequest.id!, 'LIST']),
    }),

    getTaskById: build.query<TaskInfo, Id>({
      query: (id) => ({ url: `/admin/tasks/${id}` }),
      providesTags: (result, error, id) => errorHandler(error, 'Task', id),
    }),

    deleteTaskById: build.mutation<undefined, Id>({
      query: (id) => ({
        url: `/admin/tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) =>
        errorHandler(error, 'Task', [id, 'LIST']),
    }),

    getTasksForSelect: build.query<TaskSelectionList, TaskType | void>({
      query: (taskType) => ({
        url: `/admin/tasks/select`,
        params: taskType ? { taskType: taskType } : undefined,
      }),
      providesTags: (result) => providesList(result, 'Task'),
    }),

    getDeadlineByTask: build.query<DeadlineInfo, Id>({
      query: (taskId) => ({ url: `/admin/tasks/${taskId}/deadline` }),
      providesTags: (result, error, taskId) =>
        errorHandler(error, 'Task', taskId),
    }),

    getLessons: build.query<LessonsPage, GetLessonsApiArg>({
      query: (queryArg) => ({
        url: `/admin/lessons`,
        params: {
          lessonNumber: queryArg.lessonNumber,
          lessonTitle: queryArg.lessonTitle,
          sortProperty: queryArg.sortProperty,
          sortOrder: queryArg.sortOrder,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
      providesTags: (result) => providesList(result?.content, 'Lesson'),
    }),

    createLesson: build.mutation<undefined, LessonRequest>({
      query: (lessonRequest) => ({
        url: `/admin/lessons`,
        method: 'POST',
        body: lessonRequest,
      }),
      invalidatesTags: (result, error, lessonRequest) =>
        errorHandler(error, 'Lesson', 'LIST'),
    }),

    updateLesson: build.mutation<undefined, LessonRequest>({
      query: (lessonRequest) => ({
        url: `/admin/lessons`,
        method: 'PUT',
        body: lessonRequest,
      }),
      invalidatesTags: (result, error, lessonRequest) =>
        errorHandler(error, 'Lesson', [lessonRequest.id!, 'LIST']),
    }),

    getLessonById: build.query<LessonInfo, Id>({
      query: (id) => ({ url: `/admin/lessons/${id}` }),
      providesTags: (result, error, id) => errorHandler(error, 'Lesson', id),
    }),

    deleteLessonById: build.mutation<undefined, Id>({
      query: (id) => ({
        url: `/admin/lessons/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) =>
        errorHandler(error, 'Lesson', [id, 'LIST']),
    }),

    getLessonsForSelect: build.query<LessonSelectionList, void>({
      query: () => ({ url: `/admin/lessons/select` }),
      providesTags: (result) => providesList(result, 'Task'),
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
      providesTags: (result) => providesList(result?.content, 'Lot'),
    }),

    createLot: build.mutation<undefined, AdminLotRequest>({
      query: (adminLotRequest) => ({
        url: `/admin/lots`,
        method: 'POST',
        body: adminLotRequest,
      }),
      invalidatesTags: (result, error, adminLotRequest) =>
        errorHandler(error, 'Lot', 'LIST'),
    }),

    updateLot: build.mutation<undefined, AdminLotRequest>({
      query: (adminLotRequest) => ({
        url: `/admin/lots`,
        method: 'PUT',
        body: adminLotRequest,
      }),
      invalidatesTags: (result, error, adminLotRequest) =>
        errorHandler(error, 'Lot', [adminLotRequest.id!, 'LIST']),
    }),

    getLotById: build.query<LotInfo, Id>({
      query: (id) => ({ url: `/admin/lots/${id}` }),
      providesTags: (result, error, id) => errorHandler(error, 'Lot', id),
    }),

    deleteLotById: build.mutation<undefined, Id>({
      query: (id) => ({
        url: `/admin/lots/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) =>
        errorHandler(error, 'Lot', [id, 'LIST']),
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
      providesTags: (result) => providesList(result?.content, 'Transaction'),
    }),

    createManualTransaction: build.mutation<undefined, TransactionRequest>({
      query: (transactionRequest) => ({
        url: `/admin/transactions`,
        method: 'POST',
        body: transactionRequest,
      }),
      invalidatesTags: (result, error, transactionRequest) =>
        errorHandler(error, 'Transaction', 'LIST'),
    }),

    getTransactionById: build.query<TransactionInfo, Id>({
      query: (id) => ({ url: `/admin/transactions/${id}` }),
      providesTags: (result, error, id) =>
        errorHandler(error, 'Transaction', id),
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
      providesTags: (result) => providesList(result?.content, 'Claim'),
    }),

    updateClaim: build.mutation<undefined, AdminClaimRequest>({
      query: (adminClaimRequest) => ({
        url: `/admin/claims`,
        method: 'PUT',
        body: adminClaimRequest,
      }),
      invalidatesTags: (result, error, adminClaimRequest) =>
        errorHandler(error, 'Claim', [adminClaimRequest.id!, 'LIST']),
    }),

    getClaimById: build.query<ClaimInfo, Id>({
      query: (id) => ({ url: `/admin/claims/${id}` }),
      providesTags: (result, error, id) => errorHandler(error, 'Claim', id),
    }),

    getNewClaimsAmount: build.query<NewClaimsAmount[], void>({
      query: () => ({ url: `/admin/claims/new-amount` }),
      providesTags: (result, error) => errorHandler(error, 'Claim', 'LIST'),
    }),

    getAttendance: build.query<AttendanceInfo, Id>({
      query: (lessonId) => ({
        url: `/admin/attendance`,
        params: { lessonId: lessonId },
      }),
      providesTags: (result, error, lessonId) =>
        errorHandler(error, 'Attendance', lessonId),
    }),

    updateAttendance: build.mutation<undefined, AttendanceRequest>({
      query: (attendanceRequest) => ({
        url: `/admin/attendance`,
        method: 'PUT',
        body: attendanceRequest,
      }),
      invalidatesTags: (result, error, attendanceRequest) =>
        errorHandler(error, 'Attendance', attendanceRequest.lessonId),
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
