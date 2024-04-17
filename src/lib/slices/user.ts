import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../services/user";

type InitialState = {
  data: UserType[];
  detail: UserType | null;
};
const initialState = {
  data: [],
  detail: null,
} as InitialState;

export const getUsers = createAsyncThunk(
  "GET_USER_LIST",
  async ({ page, per_page }: { page: number; per_page: number }, thunkAPI) => {
    try {
      const data = await userService.getUsers({ page, per_page });
      return data;
    } catch (error) {
      throw new Error("ERROR GET USER LIST");
    }
  }
);
export const getUserDetails = createAsyncThunk(
  "GET_USER_DETAIL",
  async (id: number, thunkAPI) => {
    try {
      const data = await userService.getUserDetails(id);
      return data;
    } catch (error) {
      throw new Error("ERROR GET USER DETAILS");
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getUsers.pending, (state, action) => {
      state.data = [];
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.data = [];
    });
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.detail = action.payload;
    });
    builder.addCase(getUserDetails.pending, (state, action) => {
      state.detail = null;
    });
    builder.addCase(getUserDetails.rejected, (state, action) => {
      state.detail = null;
    });
  },
});

export default userSlice.reducer;
