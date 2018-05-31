import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Container from '../Container';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const estadoInicial = {
  materias: [],
  correlativas: [],
  estados: [],
  isFetching: false,
  error: false
};

const materiasResult = [{ cursada: false, final: false, id: '416', name: 'Materia 1', status: 1, year: '0' }, { cursada: false, final: false, id: '415', name: 'Materia 2', status: 1, year: '0' }];
const estados = [{ id: 416, status: 2 }, { id: 415, status: 3 }];
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

const estadoConDatos = {
  materias: materiasResult,
  correlativas,
  estados,
  isFetching: false,
  error: false
};

const ComponentWithStore = ({ component, store }) => (
  <Provider store={store}>
    {component}
  </Provider>
);

describe('<Seguidor /> Container', () => {

  it('Render container with initial state.', () => {
    const store = mockStore(estadoInicial);
    const component = <ComponentWithStore component={Container} store={store} />;
    expect(component).toBeTruthy();
  })

  it('Renderear container con datos precargados.', () => {
    const store = mockStore(estadoConDatos);
    const component = <ComponentWithStore component={Container} store={store} />;
    expect(component).toBeTruthy();
  })

})
