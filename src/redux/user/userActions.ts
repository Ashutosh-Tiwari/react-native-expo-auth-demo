import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addName,
  sendEmailOtp,
  sendOtp,
  verifyEmailOtp,
  verifyOtp,
} from "services/apiServices";
import { RootState } from "../store";

export const sendOtpAction = createAsyncThunk(
  "mobile/sendOtp",
  async (phone: string, { rejectWithValue }) => {
    try {
      const response = await sendOtp({ mobile: phone });
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const verifyOtpAction = createAsyncThunk(
  "mobile/verifyOtp",
  async (data: { mobile: string; otp: string }, { rejectWithValue }) => {
    try {
      const response = await verifyOtp(data);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const sendEmailOtpAction = createAsyncThunk(
  "email/sendEmailOtp",
  async (email: string, { getState, rejectWithValue }) => {
    const state = getState() as RootState;
    const token = state.user.token;

    try {
      const response = await sendEmailOtp({ email }, token!!);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const verifyEmailOtpAction = createAsyncThunk(
  "email/verifyEmailOtp",
  async (
    data: { email: string; otp: string },
    { getState, rejectWithValue }
  ) => {
    const state = getState() as RootState;
    const token = state.user.token;
    try {
      const response = await verifyEmailOtp(data, token!!);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNameAction = createAsyncThunk(
  "user/addName",
  async (name: string, { getState, rejectWithValue }) => {
    const state = getState() as RootState;
    const token = state.user.token;
    try {
      const response = await addName({ name }, token!!);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
