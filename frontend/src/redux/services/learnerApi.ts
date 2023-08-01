import { FinalGradeFormula, Id, TaskType } from '@/types/common';
import {
  GetClaimsLearnerApiArg,
  GetLotsLearnerApiArg,
  GetSolutionsLearnerApiArg,
  GetTransactionsLearnerApiArg,
  LearnerClaimRequest,
  UploadFileApiArg,
} from '@/types/requests';
import {
  FinalGradeInfo,
  LearnerAssessmentTableItem,
  LearnerClaimsPage,
  LearnerLessonInfo,
  LearnerLessonTableItem,
  LearnerLotsPage,
  LearnerSolutionInfo,
  LearnerSolutionsTable,
  LearnerTeamProfile,
  LearnerTransactionsPage,
  UserBalance,
  UserProfile,
} from '@/types/responses';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export const learnerApi = createApi({
  reducerPath: 'learnerAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BACKEND_URL,
  }),
  endpoints: (build) => ({
    getProfile: build.query<UserProfile, void>({
      query: () => ({ url: `/accounts/profile` }),
    }),

    getUserBalance: build.query<UserBalance, void>({
      query: () => ({ url: `/learner/accounts/balance-name` }),
    }),

    getTeamByIdLearner: build.query<LearnerTeamProfile, Id>({
      query: (id) => ({ url: `/learner/teams/${id}` }),
    }),

    getAssessmentsLearner: build.query<LearnerAssessmentTableItem[], TaskType>({
      query: (taskType) => ({
        url: `/learner/assessments`,
        params: { taskType: taskType },
      }),
    }),

    getFinalGradeFormula: build.query<FinalGradeFormula, void>({
      query: () => ({ url: `/assessments/formula` }),
    }),

    getFinalGradesLearner: build.query<FinalGradeInfo, void>({
      query: () => ({ url: `/assessments/final-grades` }),
    }),

    getLessonsLearner: build.query<LearnerLessonTableItem[], void>({
      query: () => ({ url: `/learner/lessons` }),
    }),

    getLessonByIdLearner: build.query<LearnerLessonInfo, Id>({
      query: (id) => ({ url: `/learner/lessons/${id}` }),
    }),

    getLotsLearner: build.query<LearnerLotsPage, GetLotsLearnerApiArg>({
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

    getTransactionsLearner: build.query<
      LearnerTransactionsPage,
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

    getClaimsLearner: build.query<LearnerClaimsPage, GetClaimsLearnerApiArg>({
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

    createClaim: build.mutation<undefined, LearnerClaimRequest>({
      query: (learnerClaimRequest) => ({
        url: `/learner/claims`,
        method: 'POST',
        body: learnerClaimRequest,
      }),
    }),

    uploadFile: build.mutation<undefined, UploadFileApiArg>({
      query: (queryArg) => ({
        url: `/learner/files`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),

    getSolutionsLearner: build.query<
      LearnerSolutionsTable,
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

    getSolutionByIdLearner: build.query<LearnerSolutionInfo, Id>({
      query: (taskId) => ({ url: `/learner/solutions/${taskId}` }),
    }),
  }),
});

export const {
  useGetFinalGradesLearnerQuery,
  useGetProfileQuery,
  useGetUserBalanceQuery,
  useGetTeamByIdLearnerQuery,
  useGetAssessmentsLearnerQuery,
  useGetLessonsLearnerQuery,
  useGetLessonByIdLearnerQuery,
  useGetLotsLearnerQuery,
  useGetTransactionsLearnerQuery,
  useGetClaimsLearnerQuery,
  useCreateClaimMutation,
  useUploadFileMutation,
  useGetSolutionsLearnerQuery,
  useGetSolutionByIdLearnerQuery,
  useGetFinalGradeFormulaQuery,
} = learnerApi;
