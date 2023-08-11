import { AuthRequest } from '@/types/requests';
import { AuthResponse } from '@/types/responses';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commonApi = createApi({
  reducerPath: 'commonAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
  }),
  endpoints: (build) => ({
    auth: build.mutation<AuthResponse, AuthRequest>({
      query: (authRequest) => ({
        url: `/auth`,
        method: 'POST',
        body: authRequest,
      }),
    }),
    logOut: build.mutation<undefined, void>({
      query: () => ({
        url: `/logout`,
        method: 'POST',
      }),
    }),
  }),
});

export const { useAuthMutation, useLogOutMutation } = commonApi;
