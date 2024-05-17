import { configureStore } from '@reduxjs/toolkit';
import { api } from './services/api';
import authReducer from './features/authSlice';
import marketReducer from './features/marketSlice';
import { serializeStateToLocalStorage } from './features/helpers';
import { MARKET_STATE_LOCAL_STORAGE_KEY } from './features/marketSlice/constants';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    market: marketReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([api.middleware]),
});

store.subscribe(() => {
  serializeStateToLocalStorage(
    store.getState().market,
    MARKET_STATE_LOCAL_STORAGE_KEY
  );
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
