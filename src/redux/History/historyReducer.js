import { createSlice } from '@reduxjs/toolkit';

const historySlice = createSlice({
  name: 'history',
  initialState: { history: [] },
  reducers: {
    setHistory: (state, { payload }) => {
      state.history.unshift(payload);
    },
    clearHistory: state => {
      state.history = [];
    },
  },
});

export const { setHistory, clearHistory } = historySlice.actions;
export const historyReducer = historySlice.reducer;
