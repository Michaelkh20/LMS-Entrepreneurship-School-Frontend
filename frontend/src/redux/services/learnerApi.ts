import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { dto } from '@dto';
import ProfileResponse = dto.ProfileResponse;
import LotsShortResponse = dto.LotsShortResponse;
import LotResponse = dto.LotResponse;
import NameAndBalanceResponse = dto.NameAndBalanceResponse;
import ClaimBuyLotRequest = dto.ClaimBuyLotRequest;
import {
  CreateBuyLotClaimRequestArgs,
  LotsShortRequest,
} from '@/types/requests';

export const learnerApi = createApi({
  reducerPath: 'learnerAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  tagTypes: ['Balance', 'Claim', 'Transaction', 'Solution', 'Assessment'],
  keepUnusedDataFor: 180,
  endpoints: (build) => ({
    getProfile: build.query<ProfileResponse, string>({
      query: (accountId) => ({
        url: `/profile/${accountId}`,
        method: 'GET',
        async responseHandler(response) {
          const buffer = await response.arrayBuffer();
          const decoded = ProfileResponse.decode(new Uint8Array(buffer));
          return ProfileResponse.toObject(decoded);
        },
      }),
      providesTags: ['Balance'],
    }),

    getNameAndBalance: build.query<NameAndBalanceResponse, string>({
      query: (accountId) => ({
        url: `/profile/name-and-balance/${accountId}`,
        method: 'GET',
        async responseHandler(response) {
          const buffer = await response.arrayBuffer();
          const decoded = NameAndBalanceResponse.decode(new Uint8Array(buffer));
          return NameAndBalanceResponse.toObject(decoded);
        },
      }),
      providesTags: ['Balance'],
    }),

    getLotsShort: build.query<LotsShortResponse, LotsShortRequest>({
      query: (params) => ({
        url: `/lots-short`,
        method: 'GET',
        params,
        async responseHandler(response) {
          const buffer = await response.arrayBuffer();
          const decoded = LotsShortResponse.decode(new Uint8Array(buffer));
          return LotsShortResponse.toObject(decoded);
        },
      }),
    }),
    getLot: build.query<LotResponse, string>({
      query: (lotId) => ({
        url: `/lot/${lotId}`,
        method: 'GET',
        async responseHandler(response) {
          const buffer = await response.arrayBuffer();
          const decoded = LotResponse.decode(new Uint8Array(buffer));
          return LotResponse.toObject(decoded);
        },
      }),
    }),
    createBuyLotClaim: build.mutation<void, CreateBuyLotClaimRequestArgs>({
      query: (args) => ({
        url: `/learner/claims/buy-lot`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-protobuf',
        },
        body: ClaimBuyLotRequest.encode(args).finish(),
      }),
      invalidatesTags: ['Balance'],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useGetLotsShortQuery,
  useGetLotQuery,
  useCreateBuyLotClaimMutation,
  useGetNameAndBalanceQuery,
} = learnerApi;
