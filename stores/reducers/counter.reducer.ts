import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increaseCount(state) {
      state.count += 1;
    },
    decreaseCount(state) {
      state.count -= 1;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload.some,
      };
    },
  },
});

export const { increaseCount, decreaseCount } = counterSlice.actions;

export default counterSlice;
