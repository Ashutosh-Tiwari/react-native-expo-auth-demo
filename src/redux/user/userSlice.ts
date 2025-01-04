import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addNameAction,
  sendEmailOtpAction,
  sendOtpAction,
  verifyEmailOtpAction,
  verifyOtpAction,
} from "./userActions";

interface LocationData {
  city: string;
  state: string;
  country: string;
}

interface UserState {
  mobile: string;
  email: string;
  name: string;
  interests: string[];
  starSign: string;
  location: LocationData | null;
  token: string;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  mobile: "",
  email: "",
  name: "",
  interests: [],
  starSign: "",
  location: { city: "", state: "", country: "" },
  token: "",
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPhoneNumber(state, action: PayloadAction<string>) {
      state.mobile = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setInterests(state, action: PayloadAction<string[]>) {
      state.interests = action.payload;
    },
    setStarSign(state, action: PayloadAction<string>) {
      state.starSign = action.payload;
    },
    setLocation(state, action: PayloadAction<LocationData | null>) {
      state.location = action.payload;
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setUserDetails(state, action: PayloadAction<UserState>) {
      state.mobile = action.payload.mobile;
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
    resetUserState() {
      return initialState;
    },
  },
  // TODO: check failure payloads
  extraReducers: (builder) => {
    builder
      .addCase(sendOtpAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendOtpAction.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(sendOtpAction.rejected, (state, action) => {
        const { message } = action.payload as {
          message: string;
          status: number;
        };
        state.error = message;
        state.loading = false;
      })
      .addCase(verifyOtpAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyOtpAction.fulfilled, (state, action) => {
        console.log(action.payload);
        const { token, userDetails } = action.payload;
        state.token = token;
        state.mobile = userDetails.mobile;
        state.loading = false;
      })
      .addCase(verifyOtpAction.rejected, (state, action) => {
        const { message } = action.payload as {
          message: string;
          status: number;
        };
        state.loading = false;
        state.error = message;
      })
      .addCase(sendEmailOtpAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendEmailOtpAction.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(sendEmailOtpAction.rejected, (state, action) => {
        const { message } = action.payload as {
          message: string;
          status: number;
        };
        state.error = message;
        state.loading = false;
      })
      .addCase(verifyEmailOtpAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyEmailOtpAction.fulfilled, (state, action) => {
        const { userDetails } = action.payload;
        state.mobile = userDetails.mobile;
        state.email = userDetails.email;
        state.loading = false;
      })
      .addCase(verifyEmailOtpAction.rejected, (state, action) => {
        const { message } = action.payload as {
          message: string;
          status: number;
        };
        state.error = message;
        state.loading = false;
      })
      .addCase(addNameAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNameAction.fulfilled, (state, action) => {
        const { userDetails } = action.payload;
        state.name = userDetails.name;
        state.loading = false;
      })
      .addCase(addNameAction.rejected, (state, action) => {
        const { message } = action.payload as {
          message: string;
          status: number;
        };
        state.error = message;
        state.loading = false;
      });
  },
});

export const {
  setPhoneNumber,
  setEmail,
  setName,
  setInterests,
  setStarSign,
  setLocation,
  setToken,
  setUserDetails,
  resetUserState,
} = userSlice.actions;

export default userSlice.reducer;
