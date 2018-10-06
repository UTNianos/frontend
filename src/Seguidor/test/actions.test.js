import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect'; // You can use any testing library
import { put } from 'redux-saga/effects';

import {
 RECEIVE_ESTADO,
 RECEIVE_MATERIAS,
 RECEIVE_CORRELATIVAS,
 UPDATE_ESTADO_OK,
 loadEstado,
 loadMaterias,
 loadCorrelativas,
 updateEstadoMateria
} from '../Actions';

import estadosData from '../data/estados.json';
import materiasData from '../data/materias.json';
import correlativasData from '../data/correlativas.json';

const mockStore = configureMockStore();

describe('Acciones del seguidor', () => {

  /*
  it('Actualizar estado del seguidor', () => {

    const newEstado = { id: 416, status: 3 };
    const expectedAction = { type: UPDATE_ESTADO_OK, data: newEstado };
    const estadoParams = { id: 416, status: '3' };

    expect(updateEstadoMateria(estadoParams)).toEqual(expectedAction);
  });*/

  it('Obtener estados iniciales', () => {

    // Estados
    const expectedEstados = {type: RECEIVE_ESTADO, data: estadosData};
    const genEstados = loadEstado();
    const actualEstados = genEstados.next().value;

    expect(actualEstados).toEqual(put(expectedEstados));

    // Materias
    const expectedMaterias = {type: RECEIVE_MATERIAS, data: materiasData};
    const genMaterias = loadMaterias();
    const actualMaterias = genMaterias.next().value;

    expect(actualMaterias).toEqual(put(expectedMaterias));

    // Correlativas

    const expectedCorrelativas = {type: RECEIVE_CORRELATIVAS, data: correlativasData};
    const genCorrelativas = loadCorrelativas();
    const actualCorrelativas = genCorrelativas.next().value;

    expect(actualCorrelativas).toEqual(put(expectedCorrelativas));

  })


})
