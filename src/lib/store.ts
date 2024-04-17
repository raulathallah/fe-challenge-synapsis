import { configureStore } from "@reduxjs/toolkit";
import postReducer from "@/slice/post";
import userReducer from "@/slice/user";
import commentReducer from "@/slice/comment";

export const makeStore = () => {
  return configureStore({
    reducer: {
      post: postReducer,
      user: userReducer,
      comment: commentReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
