import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

import axios from "../utils/authApi";

export const login = createAsyncThunk("login", async () => {

  const {data} = await axios.post(
    "/auth/token",
    JSON.stringify({ username: "anshu1", password: "password" }),
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }
  );

  console.log(data);
  return data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: null,
    loading: false,
    error: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
    },
    logout: (state, action) => {
      state.userInfo = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    });
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log(error);
      state.error = true;
    });
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
