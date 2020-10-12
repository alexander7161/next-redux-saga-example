import { fork } from "redux-saga/effects";
import UserSagas from "./user/sagas";
import UserListSagas from "./userList/sagas";

const sagas = function* () {
  yield fork(UserSagas);
  yield fork(UserListSagas);
};

export default sagas;
