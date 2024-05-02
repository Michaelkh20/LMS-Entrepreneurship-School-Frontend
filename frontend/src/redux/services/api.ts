import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type {
  ApproveRejectClaimRequest,
  AssessmentCreateUpdateRequest,
  AssessmentsPage,
  AttendanceInfo,
  AuthApiArg,
  BuyLotClaim,
  BuyLotClaimsPage,
  BuyLotRequest,
  EmailRequest,
  FailedDeadlineClaim,
  FailedDeadlineClaimsPage,
  FinalGradeFormula,
  FinalGrades,
  GetAccountsApiArg,
  GetUserSnippetListApiArg,
  GetAssessmentsApiArg,
  GetBuyLotClaimsApiArg,
  GetCompetitionListApiArg,
  GetExamListApiArg,
  GetFailedDeadlineClaimsApiArg,
  GetHwListApiArg,
  GetLessonsApiArg,
  GetListLotClaimsApiArg,
  GetLotsApiArg,
  GetLotsForMarketPlaceApiArg,
  GetSolutionByAssignmentIdAndLearnerIdApiArg,
  GetSolutionsApiArg,
  GetTeamsApiArg,
  GetTestListApiArg,
  GetTransactionsApiArg,
  GetTransferClaimsApiArg,
  ListLotClaim,
  ListLotClaimsPage,
  ListLotRequest,
  Lot,
  LotCreateUpdateRequest,
  LotsPage,
  ManualAccrualRequest,
  SetBonusRequest,
  Solution,
  SolutionCreateUpdateRequest,
  SolutionsPage,
  TeamPublicProfile,
  Transaction,
  TransactionsPage,
  TransferClaimsPage,
  TransferRequest,
  UpdateAccountApiArg,
  UpdateAssessmentApiArg,
  UpdateAttendanceApiArg,
  UpdateCompetitionApiArg,
  UpdateExamApiArg,
  UpdateHwApiArg,
  UpdateLessonApiArg,
  UpdateLotApiArg,
  UpdateTeamApiArg,
  UpdateTestApiArg,
} from '@/types/api';

import type {
  ILoginResponse,
  ICreateUpdateUserRequest,
  IUsersList,
  IGetUserResponse,
  IUserBalanceResponse,
  IUserSnippetList,
  ITeamsList,
  ICreateUpdateTeamRequest,
  ICreateUpdateTeamResponse,
  IGetTeamResponse,
  ILessonsList,
  IHomeworksList,
  ICreateUpdateHomeworkRequest,
  IGetHomeworkResponse,
  ITestsList,
  ICreateUpdateTestRequest,
  IGetTestResponse,
  IExamsList,
  ICreateUpdateExamRequest,
  IGetExamResponse,
  ICompetitionsList,
  ICreateUpdateCompetitionRequest,
  IGetCompetitionResponse,
  IGetLessonResponse,
  TeamSnippet,
  ICreateUpdateLessonRequest,
  LessonSnippet,
  HomeworkSnippet,
  TestSnippet,
  ExamSnippet,
  ICreateUpdateUserResponse,
  ISetPasswordRequest,
  ISetPasswordResponse,
  ICreateUpdateLessonResponse,
} from '@/types/proto';

import {
  LoginResponseTransformer,
  CreateUpdateUserRequestTransformer,
  UsersListTransformer,
  GetUserResponseTransformer,
  UserBalanceResponseTransformer,
  UserSnippetListTransformer,
  TeamsListTransformer,
  CreateUpdateTeamRequestTransformer,
  CreateUpdateTeamResponseTransformer,
  GetTeamResponseTransformer,
  LessonsListTransformer,
  CreateUpdateLessonRequestTransformer,
  GetLessonResponseTransformer,
  HomeworksListTransformer,
  CreateUpdateHomeworkRequestTransformer,
  GetHomeworkResponseTransformer,
  TestsListTransformer,
  CreateUpdateTestRequestTransformer,
  GetTestResponseTransformer,
  ExamsListTransformer,
  CreateUpdateExamRequestTransformer,
  GetExamResponseTransformer,
  GetCompetitionResponseTransformer,
  CreateUpdateCompetitionRequestTransformer,
  CompetitionsListTransformer,
  CreateUpdateUserResponseTransformer,
  SetPasswordResponseTransformer,
  SetPasswordRequestTransformer,
  DeleteUserResponseTransformer,
  CreateUpdateLessonResponseTransformer,
} from '@/types/proto';

import { getResponseHandler } from './helpers/responseHandler';
import { roleToSearchParam } from '@/util/enumsToString';

export const api = createApi({
  reducerPath: 'API',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/v1',
    prepareHeaders(headers) {
      headers.set('Accept', 'application/x-protobuf');
    },
  }),
  tagTypes: ['User'],
  endpoints: (build) => ({
    auth: build.mutation<ILoginResponse, AuthApiArg>({
      query: (queryArg) => ({
        url: `/auth/login`,
        method: 'POST',
        params: { login: queryArg.login, password: queryArg.password },
        responseHandler: getResponseHandler(LoginResponseTransformer),
      }),
    }),

    setPassword: build.mutation<ISetPasswordResponse, ISetPasswordRequest>({
      query: (queryArg) => ({
        url: `/auth/set-password`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-protobuf',
        },
        body: SetPasswordRequestTransformer.encode(queryArg).finish(),
        responseHandler: getResponseHandler(SetPasswordResponseTransformer),
      }),
    }),

    createUser: build.mutation<
      ICreateUpdateUserResponse,
      ICreateUpdateUserRequest
    >({
      query: (requestBody) => ({
        url: `/users`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-protobuf',
        },
        body: CreateUpdateUserRequestTransformer.encode(requestBody).finish(),
        responseHandler: getResponseHandler(
          CreateUpdateUserResponseTransformer
        ),
      }),
      invalidatesTags: ['User'],
    }),

    getUsers: build.query<IUsersList, GetAccountsApiArg>({
      query: (queryArg) => ({
        url: `/users/list`,
        params: {
          namePattern: queryArg.name,
          email: queryArg.email,
          teamNumber: queryArg.teamNumber,
          roles: roleToSearchParam(queryArg.role),
          sort: queryArg.sort,
          page: queryArg.page && queryArg.page - 1,
          size: queryArg.size,
        },
        responseHandler: getResponseHandler(UsersListTransformer),
      }),
      providesTags: ['User'],
    }),

    getUserById: build.query<IGetUserResponse, string>({
      query: (id) => ({
        url: `/users/${id}`,
        responseHandler: getResponseHandler(GetUserResponseTransformer),
      }),
      providesTags: ['User'],
    }),

    updateUser: build.mutation<ICreateUpdateUserResponse, UpdateAccountApiArg>({
      query: (queryArg) => ({
        url: `/users/${queryArg.id}`,
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/x-protobuf',
        },
        body: CreateUpdateUserRequestTransformer.encode(
          queryArg.updateRequestBody
        ).finish(),
        responseHandler: getResponseHandler(
          CreateUpdateUserResponseTransformer
        ),
      }),
      invalidatesTags: ['User'],
    }),

    deleteUserById: build.mutation<undefined, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
        responseHandler: getResponseHandler(DeleteUserResponseTransformer),
      }),
      invalidatesTags: ['User'],
    }),

    getUserBalanceById: build.query<IUserBalanceResponse, string>({
      query: (id) => ({
        url: `/users/${id}/balance`,
        responseHandler: getResponseHandler(UserBalanceResponseTransformer),
      }),
    }),

    getUserSnippetList: build.query<IUserSnippetList, GetUserSnippetListApiArg>(
      {
        query: (queryArg) => ({
          url: `/users/snippets`,
          params: { role: queryArg.role },
          responseHandler: getResponseHandler(UserSnippetListTransformer),
        }),
      }
    ),

    getTeams: build.query<ITeamsList, GetTeamsApiArg>({
      query: (queryArg) => ({
        url: `/teams/list`,
        params: {
          teamNumber: queryArg.teamNumber,
          teamProjectTheme: queryArg.teamProjectTheme,
          sort: queryArg.sort,
          page: queryArg.page,
          size: queryArg.size,
        },
        responseHandler: getResponseHandler(TeamsListTransformer),
      }),
    }),

    createTeam: build.mutation<
      ICreateUpdateTeamResponse,
      ICreateUpdateTeamRequest
    >({
      query: (requestBody) => ({
        url: `/teams`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-protobuf',
        },
        body: CreateUpdateTeamRequestTransformer.encode(requestBody).finish(),
        responseHandler: getResponseHandler(
          CreateUpdateTeamResponseTransformer
        ),
      }),
    }),

    updateTeam: build.mutation<ICreateUpdateTeamResponse, UpdateTeamApiArg>({
      query: (queryArg) => ({
        url: `/teams/${queryArg.id}`,
        method: 'PUT',
        body: CreateUpdateTeamRequestTransformer.encode(
          queryArg.updateRequestBody
        ).finish(),
        responseHandler: getResponseHandler(
          CreateUpdateTeamResponseTransformer
        ),
      }),
    }),

    getTeamById: build.query<IGetTeamResponse, string>({
      query: (id) => ({
        url: `/teams/${id}`,
        responseHandler: getResponseHandler(GetTeamResponseTransformer),
      }),
    }),

    deleteTeamById: build.mutation<undefined, string>({
      query: (id) => ({ url: `/teams/${id}`, method: 'DELETE' }),
    }),

    getTeamPublicProfileById: build.query<IGetTeamResponse, string>({
      query: (id) => ({
        url: `/teams/${id}/public`,
        responseHandler: getResponseHandler(GetTeamResponseTransformer),
      }),
    }),

    getTeamsForSelect: build.query<TeamSnippet[], void>({
      query: () => ({
        url: `/teams/list`,
        params: { size: 10_000 },
        responseHandler: async (response) => {
          const buffer = await response.arrayBuffer();
          const decodedResponse = TeamsListTransformer.decode(
            new Uint8Array(buffer)
          );
          return decodedResponse.teams;
        },
      }),
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
          size: queryArg.size,
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

    getHwList: build.query<IHomeworksList, GetHwListApiArg>({
      query: (queryArg) => ({
        url: `/assignments/homeworks/list`,
        params: {
          title: queryArg.title,
          lessonId: queryArg.lessonId,
          dateFrom: queryArg.dateFrom,
          dateTo: queryArg.dateTo,
          sort: queryArg.sort,
          page: queryArg.page,
          size: queryArg.size,
        },
        responseHandler: getResponseHandler(HomeworksListTransformer),
      }),
    }),

    createHw: build.mutation<undefined, ICreateUpdateHomeworkRequest>({
      query: (requestBody) => ({
        url: `/assignments/homeworks`,
        method: 'POST',
        body: CreateUpdateHomeworkRequestTransformer.encode(
          requestBody
        ).finish(),
      }),
    }),

    getHwById: build.query<IGetHomeworkResponse, string>({
      query: (id) => ({
        url: `/assignments/homeworks/${id}`,
        responseHandler: getResponseHandler(GetHomeworkResponseTransformer),
      }),
    }),

    updateHw: build.mutation<undefined, UpdateHwApiArg>({
      query: (queryArg) => ({
        url: `/assignments/homeworks/${queryArg.id}`,
        method: 'PUT',
        body: CreateUpdateHomeworkRequestTransformer.encode(
          queryArg.updateRequestBody
        ).finish(),
      }),
    }),

    deleteHwById: build.mutation<undefined, string>({
      query: (id) => ({
        url: `/assignments/homeworks/${id}`,
        method: 'DELETE',
      }),
    }),

    getHWSnippets: build.query<HomeworkSnippet[], void>({
      query: () => ({
        url: `/assignments/homeworks/list`,
        params: { size: 10_000 },
        async responseHandler(response) {
          const buffer = await response.arrayBuffer();
          const decodedResponse = HomeworksListTransformer.decode(
            new Uint8Array(buffer)
          );

          return decodedResponse.homeworks;
        },
      }),
    }),

    getTestList: build.query<ITestsList, GetTestListApiArg>({
      query: (queryArg) => ({
        url: `/assignments/tests/list`,
        params: {
          title: queryArg.title,
          lessonId: queryArg.lessonId,
          dateFrom: queryArg.dateFrom,
          dateTo: queryArg.dateTo,
          sort: queryArg.sort,
          page: queryArg.page,
          size: queryArg.size,
        },
        responseHandler: getResponseHandler(TestsListTransformer),
      }),
    }),

    createTest: build.mutation<undefined, ICreateUpdateTestRequest>({
      query: (requestBody) => ({
        url: `/assignments/tests`,
        method: 'POST',
        body: CreateUpdateTestRequestTransformer.encode(requestBody).finish(),
      }),
    }),

    getTestById: build.query<IGetTestResponse, string>({
      query: (id) => ({
        url: `/assignments/tests/${id}`,
        responseHandler: getResponseHandler(GetTestResponseTransformer),
      }),
    }),

    updateTest: build.mutation<undefined, UpdateTestApiArg>({
      query: (queryArg) => ({
        url: `/assignments/tests/${queryArg.id}`,
        method: 'PUT',
        body: CreateUpdateTestRequestTransformer.encode(
          queryArg.updateRequestBody
        ).finish(),
      }),
    }),

    deleteTestById: build.mutation<undefined, string>({
      query: (id) => ({
        url: `/assignments/tests/${id}`,
        method: 'DELETE',
      }),
    }),

    getTestSnippets: build.query<TestSnippet[], void>({
      query: () => ({
        url: `/assignments/tests/list`,
        params: { size: 10_000 },
        async responseHandler(response) {
          const buffer = await response.arrayBuffer();
          const decodedResponse = TestsListTransformer.decode(
            new Uint8Array(buffer)
          );

          return decodedResponse.tests;
        },
      }),
    }),

    getExamList: build.query<IExamsList, GetExamListApiArg>({
      query: (queryArg) => ({
        url: `/assignments/exams/list`,
        params: {
          title: queryArg.title,
          dateFrom: queryArg.dateFrom,
          dateTo: queryArg.dateTo,
          sort: queryArg.sort,
          page: queryArg.page,
          size: queryArg.size,
        },
        responseHandler: getResponseHandler(ExamsListTransformer),
      }),
    }),

    createExam: build.mutation<undefined, ICreateUpdateExamRequest>({
      query: (requestBody) => ({
        url: `/assignments/exams`,
        method: 'POST',
        body: CreateUpdateExamRequestTransformer.encode(requestBody).finish(),
      }),
    }),

    getExamById: build.query<IGetExamResponse, string>({
      query: (id) => ({
        url: `/assignments/exams/${id}`,
        responseHandler: getResponseHandler(GetExamResponseTransformer),
      }),
    }),

    updateExam: build.mutation<undefined, UpdateExamApiArg>({
      query: (queryArg) => ({
        url: `/assignments/exams/${queryArg.id}`,
        method: 'PUT',
        body: CreateUpdateExamRequestTransformer.encode(
          queryArg.updateRequestBody
        ).finish(),
      }),
    }),

    deleteExamById: build.mutation<undefined, string>({
      query: (id) => ({
        url: `/assignments/exams/${id}`,
        method: 'DELETE',
      }),
    }),

    getExamSnippets: build.query<ExamSnippet[], void>({
      query: () => ({
        url: `/assignments/exams/list`,
        params: { size: 10_000 },
        async responseHandler(response) {
          const buffer = await response.arrayBuffer();
          const decodedResponse = ExamsListTransformer.decode(
            new Uint8Array(buffer)
          );

          return decodedResponse.exams;
        },
      }),
    }),

    getCompetitionList: build.query<
      ICompetitionsList,
      GetCompetitionListApiArg
    >({
      query: (queryArg) => ({
        url: `/assignments/competitions/list`,
        params: {
          title: queryArg.title,
          dateFrom: queryArg.dateFrom,
          dateTo: queryArg.dateTo,
          sort: queryArg.sort,
          page: queryArg.page,
          size: queryArg.size,
        },
        responseHandler: getResponseHandler(CompetitionsListTransformer),
      }),
    }),

    createCompetition: build.mutation<
      undefined,
      ICreateUpdateCompetitionRequest
    >({
      query: (requestBody) => ({
        url: `/assignments/competitions`,
        method: 'POST',
        body: CreateUpdateCompetitionRequestTransformer.encode(
          requestBody
        ).finish(),
      }),
    }),

    getCompetitionById: build.query<IGetCompetitionResponse, string>({
      query: (id) => ({
        url: `/assignments/competitions/${id}`,
        responseHandler: getResponseHandler(GetCompetitionResponseTransformer),
      }),
    }),

    updateCompetition: build.mutation<undefined, UpdateCompetitionApiArg>({
      query: (queryArg) => ({
        url: `/assignments/competitions/${queryArg.id}`,
        method: 'PUT',
        body: CreateUpdateCompetitionRequestTransformer.encode(
          queryArg.updateRequestBody
        ).finish(),
      }),
    }),

    deleteCompetitionById: build.mutation<undefined, string>({
      query: (id) => ({
        url: `/assignments/competitions/${id}`,
        method: 'DELETE',
      }),
    }),

    getCompetitionSnippets: build.query<ExamSnippet[], void>({
      query: () => ({
        url: `/assignments/competitions/list`,
        params: { size: 10_000 },
        async responseHandler(response) {
          const buffer = await response.arrayBuffer();
          const decodedResponse = CompetitionsListTransformer.decode(
            new Uint8Array(buffer)
          );

          return decodedResponse.competitions;
        },
      }),
    }),

    getLessons: build.query<ILessonsList, GetLessonsApiArg>({
      query: (queryArg) => ({
        url: `/lessons/list`,
        params: {
          lessonNumber: queryArg.lessonNumber,
          lessonTheme: queryArg.lessonTheme,
          dateFrom: queryArg.dateFrom,
          dateTo: queryArg.dateTo,
          sort: queryArg.sort,
          page: queryArg.page && queryArg.page - 1,
          size: queryArg.size,
        },
        responseHandler: getResponseHandler(LessonsListTransformer),
      }),
    }),

    createLesson: build.mutation<
      ICreateUpdateLessonResponse,
      ICreateUpdateLessonRequest
    >({
      query: (requestBody) => ({
        url: `/lessons`,
        method: 'POST',
        body: CreateUpdateLessonRequestTransformer.encode(requestBody).finish(),
        responseHandler: getResponseHandler(
          CreateUpdateLessonResponseTransformer
        ),
      }),
    }),

    getLessonById: build.query<IGetLessonResponse, string>({
      query: (id) => ({
        url: `/lessons/${id}`,
        responseHandler: getResponseHandler(GetLessonResponseTransformer),
      }),
    }),

    updateLesson: build.mutation<
      ICreateUpdateLessonResponse,
      UpdateLessonApiArg
    >({
      query: (queryArg) => ({
        url: `/lessons/${queryArg.id}`,
        method: 'PUT',
        body: CreateUpdateLessonRequestTransformer.encode(
          queryArg.updateRequestBody
        ).finish(),
        responseHandler: getResponseHandler(
          CreateUpdateLessonResponseTransformer
        ),
      }),
    }),

    deleteLessonById: build.mutation<undefined, string>({
      query: (id) => ({
        url: `/lessons/${id}`,
        method: 'DELETE',
      }),
    }),

    getLessonsSnippets: build.query<LessonSnippet[], void>({
      query: () => ({
        url: `/lessons/list`,
        params: { size: 10_000 },
        async responseHandler(response) {
          const buffer = await response.arrayBuffer();
          const decodedResponse = LessonsListTransformer.decode(
            new Uint8Array(buffer)
          );

          return decodedResponse.lessons;
        },
      }),
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
          size: queryArg.size,
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
          size: queryArg.size,
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
          size: queryArg.size,
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
          size: queryArg.size,
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
          size: queryArg.size,
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
          size: queryArg.size,
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
            size: queryArg.size,
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
          size: queryArg.size,
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
  useAuthMutation,
  useSetPasswordMutation,
  useGetUsersQuery,
  useGetUserByIdQuery,
  useGetUserBalanceByIdQuery,
  useGetUserSnippetListQuery,
  useCreateUserMutation,
  useDeleteUserByIdMutation,
  useUpdateUserMutation,
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
  useGetHWSnippetsQuery,
  useGetTestListQuery,
  useCreateTestMutation,
  useGetTestByIdQuery,
  useUpdateTestMutation,
  useDeleteTestByIdMutation,
  useGetTestSnippetsQuery,
  useGetCompetitionListQuery,
  useCreateCompetitionMutation,
  useGetCompetitionByIdQuery,
  useUpdateCompetitionMutation,
  useDeleteCompetitionByIdMutation,
  useGetCompetitionSnippetsQuery,
  useGetExamListQuery,
  useCreateExamMutation,
  useGetExamByIdQuery,
  useUpdateExamMutation,
  useDeleteExamByIdMutation,
  useGetExamSnippetsQuery,
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
