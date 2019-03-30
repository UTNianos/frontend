import
{
  REQUEST_MATERIAS,
  RECEIVE_MATERIAS,
  RECEIVE_MATERIAS_FAILURE,
  REQUEST_CORRELATIVAS,
  RECEIVE_CORRELATIVAS,
  RECEIVE_CORRELATIVAS_FAILURE,
  REQUEST_ESTADO,
  RECEIVE_ESTADO,
  REQUEST_ESTADO_FAILURE,
  UPDATE_ESTADO_MATERIA
} from '../../Seguidor/Actions';

import flattenSubjects, { getNuevoEstadoArray } from './MapSubjects';

const initialState = {
  materias: [],
  correlativas: [],
  estados: [],
  isFetching: false,
  error: false
};

function seguidor(state = initialState, action) {
  switch (action.type) {

    /* PEDIR MATERIAS */
    case REQUEST_MATERIAS:
      return { ...state, isFetching: true };
    case RECEIVE_MATERIAS:
      return { ...state, isFetching: false, materias: flattenSubjects(action.data) };
    case RECEIVE_MATERIAS_FAILURE:
      return { ...state, isFetching: false, error: true };

    /* PEDIR CORRELATIVAS */
    case REQUEST_CORRELATIVAS:
      return { ...state, isFetching: true };
    case RECEIVE_CORRELATIVAS:
      return { ...state, isFetching: false, correlativas: action.data };
    case RECEIVE_CORRELATIVAS_FAILURE:
      return { ...state, isFetching: false, error: true };

    /* PEDIR ESTADO DE MATERIAS */
    case REQUEST_ESTADO:
      return { ...state, isFetching: true };
    case RECEIVE_ESTADO:
      return { ...state, isFetching: false, estados: action.data };
    case REQUEST_ESTADO_FAILURE:
      return { ...state, isFetching: false, error: true };

    /* ACTUALIZAR ESTADO */
    case UPDATE_ESTADO_MATERIA:
      const newStatus = parseInt(action.materiaEstado.status, 10);
      const newEstado = { id: action.materiaEstado.id, status: newStatus };
      const estadosNuevos = getNuevoEstadoArray(newEstado, state.estados);
      return { ...state, estados: estadosNuevos };

    default:
      return state;
  }
}

export default seguidor;
