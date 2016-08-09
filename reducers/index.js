import { combineReducers } from 'redux';
//import navbarReducer from './navbarReducer';
//import utnianosReducer from './utnianosReducer';

/*
 * TODO: reducers vacíos para poder compilar la aplicación básica.
 * Completarlos se deja como ejercicio al coder que venga despues mío.
 */

function utnianosReducer(state = {}, action) {
  return state
}

function navbarReducer(state = {}, action) { 
  return state
}


const rootReducer = combineReducers({
  navbarReducer,
  utnianosReducer
});

export default rootReducer;