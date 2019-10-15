import { takeEvery, call, put } from "redux-saga/effects";
import authActions, { Types } from "store/Reducers/auth";
import { authenticate, fetchUserData } from "api/auth";

function* login({ username, password }) {
  const token = yield call(authenticate, username, password);
  yield localStorage.setItem("token", token);
  const userData = yield call(fetchUserData);
  yield put(authActions.loginSuccess({ username }));
}

export default function* authSaga() {
  yield takeEvery(Types.LOGIN_REQUEST, login);
}
