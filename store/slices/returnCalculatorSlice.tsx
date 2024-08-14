import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExampleState {
  sipAmount: number;
  sipInterestPA: number;
  sipDuration: number;
  sipMaturityAmount: number;
  selectedTool: number;
  lumpSumAmount: number;
  recurringLumpSumFrequency: number;
}

const initialState: ExampleState = {
  sipAmount: 500,
  sipInterestPA: 12,
  sipDuration: 10,
  sipMaturityAmount: 0,
  selectedTool: 0, // 0 -> SIP, 1 -> FD, 2 -> RD
  lumpSumAmount: 100000,
  recurringLumpSumFrequency: 3,
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
    setSipMaturityAmount(state, action: PayloadAction<number>) {
      state.sipMaturityAmount = action.payload; 
    },
    setLumpSumAmount(state, action: PayloadAction<number>) {
      state.lumpSumAmount = action.payload;
    },
    setRecurringLumpSumFrequency(state, action: PayloadAction<number>) {  
      state.recurringLumpSumFrequency = action.payload;
    },
  },
});

export const { setSipAmount, setSipInterestRate, setSipDuration,setSipMaturityAmount ,setLumpSumAmount,setRecurringLumpSumFrequency} =
  returnCalculator.actions;
export default returnCalculator.reducer;
