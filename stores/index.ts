import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './reducers/counter.reducer';

const dev = process.env.NODE_ENV === 'development';

const makeStore = () =>
  configureStore({
    reducer: {
      [counterSlice.name]: counterSlice.reducer,
    },
    devTools: dev,
  });

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;

export const wrapper = createWrapper<RootStore>(makeStore);
