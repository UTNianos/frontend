import { takeEvery } from 'redux-saga/effects';

import {
  REQUEST_MATERIAS,
  REQUEST_ESTADO,
  REQUEST_CORRELATIVAS,
  UPDATE_ESTADO,
  loadEstado,
  loadMaterias,
  loadCorrelativas,
  updateEstadoMateria
} from '../Seguidor/Actions';

export default function * rootSaga() {
  yield takeEvery(REQUEST_MATERIAS, loadMaterias);
  yield takeEvery(REQUEST_ESTADO, loadEstado);
  yield takeEvery(REQUEST_CORRELATIVAS, loadCorrelativas);
  yield takeEvery(UPDATE_ESTADO, updateEstadoMateria)
 }
