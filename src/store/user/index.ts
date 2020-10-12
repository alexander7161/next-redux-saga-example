import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState: {
  error: Error | null;
} = {
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn(state, _action: PayloadAction<{ email: string; password: string }>) {
      state.error = null;
    },
    signInSuccess(state, action: PayloadAction<string | null>) {
      state.error = null;
    },
    signInError(state, action: PayloadAction<Error | null>) {
      state.error = action.payload;
    },
    signOut() {},
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({ ...state, ...action.payload.user }),
  },
});
// Extract the action creators object and the reducer
const { actions, reducer } = userSlice;
// Extract and export each action creator by name
export const { signIn, signInSuccess, signInError, signOut } = actions;
// Export the reducer, either as a default or named export
export default reducer;
