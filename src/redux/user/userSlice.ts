import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  phoneNumber: string | null;
  email: string | null;
  name: string | null;
  interests: string[];
  starSign: string | null;
  location: { latitude: number; longitude: number } | null;
}

const initialState: UserState = {
  phoneNumber: null,
  email: null,
  name: null,
  interests: [],
  starSign: null,
  location: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPhoneNumber(state, action: PayloadAction<string>) {
      state.phoneNumber = action.payload;
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
    setLocation(
      state,
      action: PayloadAction<{ latitude: number; longitude: number }>
    ) {
      state.location = action.payload;
    },
    resetUserState() {
      return initialState;
    },
  },
});

export const {
  setPhoneNumber,
  setEmail,
  setName,
  setInterests,
  setStarSign,
  setLocation,
  resetUserState,
} = userSlice.actions;

export default userSlice.reducer;
