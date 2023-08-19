import { configureStore } from '@reduxjs/toolkit';
import { commonApi } from './services/commonApi';
import { adminApi } from './services/adminApi';
import { learnerApi } from './services/learnerApi';

export const store = configureStore({
  reducer: {
    [commonApi.reducerPath]: commonApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [learnerApi.reducerPath]: learnerApi.reducer,
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

// import { configureStore } from '@reduxjs/toolkit';
// import { commonApi } from './services/commonApi';
// import { adminApi } from './services/adminApi';
// import { learnerApi } from './services/learnerApi';

// let storeInstance: any;

// export function initializeStore() {
//   if (typeof window === 'undefined') {
//     return undefined; // We don't create a store on the server since RTK Query is only used on the client.
//   }
//   if (!storeInstance) {
//     storeInstance = configureStore({
//       reducer: {
//         [commonApi.reducerPath]: commonApi.reducer,
//         [adminApi.reducerPath]: adminApi.reducer,
//         [learnerApi.reducerPath]: learnerApi.reducer,
//       },
//       middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat([
//           commonApi.middleware,
//           adminApi.middleware,
//           learnerApi.middleware,
//         ]),
//     });
//   }
//   return storeInstance;
// }

// Rest of your store configuration remains the same...
