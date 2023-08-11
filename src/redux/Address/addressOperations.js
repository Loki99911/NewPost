import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAddressAPI } from '../../service/API/packageApi';

export const getAddress = createAsyncThunk(
  'address/getAddress',
  async (param, { rejectWithValue }) => {
    try {
      const data = await getAddressAPI(param);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
