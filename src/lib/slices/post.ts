import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postService from "../services/post";

type InitialState = {
  data: PostType[];
  detail: PostType | null;
  loading: boolean;
};
const initialState = {
  data: [],
  detail: null,
  loading: false,
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
      state.loading = false;
    });
    builder.addCase(getPosts.pending, (state, action) => {
      state.data = [];
      state.loading = true;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.data = [];
      state.loading = false;
    });
    builder.addCase(getPostDetails.fulfilled, (state, action) => {
      state.detail = action.payload;
      state.loading = false;
    });
    builder.addCase(getPostDetails.pending, (state, action) => {
      state.detail = null;
      state.loading = true;
    });
    builder.addCase(getPostDetails.rejected, (state, action) => {
      state.detail = null;
      state.loading = false;
    });
  },
});

export default postSlice.reducer;
