import { takeEvery } from "redux-saga/effects";
import { signOut } from "..";
import Router from "next/router";

function* signOutSaga() {
  console.log("test");
  document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
  yield Router.push("/");
}

export default function* root() {
  yield takeEvery(signOut, signOutSaga);
}
