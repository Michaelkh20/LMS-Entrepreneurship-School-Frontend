import { FinalGradeFormula, Id } from '@/types/common';
import { AuthRequest } from '@/types/requests';
import { AuthResponse, FinalGradeInfo, UserProfile } from '@/types/responses';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export function providesList<
  R extends { id: string | number }[],
  T extends string,
>(resultsWithIds: R | undefined, tagType: T) {
  return resultsWithIds
    ? [
        { type: tagType, id: 'LIST' },
        ...resultsWithIds.map(({ id }) => ({ type: tagType, id })),
      ]
    : [{ type: tagType, id: 'LIST' }];
}

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
  }),
});

export const { useAuthMutation } = commonApi;
