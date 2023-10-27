import { register, login, logout, refresh } from "../operations/authOperations";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logout.fulfilled](state, action) {
      state.name = "";
      state.token = "";
      state.isLoggedIn = false;
    },
    [refresh.fulfilled](state, action) {
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [refresh.pending](state) {
      state.isRefreshing = true;
    },
    [refresh.pending](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
