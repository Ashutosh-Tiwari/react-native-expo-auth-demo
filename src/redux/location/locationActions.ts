import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Location from 'expo-location';

export const fetchGeolocation = createAsyncThunk(
  'location/fetchGeolocation',
  async (_, { rejectWithValue }) => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        throw new Error('Permission to access location was denied');
      }
      const location = await Location.getCurrentPositionAsync({});
      return location;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
