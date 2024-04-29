import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Role } from '@/types/common';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { AuthStatus } from '@/types/redux';
import { ISuccessAuthResponse } from '@/types/proto';

export type AuthState =
  | {
      status: AuthStatus.NOT_AUTHED;
    }
  | {
      status: AuthStatus.AUTHED;
      userId: string;
      token: string;
      role: Role;
      name: string;
      surname: string;
      patronymic: string | undefined;
    };

const initialState: AuthState = {
  status: AuthStatus.NOT_AUTHED,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState as AuthState,
  reducers: {
    logIn: (state, action: PayloadAction<ISuccessAuthResponse>) => {
      state.status = AuthStatus.AUTHED;
      // @ts-ignore
      state.userId = action.payload.userId;
      // @ts-ignore
      state.token = action.payload.token;
      // @ts-ignore
      state.name = action.payload.name;
      // @ts-ignore
      state.surname = action.payload.surname;
      // @ts-ignore
      state.patronymic = action.payload.patronymic;
      // @ts-ignore
      state.role = action.payload.role;
    },
    logOut: (state) => {
      state = { status: AuthStatus.NOT_AUTHED };
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;

export function useAuth(): [
  AuthState,
  {
    logIn: (successResponse: ISuccessAuthResponse) => void;
    logOut: () => void;
  },
  {
    isAdmin: boolean;
    isLearner: boolean;
    isTracker: boolean;
  },
] {
  const currState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const logIn = (successResponse: ISuccessAuthResponse) => {
    dispatch(authSlice.actions.logIn(successResponse));
  };

  const logOut = () => {
    dispatch(authSlice.actions.logOut());
  };

  const isAdmin =
    currState.status === AuthStatus.AUTHED && currState.role === Role.ADMIN;
  const isLearner =
    currState.status === AuthStatus.AUTHED && currState.role === Role.LEARNER;
  const isTracker =
    currState.status === AuthStatus.AUTHED && currState.role === Role.TRACKER;

  return [currState, { logIn, logOut }, { isAdmin, isLearner, isTracker }];
}
