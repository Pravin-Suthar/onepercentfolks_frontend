import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExampleState {
  sipAmount: number;
  sipInterestPA: number;
  sipDuration: number;
}

const initialState: ExampleState = {
  sipAmount: 500,
  sipInterestPA: 12,
  sipDuration: 10,
};

const returnCalculator = createSlice({
  name: "sipReturn",
  initialState,
  reducers: {
    setSipAmount(state, action: PayloadAction<number>) {
      state.sipAmount = action.payload;
    },
    setSipInterestRate(state, action: PayloadAction<number>) {
      state.sipInterestPA = action.payload;
    },
    setSipDuration(state, action: PayloadAction<number>) {
      state.sipDuration = action.payload;
    },
  },
});

export const { setSipAmount, setSipInterestRate, setSipDuration } =
  returnCalculator.actions;
export default returnCalculator.reducer;
