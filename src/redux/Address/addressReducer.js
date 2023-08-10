import { createSlice } from '@reduxjs/toolkit';
import { getAddress} from './addressOperations';

const pending = state => {
  state.isLoading = true;
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  address: [],
  isLoading: false,
  error: null,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setNewDate: (state, { payload }) => {
      state.date = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getAddress.pending, pending)
      .addCase(getAddress.rejected, rejected)
      .addCase(getAddress.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.address = payload;
      }),
});

export default addressSlice.reducer;

export const { setNewDate } = addressSlice.actions;
