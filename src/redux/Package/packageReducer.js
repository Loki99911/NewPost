import { createSlice } from '@reduxjs/toolkit';
import { getProductById } from './packageOperations';

const pending = state => {
  state.isLoading = true;
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  packages: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "package",
  initialState,
  reducers: {
    setNewDate: (state, { payload }) => {
      state.date = payload;
    },
    setModalOpen: (state, { payload }) => {
      state.isModalOpen = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getProductById.pending, pending)
      .addCase(getProductById.rejected, rejected)
      .addCase(getProductById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.packages = payload;
      }),
});

export default productsSlice.reducer;

export const { setNewDate, setModalOpen } = productsSlice.actions;
