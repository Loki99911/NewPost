import { createAsyncThunk } from "@reduxjs/toolkit";
import { getWarehouseTypesAPI } from '../../service/API/packageApi';

export const getWarehouseType = createAsyncThunk(
  'type/getWarehouseType',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getWarehouseTypesAPI();
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
