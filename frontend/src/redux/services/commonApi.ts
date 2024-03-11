import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { dto } from '@dto';
import PersonRequest = dto.PersonRequest;
import IPersonRequest = dto.IPersonRequest;
import PersonResponse = dto.PersonResponse;
import AuthRequest = dto.AuthRequest;
import IAuthRequest = dto.IAuthRequest;
import AuthResponse = dto.AuthResponse;

export const commonApi = createApi({
  reducerPath: 'commonAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  endpoints: (build) => ({
    auth: build.mutation<AuthResponse, IAuthRequest>({
      query: (authRequest) => ({
        url: `/auth`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-protobuf',
        },
        body: AuthRequest.encode(authRequest).finish(),
        async responseHandler(response) {
          const buffer = await response.arrayBuffer();
          return AuthResponse.decode(new Uint8Array(buffer));
        },
      }),
    }),
    logOut: build.mutation<undefined, void>({
      query: () => ({
        url: `/logout`,
        method: 'POST',
      }),
    }),
    person: build.mutation<PersonResponse, IPersonRequest>({
      query: (personRequest) => ({
        url: `/person`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-protobuf',
        },
        body: PersonRequest.encode(personRequest).finish(),
        async responseHandler(response) {
          const buffer = await response.arrayBuffer();
          return PersonResponse.decode(new Uint8Array(buffer));
        },
      }),
    }),
  }),
});

export const { useAuthMutation, useLogOutMutation, usePersonMutation } =
  commonApi;
