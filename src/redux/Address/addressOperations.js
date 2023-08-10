import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAddressAPI } from '../../service/API/packageApi';

export const getAddress = createAsyncThunk(
  'address/getAddress',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAddressAPI();
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
