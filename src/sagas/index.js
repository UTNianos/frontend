import { all, takeEvery } from "redux-saga/effects";

import authSaga from "sagas/user/";
import {
  REQUEST_MATERIAS,
  REQUEST_ESTADO,
  REQUEST_CORRELATIVAS,
  loadEstado,
  loadMaterias,
  loadCorrelativas
} from "../Seguidor/Actions";

function* seguidorSaga() {
  yield takeEvery(REQUEST_MATERIAS, loadMaterias);
  yield takeEvery(REQUEST_ESTADO, loadEstado);
  yield takeEvery(REQUEST_CORRELATIVAS, loadCorrelativas);
}
export default function* rootSaga() {
  yield all([seguidorSaga(), authSaga()]);
}
