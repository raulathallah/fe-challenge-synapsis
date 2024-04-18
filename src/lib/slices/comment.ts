import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postService from "../services/post";
import commentService from "../services/comment";

type InitialState = {
  data: CommentType[];
  //detail: CommentType | null;
  loading: boolean;
};
const initialState = {
  data: [],
  //detail: null,
  loading: false,
} as InitialState;

export const getCommentsByPostId = createAsyncThunk(
  "GET_COMMENTS_LIST_BY_ID",
  async (id: number, thunkAPI) => {
    try {
      const data = await commentService.getCommentsByPostId(id);
      return data;
    } catch (error) {
      throw new Error("ERROR GET COOMENTS LIST BY POST ID");
    }
  }
);

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCommentsByPostId.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getCommentsByPostId.pending, (state, action) => {
      state.data = [];
      state.loading = true;
    });
    builder.addCase(getCommentsByPostId.rejected, (state, action) => {
      state.data = [];
      state.loading = false;
    });
  },
});

export default commentSlice.reducer;
