import { createSlice } from "@reduxjs/toolkit";
import { fetchGeolocation } from "./locationActions";
import * as Location from 'expo-location';

interface LocationState {
    location: Location.LocationObject | null;
    loading: boolean;
    error: string | null;
}

const initialState: LocationState = {
    location: null,
    loading: false,
    error: null,
}

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchGeolocation.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchGeolocation.fulfilled, (state, action) => {
            state.loading = false;
            state.location = action.payload;
          })
          .addCase(fetchGeolocation.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
          });
        },
});

export default locationSlice.reducer;