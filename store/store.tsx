import { configureStore } from '@reduxjs/toolkit';

// Import your reducers here
import returnCalculator from './slices/returnCalculatorSlice'
import traderCorner from './slices/traderCornerSlice'

export const store = configureStore({
  reducer: {
    returnCalculator: returnCalculator,
    traderCorner: traderCorner,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
