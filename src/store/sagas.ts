import { fork } from "redux-saga/effects";
import UserSagas from "./user/sagas";

const sagas = function* () {
  yield fork(UserSagas);
};

export default sagas;
