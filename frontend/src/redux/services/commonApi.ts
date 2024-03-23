import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { dto } from '@dto';
import AuthRequest = dto.AuthRequest;
import IAuthRequest = dto.IAuthRequest;
import AuthResponse = dto.AuthResponse;
import TeamModalResponse = dto.TeamModalResponse;

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
          const decoded = AuthResponse.decode(new Uint8Array(buffer));
          return AuthResponse.toObject(decoded);
        },
      }),
    }),
    getTeamProfileView: build.query<TeamModalResponse, string>({
      query: (teamId) => ({
        url: `/team-modal-view/${teamId}`,
        method: 'GET',
        async responseHandler(response) {
          const buffer = await response.arrayBuffer();
          const decoded = TeamModalResponse.decode(new Uint8Array(buffer));
          return TeamModalResponse.toObject(decoded);
        },
      }),
    }),
  }),
});

export const { useAuthMutation, useGetTeamProfileViewQuery } = commonApi;
