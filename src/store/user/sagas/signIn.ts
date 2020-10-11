import { takeEvery, put, call } from "redux-saga/effects";
import { signIn, signInSuccess, signInError } from "..";
import Router from "next/router";

function* signInSaga({
  payload: { email, password },
}: ReturnType<typeof signIn>) {
  try {
    const response = yield fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = yield response.json();
    if (json.error) {
      yield put(signInError(json.error));
    } else {
      yield put(signInSuccess(json.token));
      document.cookie = `token=${json.token}; path=/`;
      yield call(Router.push, "/users");
    }
  } catch (error) {
    yield put(signInError(error));
  }
}

export default function* root() {
  yield takeEvery(signIn, signInSaga);
}
