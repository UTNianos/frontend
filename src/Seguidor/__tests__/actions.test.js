import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect'; // You can use any testing library
import callApiMiddleware from '../../store/callApiMiddleware';

import {
  UPDATE_ESTADO,
  UPDATE_ESTADO_OK,
  UPDATE_ESTADO_FAILURE,
  REQUEST_ESTADO,
  RECEIVE_ESTADO,
  REQUEST_ESTADO_FAILURE,
  updateEstadoMateria,
  loadEstado
} from '../Actions';

import Fetch from '../../store/Fetch';
 
const middlewares = [thunk, callApiMiddleware];
const mockStore = configureMockStore(middlewares);
 
describe('Acciones del seguidor', () => {

  afterEach(() => {
    //fetchMock.reset();
    //fetchMock.restore();
  });

  it('Actualizar estado del seguidor', () => {

    const newEstado = { id: 416, status: 3 };

    const expectedAction = { type: UPDATE_ESTADO_OK, data: newEstado };

    const estadosRespuesta = [
      {
        id: 416,
        status: 2
      },
      {
       id: 415,
       status: 3
      }
    ];

    const estadoParams = {id: 416, status: "3"};
    const store = mockStore({ estados: estadosRespuesta });

    expect(updateEstadoMateria(estadoParams)).toEqual(expectedAction);

  });

  // TODO la función pasada por fetchmock no devuelve nada.
  it('Obtener estado inicial del seguidor', () => {

    const expectedActions = [
      { type: REQUEST_ESTADO },
      { type: RECEIVE_ESTADO, data: [{id: 416,status: 2}, { id: 415, status: 3 }]}
    ];

    const store = mockStore({ estados: [] });
    const respuesta = {
       body: { data: "[{id: 416,status: 2}, { id: 415, status: 3 }]" },
       headers: { 'content-type': 'application/json' },
       status: 200,
     };

     fetchMock.getOnce('http://localhost/data/estados.json', respuesta, 200)
              .catch(response =>{ console.log(response)});

    return store.dispatch(loadEstado()).then(() => {
      console.log(store.getActions());
      //expect(store.getActions()).toEqual(expectedActions)
    });

  });

})
