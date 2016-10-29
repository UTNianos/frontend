import {
  RECEIVE_CARRERAS,
  REQUEST_CARRERAS
} from '../Seguidor/actions';

const initialState = {
  ready: true,
  fetching: false,
  carreras: {},
  planes: {}
};

export function academica(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CARRERAS:
      return {...state, ready:false, fetching:true};
    case RECEIVE_CARRERAS:
      return {...state, ready:true, fetching:false, carreras:action.data};
    default:
      return state;
  }
}

export default academica;
