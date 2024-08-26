import { configureStore } from '@reduxjs/toolkit';

// Import your reducers here
import returnCalculator from '../redux/reducers/returnCalculatorSlice'
import traderCorner from '../redux/reducers/traderCornerSlice'
import userCredential from '../redux/reducers/auth/loginSignupSlice'
export const store = configureStore({
  reducer: {
    returnCalculator: returnCalculator,
    traderCorner: traderCorner,
    userCredential: userCredential
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
