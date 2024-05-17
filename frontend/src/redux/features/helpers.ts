import { AuthState } from './authSlice';
import { AUTH_STATE_LOCAL_STORAGE_KEY } from './authSlice/constants';

export function serializeStateToLocalStorage(state: any, key: string) {
  localStorage.removeItem(key);

  const serializedState = JSON.stringify(state);

  localStorage.setItem(key, serializedState);
}

export function deserializeStateFromLocalStorage<T>(key: string) {
  if (!globalThis.localStorage) {
    return undefined;
  }

  const serializedState = localStorage.getItem(AUTH_STATE_LOCAL_STORAGE_KEY);

  if (!serializedState) {
    return undefined;
  }

  return JSON.parse(serializedState) as T;
}
