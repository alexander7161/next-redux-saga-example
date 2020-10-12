import { put, takeEvery } from "redux-saga/effects";
import { fetchUserList, setUserList } from "..";

function* fetchUserListSaga({ payload }: ReturnType<typeof fetchUserList>) {
  const index = payload ?? 0;
  try {
    const response = yield fetch(`https://reqres.in/api/users?page=${index}`);
    const json = yield response.json();
    yield put(setUserList(json.data));
  } catch (error) {
    console.log(error);
  }
}

export default function* root() {
  yield takeEvery(fetchUserList, fetchUserListSaga);
}
