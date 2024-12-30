import { createSlice } from '@reduxjs/toolkit';

interface ApiState {
  isLoading: boolean;
  error: string | null;
}

const initialState: ApiState = {
  isLoading: false,
  error: null,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setError } = apiSlice.actions;
export default apiSlice.reducer;