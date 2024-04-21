import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type {
  ApproveRejectClaimRequest,
  AssessmentCreateUpdateRequest,
  AssessmentsPage,
  AssignmentSnippetList,
  AttendanceInfo,
  AuthApiArg,
  AuthResponse,
  BuyLotClaim,
  BuyLotClaimsPage,
  BuyLotRequest,
  EmailRequest,
  FailedDeadlineClaim,
  FailedDeadlineClaimsPage,
  FinalGradeFormula,
  FinalGrades,
  GetAccountsApiArg,
  GetAccountsForSelectApiArg,
  GetAssessmentsApiArg,
  GetAssignmentSnippetsApiArg,
  GetBuyLotClaimsApiArg,
  GetFailedDeadlineClaimsApiArg,
  GetHwListApiArg,
  GetLessonsApiArg,
  GetListLotClaimsApiArg,
  GetLotsApiArg,
  GetLotsForMarketPlaceApiArg,
  GetOtherAssignmentListApiArg,
  GetSolutionByAssignmentIdAndLearnerIdApiArg,
  GetSolutionsApiArg,
  GetTeamsApiArg,
  GetTestListApiArg,
  GetTransactionsApiArg,
  GetTransferClaimsApiArg,
  GetUserBalanceByIdApiResponse,
  Hw,
  HwCreateUpdateRequest,
  HwPage,
  Lesson,
  LessonCreateUpdateRequest,
  LessonSnippetList,
  LessonsPage,
  ListLotClaim,
  ListLotClaimsPage,
  ListLotRequest,
  Lot,
  LotCreateUpdateRequest,
  LotsPage,
  ManualAccrualRequest,
  OtherAssignment,
  OtherAssignmentCreateUpdateRequest,
  OtherAssignmentsPage,
  SetBonusRequest,
  Solution,
  SolutionCreateUpdateRequest,
  SolutionsPage,
  Team,
  TeamCreateUpdateRequest,
  TeamPublicProfile,
  TeamSnippetList,
  TeamsPage,
  Test,
  TestCreateUpdateRequest,
  TestsPage,
  Transaction,
  TransactionsPage,
  TransferClaimsPage,
  TransferRequest,
  UpdateAccountApiArg,
  UpdateAssessmentApiArg,
  UpdateAttendanceApiArg,
  UpdateHwApiArg,
  UpdateLessonApiArg,
  UpdateLotApiArg,
  UpdateOtherAssignmentApiArg,
  UpdateTeamApiArg,
  UpdateTestApiArg,
  User,
  UserCreateUpdateRequest,
  UserSnippetList,
  UsersPage,
} from '@/types/api';

export const api = createApi({
  reducerPath: 'API',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/v1',
  }),
  endpoints: (build) => ({
    auth: build.query<AuthResponse, AuthApiArg>({
      query: (queryArg) => ({
        url: `/auth/login`,
        params: { login: queryArg.login, password: queryArg.password },
      }),
    }),

    createAccount: build.mutation<undefined, UserCreateUpdateRequest>({
      query: (requestBody) => ({
        url: `/users`,
        method: 'POST',
        body: requestBody,
      }),
    }),

    getAccounts: build.query<UsersPage, GetAccountsApiArg>({
      query: (queryArg) => ({
        url: `/users/list`,
        params: {
          name: queryArg.name,
          email: queryArg.email,
          teamNumber: queryArg.teamNumber,
          role: queryArg.role,
          sort: queryArg.sort,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),

    getAccountById: build.query<User, string>({
      query: (id) => ({ url: `/users/${id}` }),
    }),

    updateAccount: build.mutation<undefined, UpdateAccountApiArg>({
      query: (queryArg) => ({
        url: `/users/${queryArg.id}`,
        method: 'PATCH',
        body: queryArg.updateRequestBody,
      }),
    }),

    deleteAccountById: build.mutation<undefined, string>({
      query: (id) => ({ url: `/users/${id}`, method: 'DELETE' }),
    }),

    getUserBalanceById: build.query<GetUserBalanceByIdApiResponse, string>({
      query: (id) => ({ url: `/users/${id}/balance` }),
    }),

    getAccountsForSelect: build.query<
      UserSnippetList,
      GetAccountsForSelectApiArg
    >({
      query: (queryArg) => ({
        url: `/users/snippets`,
        params: { role: queryArg.role },
      }),
    }),

    getTeams: build.query<TeamsPage, GetTeamsApiArg>({
      query: (queryArg) => ({
        url: `/teams/list`,
        params: {
          teamNumber: queryArg.teamNumber,
          teamProjectTheme: queryArg.teamProjectTheme,
          sort: queryArg.sort,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),

    createTeam: build.mutation<undefined, TeamCreateUpdateRequest>({
      query: (requestBody) => ({
        url: `/teams`,
        method: 'POST',
        body: requestBody,
      }),
    }),

    updateTeam: build.mutation<undefined, UpdateTeamApiArg>({
      query: (queryArg) => ({
        url: `/teams/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.updateRequestBody,
      }),
    }),

    getTeamById: build.query<Team, string>({
      query: (id) => ({ url: `/teams/${id}` }),
    }),

    deleteTeamById: build.mutation<undefined, string>({
      query: (id) => ({ url: `/teams/${id}`, method: 'DELETE' }),
    }),

    getTeamPublicProfileById: build.query<TeamPublicProfile, string>({
      query: (id) => ({ url: `/teams/public/${id}` }),
    }),

    getTeamsForSelect: build.query<TeamSnippetList, void>({
      query: () => ({ url: `/teams/snippets` }),
    }),

    getAssessments: build.query<AssessmentsPage, GetAssessmentsApiArg>({
      query: (queryArg) => ({
        url: `/assessments/list`,
        params: {
          learnerId: queryArg.learnerId,
          teamId: queryArg.teamId,
          assignmentId: queryArg.assignmentId,
          assessmentType: queryArg.assessmentType,
          sort: queryArg.sort,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),

    createAssessment: build.mutation<undefined, AssessmentCreateUpdateRequest>({
      query: (requestBody) => ({
        url: `/assessments`,
        method: 'POST',
        body: requestBody,
      }),
    }),

    updateAssessment: build.mutation<undefined, UpdateAssessmentApiArg>({
      query: (queryArg) => ({
        url: `/assessments/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.updateRequestBody,
      }),
    }),

    deleteAssessmentById: build.mutation<undefined, string>({
      query: (id) => ({
        url: `/assessments/${id}`,
        method: 'DELETE',
      }),
    }),

    getFinalGradesByLearnerId: build.query<FinalGrades, string>({
      query: (id) => ({ url: `/users/${id}/final-grades` }),
    }),

    getFinalGradeFormula: build.query<FinalGradeFormula, void>({
      query: () => ({ url: `/assessments/formula` }),
    }),

    updateFinalGradeFormula: build.mutation<undefined, FinalGradeFormula>({
      query: (requestBody) => ({
        url: `/assessments/formula`,
        method: 'PUT',
        body: requestBody,
      }),
    }),

    increaseFinalGrade: build.mutation<undefined, SetBonusRequest>({
      query: (requestBody) => ({
        url: `/assessments/increase-final-grade`,
        method: 'POST',
        body: requestBody,
      }),
    }),

    getHwList: build.query<HwPage, GetHwListApiArg>({
      query: (queryArg) => ({
        url: `/assignments/homework/list`,
        params: {
          title: queryArg.title,
          lessonId: queryArg.lessonId,
          dateFrom: queryArg.dateFrom,
          dateTo: queryArg.dateTo,
          sort: queryArg.sort,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),

    createHw: build.mutation<undefined, HwCreateUpdateRequest>({
      query: (requestBody) => ({
        url: `/assignments/homework`,
        method: 'POST',
        body: requestBody,
      }),
    }),

    getHwById: build.query<Hw, string>({
      query: (id) => ({ url: `/assignments/homework/${id}` }),
    }),

    updateHw: build.mutation<undefined, UpdateHwApiArg>({
      query: (queryArg) => ({
        url: `/assignments/homework/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.updateRequestBody,
      }),
    }),

    deleteHwById: build.mutation<undefined, string>({
      query: (id) => ({
        url: `/assignments/homework/${id}`,
        method: 'DELETE',
      }),
    }),

    getTestList: build.query<TestsPage, GetTestListApiArg>({
      query: (queryArg) => ({
        url: `/assignments/test/list`,
        params: {
          title: queryArg.title,
          lessonId: queryArg.lessonId,
          dateFrom: queryArg.dateFrom,
          dateTo: queryArg.dateTo,
          sort: queryArg.sort,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),

    createTest: build.mutation<undefined, TestCreateUpdateRequest>({
      query: (requestBody) => ({
        url: `/assignments/test`,
        method: 'POST',
        body: requestBody,
      }),
    }),

    getTestById: build.query<Test, string>({
      query: (id) => ({ url: `/assignments/test/${id}` }),
    }),

    updateTest: build.mutation<undefined, UpdateTestApiArg>({
      query: (queryArg) => ({
        url: `/assignments/test/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.updateRequestBody,
      }),
    }),

    deleteTestById: build.mutation<undefined, string>({
      query: (id) => ({
        url: `/assignments/test/${id}`,
        method: 'DELETE',
      }),
    }),

    getOtherAssignmentList: build.query<
      OtherAssignmentsPage,
      GetOtherAssignmentListApiArg
    >({
      query: (queryArg) => ({
        url: `/assignments/other/list`,
        params: {
          title: queryArg.title,
          assignmentType: queryArg.assignmentType,
          dateFrom: queryArg.dateFrom,
          dateTo: queryArg.dateTo,
          sort: queryArg.sort,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),

    createOtherAssignment: build.mutation<
      undefined,
      OtherAssignmentCreateUpdateRequest
    >({
      query: (requestBody) => ({
        url: `/assignments/other`,
        method: 'POST',
        body: requestBody,
      }),
    }),

    getOtherAssignmentById: build.query<OtherAssignment, string>({
      query: (id) => ({ url: `/assignments/other/${id}` }),
    }),

    updateOtherAssignment: build.mutation<
      undefined,
      UpdateOtherAssignmentApiArg
    >({
      query: (queryArg) => ({
        url: `/assignments/other/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.updateRequestBody,
      }),
    }),

    deleteOtherAssignmentById: build.mutation<undefined, string>({
      query: (id) => ({
        url: `/assignments/other/${id}`,
        method: 'DELETE',
      }),
    }),

    getAssignmentSnippets: build.query<
      AssignmentSnippetList,
      GetAssignmentSnippetsApiArg
    >({
      query: (queryArg) => ({
        url: `/assignments/snippets`,
        params: { assignmentType: queryArg.assignmentType },
      }),
    }),

    getLessons: build.query<LessonsPage, GetLessonsApiArg>({
      query: (queryArg) => ({
        url: `/lessons/list`,
        params: {
          lessonNumber: queryArg.lessonNumber,
          lessonTheme: queryArg.lessonTheme,
          dateFrom: queryArg.dateFrom,
          dateTo: queryArg.dateTo,
          sort: queryArg.sort,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),

    createLesson: build.mutation<undefined, LessonCreateUpdateRequest>({
      query: (requestBody) => ({
        url: `/lessons`,
        method: 'POST',
        body: requestBody,
      }),
    }),

    getLessonById: build.query<Lesson, string>({
      query: (id) => ({ url: `/lessons/${id}` }),
    }),

    updateLesson: build.mutation<undefined, UpdateLessonApiArg>({
      query: (queryArg) => ({
        url: `/lessons/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.updateRequestBody,
      }),
    }),

    deleteLessonById: build.mutation<undefined, string>({
      query: (id) => ({
        url: `/lessons/${id}`,
        method: 'DELETE',
      }),
    }),

    getLessonsSnippets: build.query<LessonSnippetList, void>({
      query: () => ({ url: `/lessons/snippets` }),
    }),

    getLotsForMarketPlace: build.query<LotsPage, GetLotsForMarketPlaceApiArg>({
      query: (queryArg) => ({
        url: `/marketplace`,
        params: {
          lotNumber: queryArg.lotNumber,
          lotTitle: queryArg.lotTitle,
          performerId: queryArg.performerId,
          performerName: queryArg.performerName,
          priceFrom: queryArg.priceFrom,
          priceTo: queryArg.priceTo,
          sort: queryArg.sort,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),

    getLots: build.query<LotsPage, GetLotsApiArg>({
      query: (queryArg) => ({
        url: `/lots/list`,
        params: {
          lotNumber: queryArg.lotNumber,
          lotTitle: queryArg.lotTitle,
          performerId: queryArg.performerId,
          performerName: queryArg.performerName,
          lotStatus: queryArg.lotStatus,
          sort: queryArg.sort,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),

    createLot: build.mutation<undefined, LotCreateUpdateRequest>({
      query: (requestBody) => ({
        url: `/lots`,
        method: 'POST',
        body: requestBody,
      }),
    }),

    getLotById: build.query<Lot, string>({
      query: (id) => ({ url: `/lots/${id}` }),
    }),

    updateLot: build.mutation<undefined, UpdateLotApiArg>({
      query: (queryArg) => ({
        url: `/lots/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.updateRequestBody,
      }),
    }),

    deleteLotById: build.mutation<undefined, string>({
      query: (id) => ({ url: `/lots/${id}`, method: 'DELETE' }),
    }),

    getTransactions: build.query<TransactionsPage, GetTransactionsApiArg>({
      query: (queryArg) => ({
        url: `/transactions`,
        params: {
          learnerId: queryArg.learnerId,
          transactionType: queryArg.transactionType,
          dateFrom: queryArg.dateFrom,
          dateTo: queryArg.dateTo,
          sort: queryArg.sort,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),

    createManualAccrual: build.mutation<undefined, ManualAccrualRequest>({
      query: (requestBody) => ({
        url: `/transactions/manual-accrual`,
        method: 'POST',
        body: requestBody,
      }),
    }),

    getTransactionById: build.query<Transaction, string>({
      query: (id) => ({ url: `/transactions/${id}` }),
    }),

    getBuyLotClaims: build.query<BuyLotClaimsPage, GetBuyLotClaimsApiArg>({
      query: (queryArg) => ({
        url: `/claims/buy-lot`,
        params: {
          twoSidedClaimStatus: queryArg.twoSidedClaimStatus,
          lotNumber: queryArg.lotNumber,
          buyerId: queryArg.buyerId,
          sellerId: queryArg.sellerId,
          dateFrom: queryArg.dateFrom,
          dateTo: queryArg.dateTo,
          sort: queryArg.sort,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),

    createBuyLotClaim: build.mutation<undefined, BuyLotRequest>({
      query: (requestBody) => ({
        url: `/claims/buy-lot`,
        method: 'POST',
        body: requestBody,
      }),
    }),

    getBuyLotClaimById: build.query<BuyLotClaim, string>({
      query: (id) => ({ url: `/claims/buy-lot/${id}` }),
    }),

    getListLotClaims: build.query<ListLotClaimsPage, GetListLotClaimsApiArg>({
      query: (queryArg) => ({
        url: `/claims/list-lot`,
        params: {
          twoSidedClaimStatus: queryArg.twoSidedClaimStatus,
          performerId: queryArg.performerId,
          dateFrom: queryArg.dateFrom,
          dateTo: queryArg.dateTo,
          sort: queryArg.sort,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),

    createListLotClaim: build.mutation<undefined, ListLotRequest>({
      query: (requestBody) => ({
        url: `/claims/list-lot`,
        method: 'POST',
        body: requestBody,
      }),
    }),

    getListLotClaimById: build.query<ListLotClaim, string>({
      query: (id) => ({ url: `/claims/list-lot/${id}` }),
    }),

    getFailedDeadlineClaims: build.query<
      FailedDeadlineClaimsPage,
      GetFailedDeadlineClaimsApiArg
    >({
      query: (queryArg) => ({
        url: `/claims/failed-deadline`,
        params: {
          claimStatus: queryArg.claimStatus,
          learnerId: queryArg.learnerId,
          assignmentId: queryArg.assignmentId,
          dateFrom: queryArg.dateFrom,
          dateTo: queryArg.dateTo,
          sort: queryArg.sort,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),

    getFailedDeadlineClaimById: build.query<FailedDeadlineClaim, string>({
      query: (id) => ({ url: `/claims/failed-deadline/${id}` }),
    }),

    getTransferClaims: build.query<TransferClaimsPage, GetTransferClaimsApiArg>(
      {
        query: (queryArg) => ({
          url: `/claims/transfer`,
          params: {
            claimStatus: queryArg.claimStatus,
            senderId: queryArg.senderId,
            receiverId: queryArg.receiverId,
            dateFrom: queryArg.dateFrom,
            dateTo: queryArg.dateTo,
            sort: queryArg.sort,
            page: queryArg.page,
            pageSize: queryArg.pageSize,
          },
        }),
      }
    ),

    createTransferClaim: build.mutation<undefined, TransferRequest>({
      query: (requestBody) => ({
        url: `/claims/transfer`,
        method: 'POST',
        body: requestBody,
      }),
    }),

    approveRejectClaim: build.mutation<undefined, ApproveRejectClaimRequest>({
      query: (requestBody) => ({
        url: `/claims/approve-reject`,
        method: 'PUT',
        body: requestBody,
      }),
    }),

    getAttendance: build.query<AttendanceInfo, string>({
      query: (id) => ({ url: `/lessons/${id}/attendance` }),
    }),

    updateAttendance: build.mutation<undefined, UpdateAttendanceApiArg>({
      query: (queryArg) => ({
        url: `/lessons/${queryArg.id}/attendance`,
        method: 'PUT',
        body: queryArg.updateRequestBody,
      }),
    }),

    getSolutions: build.query<SolutionsPage, GetSolutionsApiArg>({
      query: (queryArg) => ({
        url: `/solutions/list`,
        params: {
          assignmentId: queryArg.assignmentId,
          learnerId: queryArg.learnerId,
          teamId: queryArg.teamId,
          sort: queryArg.sort,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),

    getSolutionById: build.query<Solution, string>({
      query: (id) => ({ url: `/solutions/${id}` }),
    }),

    getSolutionByAssignmentIdAndLearnerId: build.query<
      Solution,
      GetSolutionByAssignmentIdAndLearnerIdApiArg
    >({
      query: (queryArg) => ({
        url: `/solutions`,
        params: {
          assignmentId: queryArg.assignmentId,
          learnerId: queryArg.learnerId,
        },
      }),
    }),

    createSolution: build.mutation<undefined, SolutionCreateUpdateRequest>({
      query: (requestBody) => ({
        url: `/solutions`,
        method: 'POST',
        body: requestBody,
      }),
    }),

    createEmail: build.mutation<undefined, EmailRequest>({
      query: (requestBody) => ({
        url: `/mail`,
        method: 'POST',
        body: requestBody,
      }),
    }),
  }),
});

export const {
  useAuthQuery,
  useCreateAccountMutation,
  useGetAccountsQuery,
  useGetAccountByIdQuery,
  useUpdateAccountMutation,
  useDeleteAccountByIdMutation,
  useGetUserBalanceByIdQuery,
  useGetAccountsForSelectQuery,
  useGetTeamsQuery,
  useCreateTeamMutation,
  useUpdateTeamMutation,
  useGetTeamByIdQuery,
  useDeleteTeamByIdMutation,
  useGetTeamPublicProfileByIdQuery,
  useGetTeamsForSelectQuery,
  useGetAssessmentsQuery,
  useCreateAssessmentMutation,
  useUpdateAssessmentMutation,
  useDeleteAssessmentByIdMutation,
  useGetFinalGradesByLearnerIdQuery,
  useGetFinalGradeFormulaQuery,
  useUpdateFinalGradeFormulaMutation,
  useIncreaseFinalGradeMutation,
  useGetHwListQuery,
  useCreateHwMutation,
  useGetHwByIdQuery,
  useUpdateHwMutation,
  useDeleteHwByIdMutation,
  useGetTestListQuery,
  useCreateTestMutation,
  useGetTestByIdQuery,
  useUpdateTestMutation,
  useDeleteTestByIdMutation,
  useGetOtherAssignmentListQuery,
  useCreateOtherAssignmentMutation,
  useGetOtherAssignmentByIdQuery,
  useUpdateOtherAssignmentMutation,
  useDeleteOtherAssignmentByIdMutation,
  useGetAssignmentSnippetsQuery,
  useGetLessonsQuery,
  useCreateLessonMutation,
  useGetLessonByIdQuery,
  useUpdateLessonMutation,
  useDeleteLessonByIdMutation,
  useGetLessonsSnippetsQuery,
  useGetLotsForMarketPlaceQuery,
  useGetLotsQuery,
  useCreateLotMutation,
  useGetLotByIdQuery,
  useUpdateLotMutation,
  useDeleteLotByIdMutation,
  useGetTransactionsQuery,
  useCreateManualAccrualMutation,
  useGetTransactionByIdQuery,
  useGetBuyLotClaimsQuery,
  useCreateBuyLotClaimMutation,
  useGetBuyLotClaimByIdQuery,
  useGetListLotClaimsQuery,
  useCreateListLotClaimMutation,
  useGetListLotClaimByIdQuery,
  useGetFailedDeadlineClaimsQuery,
  useGetFailedDeadlineClaimByIdQuery,
  useGetTransferClaimsQuery,
  useCreateTransferClaimMutation,
  useApproveRejectClaimMutation,
  useGetAttendanceQuery,
  useUpdateAttendanceMutation,
  useGetSolutionsQuery,
  useGetSolutionByIdQuery,
  useGetSolutionByAssignmentIdAndLearnerIdQuery,
  useCreateSolutionMutation,
  useCreateEmailMutation,
} = api;

// getLot: build.query<LotResponse, string>({
//   query: (lotId) => ({
//     url: `/lot/${lotId}`,
//     method: 'GET',
//     async responseHandler(response) {
//       const buffer = await response.arrayBuffer();
//       const decoded = LotResponse.decode(new Uint8Array(buffer));
//       return LotResponse.toObject(decoded);
//     },
//   }),
// }),
// createBuyLotClaim: build.mutation<void, CreateBuyLotClaimRequestArgs>({
//   query: (args) => ({
//     url: `/learner/claims/buy-lot`,
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-protobuf',
//     },
//     body: ClaimBuyLotRequest.encode(args).finish(),
//   }),
//   invalidatesTags: ['Balance'],
// }),
