import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OHLCData {
  open: number;
  high: number;
  low: number;
  close: number;
  time: string; // or Date, depending on what the API returns
}

interface TraderCornerState {
  selectedTickerData: string;
  selectedStockData: OHLCData[];
  isLoading: boolean;
}

const initialState: TraderCornerState = {
  selectedTickerData: "",
  selectedStockData: [],
  isLoading: false,
};

export const getStockData = createAsyncThunk<OHLCData[], void>(
  "users/getUsers",
  async () => {
    const response = await fetch(
      "https://api.upstox.com/v2/historical-candle/NSE_EQ%7CINE423A01024/day/2024-08-15/2024-01-01"
    );
    const data = await response.json();

    return data.data.candles
    .map((candle: any) => {
      const date = new Date(candle[0]);
      const formattedDate = date.toISOString().slice(0, 10); // yyyy-mm-dd format
  
      return {
        time: formattedDate,
        open: candle[1],
        high: candle[2],
        low: candle[3],
        close: candle[4],
      };
    })
    .sort((a: OHLCData, b: OHLCData) => new Date(a.time).getTime() - new Date(b.time).getTime()) as OHLCData[];
  
 // Ensure this matches the API response structure
  }
);

const traderCorner = createSlice({
  name: "traderCorner",
  initialState,
  reducers: {
    setSelectedStock(state, action: PayloadAction<string>) {
      state.selectedTickerData = action.payload;
    },
    setSelectedStockData(state, action: PayloadAction<any>) {
      state.selectedStockData = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getStockData.pending, (state: TraderCornerState) => {
      state.isLoading = true;
    });
    builder.addCase(
      getStockData.fulfilled,
      (state: TraderCornerState, action: PayloadAction<OHLCData[]>) => {
        state.isLoading = false;
        state.selectedStockData = action.payload;
      }
    );
    builder.addCase(getStockData.rejected, (state: TraderCornerState) => {
      state.isLoading = false;
    });
  },
});

export const { setSelectedStock, setSelectedStockData } = traderCorner.actions;
export default traderCorner.reducer;
