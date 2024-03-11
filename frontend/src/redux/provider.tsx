'use client';

import { store } from './store';
import { Provider } from 'react-redux';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

// import { initializeStore } from './store';
// import { Provider } from 'react-redux';

// export function ReduxProvider({ children }: { children: React.ReactNode }) {
//   const store = initializeStore();

//   if (!store) {
//     // If there's no store (i.e., server-side), render the children without wrapping in the Provider.
//     // Though in this specific setup, since RTK Query is client-only, this may never be the case.
//     return <>{children}</>;
//   }

//   return <Provider store={store}>{children}</Provider>;
// }
