import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store' // ES6 modules
import { Provider } from 'react-redux';
import Seguidor from '../Seguidor';

const middlewares = []
const mockStore = configureStore(middlewares)

jest.mock('react-dom');
jest.mock('antd');

describe('<Seguidor />', () => {

  it('Renders correctly', () => {

    const materias = [{ cursada: false, final: false, id: '416', name: 'Materia 1', status: 1, year: '0' }, { cursada: false, final: false, id: '415', name: 'Materia 2', status: 1, year: '0' }];

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

    const estados = [{
      id: 416,
      status: 2
    },
    {
      id: 415,
      status: 3
    }
    ];

    const seguidorState = {
      materias,
      correlativas,
      estados,
      isFetching: false,
      error: false
    };

    const onLoadFn = jest.fn();
    const updateEstadoFn = jest.fn();

    const initialState = { seguidor: seguidorState };
    const store = mockStore(initialState);

    const SeguidorElement = () => (
      <Provider store={store} >
        <Seguidor
          onLoad={onLoadFn}
          updateEstado={updateEstadoFn}
          materias={materias}
          estados={estados}
          correlativas={correlativas}
        />
      </Provider>
    );

    const tree = renderer.create(<SeguidorElement />).toJSON();

    expect(tree).toMatchSnapshot();

  })

});
