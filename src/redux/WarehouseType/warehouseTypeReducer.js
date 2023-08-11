import { createSlice } from '@reduxjs/toolkit';
import { getWarehouseType } from './warehouseTypeOperations';

const pending = state => {
  state.isLoading = true;
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  warehouseType: [],
  isLoading: false,
  error: null,
};

const warehouseTypeSlice = createSlice({
  name: 'warehouseType',
  initialState,
  reducers: {
    setNewDate: (state, { payload }) => {
      state.date = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getWarehouseType.pending, pending)
      .addCase(getWarehouseType.rejected, rejected)
      .addCase(getWarehouseType.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.warehouseType = payload;
      }),
});

export default warehouseTypeSlice.reducer;

export const { setNewDate } = warehouseTypeSlice.actions;
