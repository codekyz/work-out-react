import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [], searchValue: "" };

export const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    getData: (state, action) => {
      return { ...state, data: action.payload };
    },
    setSearchValue: (state, action) => {
      return { ...state, searchValue: action.payload };
    },
    search: (state, action) => {
      const fullData = action.payload;
      const re = new RegExp(".*" + state.searchValue + ".*", "g");
      return {
        ...state,
        data: fullData.filter((exercise) => exercise.운동명.match(re)),
      };
    },
  },
});

export const { getData, setSearchValue, search } = exerciseSlice.actions;

export default exerciseSlice.reducer;
