import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { User } from "./types";

const initialState: {
  loading: boolean;
  userList: User[] | null;
  lastFetchedPage: number;
} = {
  loading: false,
  userList: null,
  lastFetchedPage: 0,
};

const userSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    fetchUserList(state, action?: PayloadAction<number>) {
      state.loading = true;
      state.lastFetchedPage = action.payload ?? 0;
    },
    setUserList(state, { payload }: PayloadAction<User[]>) {
      state.loading = false;
      state.userList = [...(state.userList ?? []), ...payload];
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({ ...state, ...action.payload.userList }),
  },
});
// Extract the action creators object and the reducer
const { actions, reducer } = userSlice;
// Extract and export each action creator by name
export const { fetchUserList, setUserList } = actions;
// Export the reducer, either as a default or named export
export default reducer;
