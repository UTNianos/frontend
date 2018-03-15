import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store' // ES6 modules
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Home';

const middlewares = []
const mockStore = configureStore(middlewares)

jest.mock('react-dom');
jest.mock('antd');

describe('<App />', () => {

  it('Render main app.', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const tree = renderer.create(<Provider store={store}><App /></Provider>).toJSON();

    expect(tree).toMatchSnapshot();
  })

  it('<Home />', () => {
    const home = renderer.create(<MemoryRouter><Home /></MemoryRouter>).toJSON();
    expect(home).toMatchSnapshot();
  })

});
