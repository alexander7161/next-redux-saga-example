import { combineReducers } from "@reduxjs/toolkit";

import UserReducer from "./user";

const reducers = combineReducers({
  user: UserReducer,
});

export default reducers;
