import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from "./exercise/exerciseSlice";
import postReducer from "./post/postSlice";

const store = configureStore({
  reducer: {
    exercise: exerciseReducer,
    post: postReducer,
  },
});

export default store;
