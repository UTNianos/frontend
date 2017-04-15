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
  const endpoint = 'data/estados.json';

  return {
    types: [REQUEST_ESTADO, RECEIVE_ESTADO, REQUEST_ESTADO_FAILURE],
    shouldCallAPI: () => true,
    endpoint,
    callHeaders: { mode: 'cors', cache: 'default' },
    payload: null
  };
}

export function loadMaterias() {
  const endpoint = 'data/materias.json';

  return {
    types: [REQUEST_MATERIAS, RECEIVE_MATERIAS, RECEIVE_MATERIAS_FAILURE],
    shouldCallAPI: () => true,
    endpoint,
    callHeaders: { mode: 'cors', cache: 'default' },
    payload: null
  };
}

export function loadCorrelativas() {
  const endpoint = 'data/correlativas.json';

  return {
    types: [REQUEST_CORRELATIVAS, RECEIVE_CORRELATIVAS, RECEIVE_CORRELATIVAS_FAILURE],
    shouldCallAPI: () => true,
    endpoint,
    callHeaders: { mode: 'cors', cache: 'default' },
    payload: null
  };
}

// TODO: postear estado al servidor? O usar otra función?
export function updateEstadoMateria(estadoMateria) {
  return { data: estadoMateria, type: UPDATE_ESTADO_OK };

  // const endpoint = '<utnianosURL>/materias/update';
  //
  // return {
  //   types: [UPDATE_ESTADO, UPDATE_ESTADO_OK, UPDATE_ESTADO_FAILURE],
  //   shouldCallAPI: () => true,
  //   endpoint,
  //   callHeaders: { mode: 'cors', cache: 'default' },
  //   payload: null
  // };
}
