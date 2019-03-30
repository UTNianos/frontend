import expect from 'expect'; // You can use any testing library
import { put } from 'redux-saga/effects';
import {
  /* UPDATE_ESTADO,
  UPDATE_ESTADO_OK,
  UPDATE_ESTADO_FAILURE, */
  REQUEST_MATERIAS,
  RECEIVE_MATERIAS,
  /* RECEIVE_MATERIAS_FAILURE, */
  REQUEST_CORRELATIVAS,
  RECEIVE_CORRELATIVAS,
  /* RECEIVE_CORRELATIVAS_FAILURE, */
  REQUEST_ESTADO,
  RECEIVE_ESTADO,
  /* REQUEST_ESTADO_FAILURE, */
  loadEstado,
  loadMaterias,
  loadCorrelativas
} from '../Actions';

import estadosData from '../data/estados.json';
import materiasData from '../data/materias.json';
import correlativasData from '../data/correlativas.json';

describe('Acciones del seguidor', () => {

  it('Carga inicial de datos', () => {

    // Estado
    const loadEstadoGen = loadEstado({ type: REQUEST_ESTADO });
    const expectedEstadoData = loadEstadoGen.next().value;
    const expectedEstadoStatus = put({ type: RECEIVE_ESTADO, data: estadosData });

    // Materias
    const loadMateriasGen = loadMaterias({ type: REQUEST_MATERIAS });
    const expectedMateriasData = loadMateriasGen.next().value;
    const expectedMateriasStatus = put({ type: RECEIVE_MATERIAS, data: materiasData });

    // Correlativas
    const loadCorrelativasGen = loadCorrelativas({ type: REQUEST_CORRELATIVAS });
    const expectedCorrelativasData = loadCorrelativasGen.next().value;
    const expectedCorrelativasStatus = put({ type: RECEIVE_CORRELATIVAS, data: correlativasData });

    // Expect(s)
    expect(expectedEstadoData).toEqual(expectedEstadoStatus);
    expect(expectedMateriasData).toEqual(expectedMateriasStatus);
    expect(expectedCorrelativasData).toEqual(expectedCorrelativasStatus);

  })

})
