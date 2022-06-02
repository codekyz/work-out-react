import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from "./exercise/exerciseSlice";

const store = configureStore({
  reducer: {
    exercise: exerciseReducer,
  },
});

export default store;
