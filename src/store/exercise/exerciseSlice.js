import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    getData: (state, action) => {
      return action.payload;
    },
    search: (state, action) => {},
  },
});

export const { getData } = exerciseSlice.actions;

export default exerciseSlice.reducer;
