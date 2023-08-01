import { AuthRequest } from '@/types/requests';
import { AuthResponse } from '@/types/responses';
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
  }),
});

export const { useAuthMutation } = commonApi;
