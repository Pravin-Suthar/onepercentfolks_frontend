import { createAsyncThunk } from "@reduxjs/toolkit";

interface SignUpData {
  name: String;
  email: String;
  password: String;
}

export const signupUser = createAsyncThunk<SignUpData , SignUpData>(
  "users/SignUp",
  async (userSignUPData) => {
    console.log("Fetching data for", userSignUPData);
    const response = await fetch(
      `http://localhost:5000/api/v1/users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userSignUPData),
      }
    );
    const data = await response.json();

    return data;

    // Ensure this matches the API response structure
  }
);
