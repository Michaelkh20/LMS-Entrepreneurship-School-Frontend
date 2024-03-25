import { configureStore } from '@reduxjs/toolkit';
import { commonApi } from './services/commonApi';
import { adminApi } from './services/adminApi';
import { learnerApi } from './services/learnerApi';
import authReducer from './features/authSlice';

export const store = configureStore({
  reducer: {
    [commonApi.reducerPath]: commonApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [learnerApi.reducerPath]: learnerApi.reducer,
    auth: authReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      commonApi.middleware,
      adminApi.middleware,
      learnerApi.middleware,
    ]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
