import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExampleState {
  sipAmount: number;
  sipInterestPA: number;
  sipDuration: number;
  lumpSumAmount: number;
  lumpSumInterestPA: number;
  lumpSumDuration: number;
}

const initialState: ExampleState = {
  sipAmount: 500,
  sipInterestPA: 12,
  sipDuration: 10,
  lumpSumAmount: 100000,
  lumpSumInterestPA: 10,
  lumpSumDuration: 1,
};

const returnCalculator = createSlice({
  name: "sipReturn",
  initialState,
  reducers: {
    // SIP Calculator actions
    setSipAmount(state, action: PayloadAction<number>) {
      state.sipAmount = action.payload;
    },
    setSipInterestRate(state, action: PayloadAction<number>) {
      state.sipInterestPA = action.payload;
    },
    setSipDuration(state, action: PayloadAction<number>) {
      state.sipDuration = action.payload;
    },

    // Lumpsum Calculator actions
    setLumpSumAmount(state, action: PayloadAction<number>) {
      state.lumpSumAmount = action.payload;
    },
    setLumpSumInterestRate(state, action: PayloadAction<number>) {
      state.lumpSumInterestPA = action.payload;
    },
    setLumpSumDuration(state, action: PayloadAction<number>) {
      state.lumpSumDuration = action.payload;
    },
  },
});

export const {
  setSipAmount,
  setSipInterestRate,
  setSipDuration,
  setLumpSumAmount,
  setLumpSumInterestRate,
  setLumpSumDuration,
} = returnCalculator.actions;
export default returnCalculator.reducer;
