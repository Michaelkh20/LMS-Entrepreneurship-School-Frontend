import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { dto } from '@dto';
import AccountResponse = dto.AccountGetResponse;
import AccountEditRequest = dto.AccountEditRequest;
import IAccountEditRequest = dto.IAccountEditRequest;
import AccountCreateRequest = dto.AccountCreateRequest;
import IAccountCreateRequest = dto.IAccountCreateRequest;
import AccountChangeSuccessResponse = dto.AccountChangeSuccessResponse;
import AccountChangeErrorResponse = dto.AccountChangeErrorResponse;
import AccountListResponse = dto.AccountListResponse;
import AccountShortListResponse = dto.AccountShortListResponse;

import TeamResponse = dto.TeamResponse;
import ITeamCreateRequest = dto.ITeamCreateRequest;
import TeamCreateRequest = dto.TeamCreateRequest;
import TeamChangeErrorResponse = dto.TeamChangeErrorResponse;
import TeamCreateSuccessResponse = dto.TeamCreateSuccessResponse;
import ClaimBuyLotListResponse = dto.ClaimBuyLotListResponse;
import ClaimBuyLotListRequest = dto.ClaimBuyLotListRequest;
import {
  ClaimBuyLotListRequestArgs,
  GetAccountsApiArg,
} from '@/types/requests';

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
      providesTags: ['Account'],
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
      invalidatesTags: ['Account'],
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
      invalidatesTags: ['Account'],
    }),

    getAccountsList: build.query<AccountListResponse, GetAccountsApiArg>({
      query: (params) => ({
        url: `accounts/list`,
        method: 'GET',
        params,
        async responseHandler(response) {
          const buffer = await response.arrayBuffer();
          const decoded = AccountListResponse.decode(new Uint8Array(buffer));
          return AccountListResponse.toObject(decoded, { arrays: true });
        },
      }),
      providesTags: ['Account'],
    }),

    getAccountsShortList: build.query<AccountShortListResponse, void>({
      query: () => ({
        url: `accounts/list-short`,
        method: 'GET',
        async responseHandler(response) {
          const buffer = await response.arrayBuffer();
          const decoded = AccountShortListResponse.decode(
            new Uint8Array(buffer)
          );
          return AccountShortListResponse.toObject(decoded);
        },
      }),
      providesTags: ['Account'],
    }),

    getTeam: build.query<TeamResponse, string>({
      query: (teamId) => ({
        url: `/teams/${teamId}`,
        method: 'GET',
        async responseHandler(response) {
          const buffer = await response.arrayBuffer();
          const decoded = TeamResponse.decode(new Uint8Array(buffer));
          return TeamResponse.toObject(decoded);
        },
      }),
    }),

    createTeam: build.mutation<
      TeamCreateSuccessResponse | TeamChangeErrorResponse,
      ITeamCreateRequest
    >({
      query: (request) => ({
        url: `teams`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-protobuf',
        },
        body: TeamCreateRequest.encode(request).finish(),
        async responseHandler(response) {
          if (response.status === 200) {
            const buffer = await response.arrayBuffer();
            const decoded = TeamCreateSuccessResponse.decode(
              new Uint8Array(buffer)
            );
            return TeamCreateSuccessResponse.toObject(decoded);
          }

          if (response.status === 409) {
            const buffer = await response.arrayBuffer();
            const decoded = TeamChangeErrorResponse.decode(
              new Uint8Array(buffer)
            );
            return TeamChangeErrorResponse.toObject(decoded);
          }

          return undefined;
        },
      }),
    }),

    getBuyLotClaimsList: build.query<
      ClaimBuyLotListResponse,
      ClaimBuyLotListRequestArgs
    >({
      query: (params) => ({
        url: `/claims/buy-lot/list`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-protobuf',
        },
        body: ClaimBuyLotListRequest.encode(params).finish(),
        async responseHandler(response) {
          const buffer = await response.arrayBuffer();
          const decoded = ClaimBuyLotListResponse.decode(
            new Uint8Array(buffer)
          );
          return ClaimBuyLotListResponse.toObject(decoded, { arrays: true });
        },
      }),
      providesTags: ['Claim'],
    }),
  }),
});

export const {
  useGetAccountQuery,
  useEditAccountMutation,
  useCreateAccountMutation,
  useGetAccountsListQuery,
  useGetAccountsShortListQuery,
  useGetTeamQuery,
  useCreateTeamMutation,
  useGetBuyLotClaimsListQuery,
} = adminApi;
