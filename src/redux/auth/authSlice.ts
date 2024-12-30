import { createSlice } from "@reduxjs/toolkit";
import { validateEmailAddress, validatePhoneNumber } from "./authActions";

interface AuthState {
    user: any | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    },
    extraReducers(builder) {
        builder
      .addCase(validatePhoneNumber.pending, (state) => {
        state.loading = true;
      })
      .addCase(validatePhoneNumber.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(validatePhoneNumber.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(validateEmailAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(validateEmailAddress.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(validateEmailAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    },
})

export const {setUser, logout} = authSlice.actions;
export default authSlice.reducer;