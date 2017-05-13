import Fetch from '../store/Fetch';

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

export function loadEstado() {

  const endpoint = '/data/estados.json';
  const types =  [REQUEST_ESTADO, RECEIVE_ESTADO, REQUEST_ESTADO_FAILURE];

  return (dispatch, getState) => {
    dispatch(Fetch.GET(endpoint, types));
  }

}

export function loadMaterias() {

 const endpoint = '/data/materias.json';
 const types =  [REQUEST_MATERIAS, RECEIVE_MATERIAS, RECEIVE_MATERIAS_FAILURE];

 return (dispatch, getState) => {
    return dispatch(Fetch.GET(endpoint, types));
 }

}

export function loadCorrelativas() {

  const endpoint = '/data/correlativas.json';
  const types = [REQUEST_CORRELATIVAS, RECEIVE_CORRELATIVAS, RECEIVE_CORRELATIVAS_FAILURE];

  return (dispatch, getState) => {
    return  dispatch(Fetch.GET(endpoint, types));
  }

}

export function updateEstadoMateria(estadoMateria) {
  const newStatus = parseInt(estadoMateria.status, 10);
  const newEstado = { id: estadoMateria.id, status: newStatus };
  return { data: newEstado, type: UPDATE_ESTADO_OK };
}
