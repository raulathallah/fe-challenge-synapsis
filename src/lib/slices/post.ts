import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postService from "../services/post";

type InitialState = {
  data: PostType[];
  detail: PostType | null;
};
const initialState = {
  data: [],
  detail: null,
} as InitialState;

export const getPosts = createAsyncThunk(
  "GET_POST_LIST",
  async ({ page, per_page }: { page: number; per_page: number }, thunkAPI) => {
    try {
      const data = await postService.getPosts({ page, per_page });
      return data;
    } catch (error) {
      throw new Error("ERROR GET POST LIST");
    }
  }
);

export const getPostDetails = createAsyncThunk(
  "GET_POST_DETAIL",
  async (id: number, thunkAPI) => {
    try {
      const data = await postService.getPostDetails(id);
      return data;
    } catch (error) {
      throw new Error("ERROR GET POST DETAILS");
    }
  }
);

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
    builder.addCase(getPostDetails.fulfilled, (state, action) => {
      state.detail = action.payload;
    });
    builder.addCase(getPostDetails.pending, (state, action) => {
      state.detail = null;
    });
    builder.addCase(getPostDetails.rejected, (state, action) => {
      state.detail = null;
    });
  },
});

export default postSlice.reducer;
