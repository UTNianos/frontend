import { takeEvery, call, put } from "redux-saga/effects";
import authActions, { Types } from "store/Reducers/user";
import { setToken } from "api";
import { authenticate, fetchUserData } from "api/user";

export function* login({ username, password }) {
  const token = yield call(authenticate, username, password);
  yield localStorage.setItem("token", token);
  yield call(setToken, token);
  const userData = yield call(fetchUserData);
  yield put(authActions.loginSuccess({ username, userData }));
}

export default function* authSaga() {
  yield takeEvery(Types.LOGIN_REQUEST, login);
}
