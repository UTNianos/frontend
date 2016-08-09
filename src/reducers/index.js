/**
 * Created by rulo on 9/08/16.
 */
import { combineReducers } from 'redux';
import academica from './academicaReducer';
import programa from './programaReducer';

const rootReducer = combineReducers({
  academica,
  programa
});

export default rootReducer;