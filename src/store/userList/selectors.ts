import { AppState } from "..";

export const userListSelector = (state: AppState) => state.userList.userList;

export const userListLoadingSelector = (state: AppState) =>
  state.userList.loading;
