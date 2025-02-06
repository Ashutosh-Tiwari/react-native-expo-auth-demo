import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import locationReducer from "./location/locationSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    location: locationReducer,
    user: userReducer,
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
