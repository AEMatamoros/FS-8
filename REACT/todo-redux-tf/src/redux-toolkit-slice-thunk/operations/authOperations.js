import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:4000/api";

const setAuthHeader = (token) => {
  axios.defaults.headers.common["x-token"] = token;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["x-token"] = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credetendials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/register", credetendials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credetendials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/login", credetendials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue("no se puede renovar el token");
  }

  try {
    setAuthHeader(persistedToken);
    const res = await axios.get("/auth/renew");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
