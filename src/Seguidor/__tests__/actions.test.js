import expect from 'expect'; // You can use any testing library
import { put } from 'redux-saga/effects';
import {
  UPDATE_ESTADO,
  UPDATE_ESTADO_OK,
  UPDATE_ESTADO_FAILURE,
  REQUEST_MATERIAS,
  RECEIVE_MATERIAS,
  RECEIVE_MATERIAS_FAILURE,
  REQUEST_CORRELATIVAS,
  RECEIVE_CORRELATIVAS,
  RECEIVE_CORRELATIVAS_FAILURE,
  REQUEST_ESTADO,
  RECEIVE_ESTADO,
  REQUEST_ESTADO_FAILURE,
  updateEstadoMateria,
  loadEstado
} from '../Actions';

import estadosData from '../data/estados.json';
import materiasData from '../data/materias.json';
import correlativasData from '../data/correlativas.json';

describe('Acciones del seguidor', () => {

  it('Obtiene estado inicial de las materias', () => {

    const newStatus = {
      id: 1,
      status: 1
    };

    const updateAction = {
      type: 'UPDATE_ESTADO',
      materiaEstado: {
        id: 1,
        status: 1
      }
    };

   const updateEstadoGen = updateEstadoMateria(updateAction);
   const nextVal = updateEstadoGen.next().value;
   const expectedStatus = put({type: UPDATE_ESTADO_OK, data: newStatus});

   expect(nextVal).toEqual(expectedStatus);

/* export function* updateEstadoMateria(action) {
  try{
    const newStatus = parseInt(action.materiaEstado.status, 10);
    const newEstado = { id: action.materiaEstado.id, status: newStatus };

    yield put({type: UPDATE_ESTADO_OK, data: newEstado});
  }
  catch(error) {
    yield put({type: UPDATE_ESTADO_FAILURE, error: error})
  }
}*/


  })

  /*
  it('Actualizar estado del seguidor', () => {

    const newEstado = { id: 416, status: 3 };
    const expectedAction = { type: UPDATE_ESTADO_OK, data: newEstado };
    const estadoParams = { id: 416, status: '3' };

    expect(updateEstadoMateria(estadoParams)).toEqual(expectedAction);
  });*/

})
