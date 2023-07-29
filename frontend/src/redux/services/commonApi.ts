import { FinalGradeFormula, Id } from '@/types/common';
import { AuthRequest } from '@/types/requests';
import { AuthResponse, FinalGradeInfo, UserProfile } from '@/types/responses';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commonApi = createApi({
  reducerPath: 'commonAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BACKEND_URL,
  }),
  endpoints: (build) => ({
    auth: build.mutation<AuthResponse, AuthRequest>({
      query: (authRequest) => ({
        url: `/auth`,
        method: 'POST',
        body: authRequest,
      }),
    }),

    getAccountById: build.query<UserProfile, Id>({
      query: (id) => ({ url: `/accounts/${id}` }),
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
  }),
});

export const {
  useAuthMutation,
  useGetAccountByIdQuery,
  useGetFinalGradeFormulaQuery,
  useGetFinalGradesByLearnerIdQuery,
} = commonApi;
