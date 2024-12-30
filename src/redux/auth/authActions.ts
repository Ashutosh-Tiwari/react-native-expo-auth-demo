import { createAsyncThunk } from "@reduxjs/toolkit";
import { validateEmail, validatePhone } from "../../services/validationServices";

export const validatePhoneNumber = createAsyncThunk('auth/validatePhoneNumber',
    async (phone: string, { rejectWithValue }) => {
        try {
            const valid = await validatePhone(phone);
            if(!valid) throw new Error('Invalid phone number');
        } catch(error: any) {
            return rejectWithValue(error.message)
        }
    }
);

export const validateEmailAddress = createAsyncThunk(
    'auth/validateEmailAddress',
    async (email: string, { rejectWithValue }) => {
      try {
        const valid = await validateEmail(email);
        if (!valid) throw new Error('Email already in use');
        return email;
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    }
  );