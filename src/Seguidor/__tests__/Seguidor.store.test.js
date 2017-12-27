/* import {
  REQUEST_MATERIAS,
  RECEIVE_MATERIAS,
  RECEIVE_MATERIAS_FAILURE,
  REQUEST_ESTADO,
  RECEIVE_ESTADO,
  REQUEST_ESTADO_FAILURE,
  REQUEST_CORRELATIVAS,
  RECEIVE_CORRELATIVAS,
  RECEIVE_CORRELATIVAS_FAILURE,
  UPDATE_ESTADO,
  UPDATE_ESTADO_OK,
  UPDATE_ESTADO_FAILURE
} from '../Actions'; */

import reducer from '../../store/Reducers/Seguidor';

describe('Reducer Seguidor', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      materias: [],
      correlativas: [],
      estados: [],
      isFetching: false,
      error: false
    })
  })

  /*
  it('should handle ADD_TODO', () => {
    expect(
      reducer([], {
        type: types.ADD_TODO,
        text: 'Run the tests'
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ])

    expect(
      reducer(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0
          }
        ],
        {
          type: types.ADD_TODO,
          text: 'Run the tests'
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  }) */
})

