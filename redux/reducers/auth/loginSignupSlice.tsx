import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SignUpData {
  name: String;
  email: String;
  password: String;
}

const initialState: SignUpData = {
  name: "John",
  email: "email@gmail.com",
  password: "Enter your password",
};
const userCredentialReducer = createSlice({
  name: "userCredentials",
  initialState,
  reducers: {
    setUserName(state, action: PayloadAction<String>) {
      state.name = action.payload;
    },
    setUserEmail(state, action: PayloadAction<String>) {
      state.email = action.payload;
    },
    setUserPassword(state, action: PayloadAction<String>) {
      state.password = action.payload;
    },
  },
});

export const {setUserName, setUserEmail, setUserPassword } = userCredentialReducer.actions;

export default userCredentialReducer.reducer;
