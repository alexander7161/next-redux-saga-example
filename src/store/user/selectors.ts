import { AppState } from "..";

export const loginErrorSelector = (state: AppState) => state.user.error;
