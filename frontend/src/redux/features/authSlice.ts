import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Role } from '@/types/common'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';

export interface AuthState {
  role?: Role;
  id?: string;
}

const initialState: AuthState = {
  role: undefined,
  id: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<{ role: Role; id: string }>) => {
      state.role = action.payload.role;
      state.id = action.payload.id;
    },
    logOut: (state) => {
      state.role = undefined;
      state.id = undefined;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;

export function useAuth(): [
  AuthState,
  { logIn: (role: Role, id: string) => void; logOut: () => void },
] {
  const currState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const logIn = (role: Role, id: string) => {
    dispatch(authSlice.actions.logIn({ role, id }));
  };

  const logOut = () => {
    dispatch(authSlice.actions.logOut());
  };

  return [currState, { logIn, logOut }];
}
