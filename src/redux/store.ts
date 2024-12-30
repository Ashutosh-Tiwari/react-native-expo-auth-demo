import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import apiReducer from "./api/apiSlice";
import locationReducer from "./location/locationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    api: apiReducer,
    location: locationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
