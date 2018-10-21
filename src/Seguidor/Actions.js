import { put } from 'redux-saga/effects';

import estadosData from './data/estados.json';
import materiasData from './data/materias.json';
import correlativasData from './data/correlativas.json';

export const REQUEST_MATERIAS = 'REQUEST_MATERIAS';
export const RECEIVE_MATERIAS = 'RECEIVE_MATERIAS';
export const RECEIVE_MATERIAS_FAILURE = 'RECEIVE_MATERIAS_FAILURE';

export const REQUEST_ESTADO = 'REQUEST_ESTADO';
export const RECEIVE_ESTADO = 'RECEIVE_ESTADO';
export const REQUEST_ESTADO_FAILURE = 'REQUEST_ESTADO_FAILURE';

export const REQUEST_CORRELATIVAS = 'REQUEST_CORRELATIVAS';
export const RECEIVE_CORRELATIVAS = 'RECEIVE_CORRELATIVAS';
export const RECEIVE_CORRELATIVAS_FAILURE = 'RECEIVE_CORRELATIVAS_FAILURE';

export const UPDATE_ESTADO = 'UPDATE_ESTADO';
export const UPDATE_ESTADO_OK = 'UPDATE_ESTADO_OK';
export const UPDATE_ESTADO_FAILURE = 'UPDATE_ESTADO_FAILURE';

export function* loadEstado(action) {
  try{
    yield put({type: RECEIVE_ESTADO, data: estadosData});
  }
  catch(error) {
    yield put({type: REQUEST_ESTADO_FAILURE })
  }
}

export function* loadMaterias(action) {
  try{
    yield put({type: RECEIVE_MATERIAS, data: materiasData});
  }
  catch(error) {
    yield put({type: RECEIVE_MATERIAS_FAILURE })
  }
}

export function* loadCorrelativas(action) {
  try{
    yield put({type: RECEIVE_CORRELATIVAS, data: correlativasData});
  }
  catch(error) {
    yield put({type: RECEIVE_CORRELATIVAS_FAILURE })
  }
}

export function* updateEstadoMateria(action) {
  try{
    const newStatus = parseInt(action.materiaEstado.status, 10);
    const newEstado = { id: action.materiaEstado.id, status: newStatus };

    yield put({type: UPDATE_ESTADO_OK, data: newEstado});
  }
  catch(error) {
    yield put({type: UPDATE_ESTADO_FAILURE, error: error})
  }
}
