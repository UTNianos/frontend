/**
 * Created by javier on 6/19/16.
 */
import {
  RECEIVE_CARRERAS,
  REQUEST_CARRERAS
} from './actions';

const initialProgramaState = {
  plan: {},
  materias: {},
  correlativas: {}
};

export function programa(state = initialProgramaState, action) {

  // For now, don’t handle any actions
  // and just return the state given to us.
  return state
}


const initialAcademicaState = {
  ready: true,
  fetching: false,
  carreras: {},
  planes: {}
};

export function academica(state = initialAcademicaState, action) {
  switch (action.type) {
    case REQUEST_CARRERAS:
      return {...state, ready:false, fetching:true};
    case RECEIVE_CARRERAS:
      return {...state, ready:true, fetching:false, carreras:action.data};
    default:
      return state;
  }
}