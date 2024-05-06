import { AuthState } from '.';
import { AUTH_STATE_LOCAL_STORAGE_KEY } from './constants';

export function serializeAuthStateToLocalStorage(authState: AuthState) {
  localStorage.removeItem(AUTH_STATE_LOCAL_STORAGE_KEY);

  const serializedState = JSON.stringify(authState);

  localStorage.setItem(AUTH_STATE_LOCAL_STORAGE_KEY, serializedState);
}

export function deserializeAuthStateFromLocalStorage() {
  if (!globalThis.localStorage) {
    return undefined;
  }

  const serializedState = localStorage.getItem(AUTH_STATE_LOCAL_STORAGE_KEY);

  if (!serializedState) {
    return undefined;
  }

  return JSON.parse(serializedState) as AuthState;
}
