import {
  REQUEST_MATERIAS,
  RECEIVE_MATERIAS,
  RECEIVE_MATERIAS_FAILURE,
  REQUEST_ESTADO,
  RECEIVE_ESTADO,
  REQUEST_ESTADO_FAILURE,
  REQUEST_CORRELATIVAS,
  RECEIVE_CORRELATIVAS,
  RECEIVE_CORRELATIVAS_FAILURE,
  UPDATE_ESTADO_MATERIA
} from '../Actions';

import reducer from '../../store/Reducers/Seguidor';

describe('Seguidor > Store', () => {

  const estadoInicial = {
    materias: [],
    correlativas: [],
    estados: [],
    isFetching: false,
    error: false
  };

  const materias = [{
    a: '0',
    e: '0',
    x: '1',
    v: [
      {
        t: 'Materia 1',
        v: '416'
      },
      {
        t: 'Materia 2',
        v: '415'
      }
    ]
  }
  ];

  const materiasResult = [{ cursada: false, final: false, id: '416', name: 'Materia 1', status: 1, year: '0' }, { cursada: false, final: false, id: '415', name: 'Materia 2', status: 1, year: '0' }];

  const estadosRespuesta = [{
    id: 416,
    status: 2
  },
  {
    id: 415,
    status: 3
  }
  ];

  const estadosUpdated = [{
    id: 416,
    status: 4
  },
  {
    id: 415,
    status: 3
  }
  ];

  const correlativas = [{
    m: 1,
    d: {
      rCC: ['1', '2'],
      rFF: ['1', '2'],
      hCC: ['15', '71', '17', '72', '75', '20', '21', '22', '23', '24', '25', '26', '33'],
      hFF: ['15', '71', '17', '72', '75', '20', '21', '22', '23', '24', '25', '26', '33'],
      hFC: ['27', '73', '446', '447']
    }
  }];


  it('Retornar el estado inicial del reducer del seguidor.', () => {
    expect(reducer(undefined, {})).toEqual(estadoInicial)
  })

  it('Obtención de materias', () => {
    // Pedir materias
    expect(reducer(estadoInicial, { type: REQUEST_MATERIAS }))
      .toEqual({
        materias: [],
        correlativas: [],
        estados: [],
        isFetching: true,
        error: false
      });

    // Fallo al recibir materias
    expect(reducer({
      materias: [],
      correlativas: [],
      estados: [],
      isFetching: true,
      error: false
    }, { type: RECEIVE_MATERIAS_FAILURE }))
      .toEqual({
        materias: [],
        correlativas: [],
        estados: [],
        isFetching: false,
        error: true
      });

    // Recibio materias exitosamente.
    expect(reducer({
      materias: [],
      correlativas: [],
      estados: [],
      isFetching: true,
      error: false
    }, { type: RECEIVE_MATERIAS, data: materias }))
      .toEqual({
        materias: materiasResult,
        correlativas: [],
        estados: [],
        isFetching: false,
        error: false
      });
  })

  it('Obtención de correlativas', () => {

    // Pedir correlativas
    expect(reducer(estadoInicial, { type: REQUEST_CORRELATIVAS }))
      .toEqual({
        materias: [],
        correlativas: [],
        estados: [],
        isFetching: true,
        error: false
      });

    // Fallo al recibir correlativas
    expect(reducer({
      materias: [],
      correlativas: [],
      estados: [],
      isFetching: true,
      error: false
    }, { type: RECEIVE_CORRELATIVAS_FAILURE }))
      .toEqual({
        materias: [],
        correlativas: [],
        estados: [],
        isFetching: false,
        error: true
      });

    // Recibio correlativas exitosamente.
    expect(reducer({
      materias: [],
      correlativas: [],
      estados: [],
      isFetching: true,
      error: false
    }, { type: RECEIVE_CORRELATIVAS, data: correlativas }))
      .toEqual({
        materias: [],
        correlativas,
        estados: [],
        isFetching: false,
        error: false
      });

  })

  it('Obtención de estados', () => {

    // Pedir materias
    expect(reducer(estadoInicial, { type: REQUEST_ESTADO }))
      .toEqual({
        materias: [],
        correlativas: [],
        estados: [],
        isFetching: true,
        error: false
      });

    // Fallo al recibir estados
    expect(reducer({
      materias: [],
      correlativas: [],
      estados: [],
      isFetching: true,
      error: false
    }, { type: REQUEST_ESTADO_FAILURE }))
      .toEqual({
        materias: [],
        correlativas: [],
        estados: [],
        isFetching: false,
        error: true
      });

    // Recibio estados exitosamente.
    expect(reducer({
      materias: [],
      correlativas: [],
      estados: [],
      isFetching: true,
      error: false
    }, { type: RECEIVE_ESTADO, data: estadosRespuesta }))
      .toEqual({
        materias: [],
        correlativas: [],
        estados: estadosRespuesta,
        isFetching: false,
        error: false
      });

  })


  it('Actualizar estado de una materia', () => {
    // Recibio estados exitosamente.
    expect(reducer({
      materias: [],
      correlativas: [],
      estados: estadosRespuesta,
      isFetching: false,
      error: false
    }, { type: UPDATE_ESTADO_MATERIA, materiaEstado: { id: 416, status: 4 } }))
      .toEqual({
        materias: [],
        correlativas: [],
        estados: estadosUpdated,
        isFetching: false,
        error: false
      });

  })


})
