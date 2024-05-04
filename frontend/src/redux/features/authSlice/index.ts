import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Role } from '@/types/common';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { AuthStatus } from '@/types/redux';
import { ISuccessAuthResponse } from '@/types/proto';
import { useCallback } from 'react';
import {
  deserializeAuthStateFromLocalStorage,
  serializeAuthStateToLocalStorage,
} from './helpers';

export type AuthState =
  | {
      status: AuthStatus.NOT_AUTHED;
      userId: undefined;
      token: undefined;
      role: undefined;
      name: undefined;
      surname: undefined;
      patronymic: undefined;
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

const defaultInitialState: AuthState = {
  status: AuthStatus.NOT_AUTHED,
  userId: undefined,
  token: undefined,
  name: undefined,
  surname: undefined,
  patronymic: undefined,
  role: undefined,
};

const deserializedInitialState = deserializeAuthStateFromLocalStorage();

export const authSlice = createSlice({
  name: 'auth',
  initialState: deserializedInitialState || (defaultInitialState as AuthState),
  reducers: {
    logIn: (_, action: PayloadAction<ISuccessAuthResponse>) => {
      const newState: AuthState = {
        status: AuthStatus.AUTHED,
        userId: action.payload.userId,
        token: action.payload.token,
        name: action.payload.name,
        surname: action.payload.surname,
        patronymic: action.payload.patronymic,
        role: action.payload.role,
      };

      serializeAuthStateToLocalStorage(newState);

      return newState;
    },
    logOut: () => {
      const newState: AuthState = {
        status: AuthStatus.NOT_AUTHED,
        userId: undefined,
        token: undefined,
        name: undefined,
        surname: undefined,
        patronymic: undefined,
        role: undefined,
      };

      serializeAuthStateToLocalStorage(newState);

      return newState;
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

  const logIn = useCallback(
    (successResponse: ISuccessAuthResponse) => {
      dispatch(authSlice.actions.logIn(successResponse));
    },
    [dispatch]
  );

  const logOut = useCallback(() => {
    dispatch(authSlice.actions.logOut());
  }, [dispatch]);

  const isAdmin =
    currState.status === AuthStatus.AUTHED && currState.role === Role.ADMIN;
  const isLearner =
    currState.status === AuthStatus.AUTHED && currState.role === Role.LEARNER;
  const isTracker =
    currState.status === AuthStatus.AUTHED && currState.role === Role.TRACKER;

  return [currState, { logIn, logOut }, { isAdmin, isLearner, isTracker }];
}