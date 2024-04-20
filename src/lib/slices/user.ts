import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../services/user";
import axios from "axios";

type InitialState = {
  data: UserType[];
  detail: UserType | null;
  loading: boolean;
  response: any;
  status: any;
  message: string;
};
const initialState = {
  data: [],
  detail: null,
  loading: false,
  message: "",
  status: null,
  response: null,
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
export const createUser = createAsyncThunk(
  "CREATE_USER",
  async ({ body }: { body: CreateUserType }, thunkAPI) => {
    try {
      const data = await userService.createUser({ body });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          return {
            response: error.response,
            status: error.response.status,
          };
        }
      }
      throw new Error("ERROR CREATE USER");
    }
  }
);
export const updateUser = createAsyncThunk(
  "UPDATE_USER",
  async ({ body, id }: { body: CreateUserType; id: string }, thunkAPI) => {
    try {
      const data = await userService.updateUser({ body, id });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          return {
            response: error.response,
            status: error.response.status,
          };
        }
      }
      throw new Error("ERROR UPDATE USER");
    }
  }
);
export const deleteUser = createAsyncThunk(
  "DELETE_USER",
  async (id: number, thunkAPI) => {
    try {
      const data = await userService.deleteUser(id);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          return {
            response: error.response,
            status: error.response.status,
          };
        }
      }
      throw new Error("ERROR UPDATE USER");
    }
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetResponse: (state) => {
      state.response = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getUsers.pending, (state, action) => {
      state.data = [];
      state.loading = true;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.data = [];
      state.loading = false;
    });
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.detail = action.payload;
      state.loading = false;
    });
    builder.addCase(getUserDetails.pending, (state, action) => {
      state.detail = null;
      state.loading = true;
    });
    builder.addCase(getUserDetails.rejected, (state, action) => {
      state.detail = null;
      state.loading = false;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.response = action.payload;
      state.loading = false;
    });
    builder.addCase(createUser.pending, (state, action) => {
      state.response = null;
      state.loading = true;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.response = null;
      state.loading = false;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.response = action.payload;
      state.loading = false;
    });
    builder.addCase(updateUser.pending, (state, action) => {
      state.response = action.payload;
      state.loading = true;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.response = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.response = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteUser.pending, (state, action) => {
      state.response = action.payload;
      state.loading = true;
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.response = action.payload;
      state.loading = false;
    });
  },
});

export const { resetResponse } = userSlice.actions;
export default userSlice.reducer;
