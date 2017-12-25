import { combineReducers } from 'redux';
import seguidor from './Reducers/Seguidor';
import session from './Reducers/Sesion';

const rootReducer = combineReducers({
  seguidor,
  session
});

export default rootReducer;
