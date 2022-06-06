import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [
    { number: 1, title: "제목1", contents: "내용1" },
    { number: 2, title: "제목2", contents: "내용2" },
    { number: 3, title: "제목3", contents: "내용3" },
    { number: 4, title: "제목4", contents: "내용4" },
    { number: 5, title: "제목5", contents: "내용5" },
  ],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPost: (state, action) => {
      return { ...state };
    },
  },
});

export const { getPost } = postSlice.actions;

export default postSlice.reducer;
