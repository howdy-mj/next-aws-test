import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../index';

const selectCount = (state: RootState) => state.counter;

export const getCount = createSelector(selectCount, ({ count }) => count);
