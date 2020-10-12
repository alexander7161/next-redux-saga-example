import { combineReducers } from "@reduxjs/toolkit";

import UserReducer from "./user";
import UserListReducer from "./userList";

const reducers = combineReducers({
  user: UserReducer,
  userList: UserListReducer,
});

export default reducers;
