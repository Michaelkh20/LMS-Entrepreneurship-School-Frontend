export function serializeStateToLocalStorage(state: any, key: string) {
  localStorage.removeItem(key);

  const serializedState = JSON.stringify(state);

  localStorage.setItem(key, serializedState);
}

export function deserializeStateFromLocalStorage<T>(key: string) {
  if (!globalThis.localStorage) {
    return undefined;
  }

  const serializedState = localStorage.getItem(key);

  if (!serializedState) {
    return undefined;
  }

  return JSON.parse(serializedState, (key, value) => {
    if (key.includes('date') || key.includes('Date')) {
      return new Date(value);
    }
    return value;
  }) as T;
}
