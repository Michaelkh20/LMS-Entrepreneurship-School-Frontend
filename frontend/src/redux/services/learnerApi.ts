import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { dto } from '@dto';
import ProfileResponse = dto.ProfileResponse;
import LotsShortResponse = dto.LotsShortResponse;
import LotResponse = dto.LotResponse;
import { LotsShortRequest } from '@/types/requests';

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
    getLot: build.query<LotResponse, number>({
      query: (lotId) => ({
        url: `/lot`,
        method: 'GET',
        params: { id: lotId },
        async responseHandler(response) {
          const buffer = await response.arrayBuffer();
          const decoded = LotResponse.decode(new Uint8Array(buffer));
          return LotResponse.toObject(decoded);
        },
      }),
    }),
    createBuyLotClaim: build.mutation<void, number>({
      query: (lotId) => ({
        url: `/learner/claims/buy-lot`,
        method: 'POST',
        params: { id: lotId },
      }),
    }),
  }),
});

export const {
  useGetProfileQuery,
  useGetLotsShortQuery,
  useGetLotQuery,
  useCreateBuyLotClaimMutation,
} = learnerApi;
