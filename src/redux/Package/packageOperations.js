import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getProductByIdAPI,
} from '../../service/API/packageApi';

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (declarationNumber, { rejectWithValue }) => {
    try {
      const data = await getProductByIdAPI(declarationNumber);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
