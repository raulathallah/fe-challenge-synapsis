import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postService from "../services/post";

type PostState = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};
type InitialState = {
  data: PostState[];
};
const initialState = {
  data: [],
} as InitialState;

export const getPosts = createAsyncThunk("POST_LIST", async (_, thunkAPI) => {
  try {
    const data = await postService.getPosts();
    return data;
  } catch (error) {
    throw new Error("ERROR POST SLICE");
  }
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getPosts.pending, (state, action) => {
      state.data = [];
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.data = [];
    });
  },
});

export default postSlice.reducer;
