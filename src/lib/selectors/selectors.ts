import { RootState } from "../store";

export const getPostsSelector = (state: RootState) => state.post;
export const getUsersSelector = (state: RootState) => state.user;
export const getCommentsSelector = (state: RootState) => state.comment;
