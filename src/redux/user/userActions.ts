import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addName,
  sendEmailOtp,
  sendOtp,
  verifyEmailOtp,
  verifyOtp,
} from "services/apiServices";
import { RootState } from "../store";

export interface RejectedErrorPayload {
  message?: string;
}

export const sendOtpAction = createAsyncThunk<
  any,
  string,
  { rejectValue: RejectedErrorPayload }
>("mobile/sendOtp", async (phone: string, { rejectWithValue }) => {
  try {
    const response = await sendOtp({ mobile: phone });
    return response;
  } catch (error: any) {
    return rejectWithValue({ message: error?.message });
  }
});

export const verifyOtpAction = createAsyncThunk<
  any,
  any,
  { rejectValue: RejectedErrorPayload }
>(
  "mobile/verifyOtp",
  async (data: { mobile: string; otp: string }, { rejectWithValue }) => {
    try {
      const response = await verifyOtp(data);
      return response;
    } catch (error: any) {
      return rejectWithValue({ message: error?.message });
    }
  }
);

export const sendEmailOtpAction = createAsyncThunk<
  any,
  string,
  { rejectValue: RejectedErrorPayload }
>(
  "email/sendEmailOtp",
  async (email: string, { getState, rejectWithValue }) => {
    const state = getState() as RootState;
    const token = state.user.token;

    try {
      const response = await sendEmailOtp({ email }, token!!);
      return response;
    } catch (error: any) {
      return rejectWithValue({ message: error?.message });
    }
  }
);

export const verifyEmailOtpAction = createAsyncThunk<
  any,
  any,
  { rejectValue: RejectedErrorPayload }
>(
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
      return rejectWithValue({ message: error?.message });
    }
  }
);

export const addNameAction = createAsyncThunk<
  any,
  string,
  { rejectValue: RejectedErrorPayload }
>("user/addName", async (name: string, { getState, rejectWithValue }) => {
  const state = getState() as RootState;
  const token = state.user.token;
  try {
    const response = await addName({ name }, token!!);
    return response;
  } catch (error: any) {
    return rejectWithValue({ message: error?.message });
  }
});
