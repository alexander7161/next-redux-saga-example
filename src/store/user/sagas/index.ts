import { fork } from "redux-saga/effects";
import userSigninSagas from "./signIn";
import userSignOutSagas from "./signOut";

export default function* root() {
  yield fork(userSigninSagas);
  yield fork(userSignOutSagas);
}
