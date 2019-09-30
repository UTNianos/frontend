import { takeEvery, call, put } from 'redux-saga/effects';
import authActions, { Types } from 'store/Reducers/auth'
import { authenticate } from 'api/auth'

function* login({ username, password }) {
  const token = yield call(authenticate, [username, password])
  yield put(authActions.loginSuccess({ username }, token))
}


export default function* authSaga() {
  yield takeEvery(Types.LOGIN_REQUEST, login);
}
