import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { dto } from '@dto';
import AccountResponse = dto.AccountGetResponse;
import AccountEditRequest = dto.AccountEditRequest;
import IAccountEditRequest = dto.IAccountEditRequest;
import AccountCreateRequest = dto.AccountCreateRequest;
import IAccountCreateRequest = dto.IAccountCreateRequest;
import AccountChangeSuccessResponse = dto.AccountChangeSuccessResponse;
import AccountChangeErrorResponse = dto.AccountChangeErrorResponse;

export const adminApi = createApi({
  reducerPath: 'adminAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/admin',
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
    getAccount: build.query<AccountResponse, string>({
      query: (id) => ({
        url: `accounts/${id}`,
        method: 'GET',
        async responseHandler(response) {
          const buffer = await response.arrayBuffer();
          const decoded = AccountResponse.decode(new Uint8Array(buffer));
          return AccountResponse.toObject(decoded);
        },
      }),
    }),

    editAccount: build.mutation<
      AccountChangeSuccessResponse | AccountChangeErrorResponse,
      { id: string; body: IAccountEditRequest }
    >({
      query: ({ id, body }) => ({
        url: `accounts/${id}`,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/x-protobuf',
        },
        body: AccountEditRequest.encode(body).finish(),
        async responseHandler(response) {
          if (response.status === 200) {
            const buffer = await response.arrayBuffer();
            const decoded = AccountChangeSuccessResponse.decode(
              new Uint8Array(buffer)
            );
            return AccountChangeSuccessResponse.toObject(decoded);
          }

          if (response.status === 409) {
            const buffer = await response.arrayBuffer();
            const decoded = AccountChangeErrorResponse.decode(
              new Uint8Array(buffer)
            );
            return AccountChangeErrorResponse.toObject(decoded);
          }

          return undefined;
        },
      }),
    }),

    createAccount: build.mutation<
      AccountChangeSuccessResponse | AccountChangeErrorResponse,
      IAccountCreateRequest
    >({
      query: (request) => ({
        url: `accounts`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-protobuf',
        },
        body: AccountCreateRequest.encode(request).finish(),
        async responseHandler(response) {
          if (response.status === 200) {
            const buffer = await response.arrayBuffer();
            const decoded = AccountChangeSuccessResponse.decode(
              new Uint8Array(buffer)
            );
            return AccountChangeSuccessResponse.toObject(decoded);
          }

          if (response.status === 409) {
            const buffer = await response.arrayBuffer();
            const decoded = AccountChangeErrorResponse.decode(
              new Uint8Array(buffer)
            );
            return AccountChangeErrorResponse.toObject(decoded);
          }

          return undefined;
        },
      }),
    }),
  }),
});

export const {
  useGetAccountQuery,
  useEditAccountMutation,
  useCreateAccountMutation,
} = adminApi;
