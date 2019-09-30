import { combineReducers } from 'redux';
import seguidor from './Reducers/Seguidor';
import { reducer as auth } from './Reducers/auth';

const rootReducer = combineReducers({ seguidor, auth });

export default rootReducer;
