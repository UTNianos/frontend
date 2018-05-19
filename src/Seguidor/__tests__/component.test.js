import React from 'react';
import Enzyme,  { shallow, mount, render }  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
//import Seguidor from '../Seguidor';
import { Provider } from 'react-redux';
import Container from '../Container';
//import PlayersTable from '../PlayersTable';
//import PlayerSearch from '../PlayerSearch';
//import PositionSelect from '../PositionSelect';
//import LoadingIndicator from '../LoadingIndicator';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const materiasResult = [{
			cursada: false,
			final: false,
			id: '416',
			name: 'Materia 1',
			status: 1,
			year: '0'
		},
		{
			cursada: false,
			final: false,
			id: '415',
			name: 'Materia 2',
			status: 1,
			year: '0'
}];

const correlativas = [{
	m: 416,
	d: {
		rCC: ['415'],
		rFF: ['415'],
		hCC: ['15', '71'],
		hFF: ['15', '71'],
		hFC: ['27', '73']
	}
}];

const estadosRespuesta = [{id: 416, status: 2 }, { id: 415, status: 1 }];

const props = {
  loadEstado: jest.fn(),
  loadMaterias: jest.fn(),
  loadCorrelativas: jest.fn(),
  updateEstadoMateria: jest.fn(),
  materias: materiasResult,
	correlativas: correlativas,
	estados: estadosRespuesta,
	isFetching: false,
	error: false
}

const store = mockStore({seguidor: props});

function setupSeguidor(props) {

  const enzymeWrapper = render(
  <Provider store={store}>
    <Container />
  </Provider>
  );

  return {
    props,
    enzymeWrapper
  }
}

describe('<Seguidor /> ', () => {

    it('Rendererear con datos.', () => {
      const { enzymeWrapper } = setupSeguidor(props)
      const componentContainer = enzymeWrapper.find('.PlayerFinderContainer');
      /*const heading = enzymeWrapper.find('.PlayerFinderHeading');
      const controls = enzymeWrapper.find('.PlayerFinderControls');
      const table =  enzymeWrapper.find('.PlayerFinderTable');

      expect(componentContainer.contains(PositionSelect));
      expect(componentContainer.contains(PlayerSearch));
      expect(componentContainer.contains(PlayersTable));
      */
      expect(componentContainer).toBeTruthy();
      //expect(controls.length).toBe(1);
      //expect(table.length).toBe(1);
    })

    /*
    it('Render con indicador de carga.', () => {
      const { enzymeWrapper } = setupPlayerFinder(props2)
      const componentContainer = enzymeWrapper.find('.PlayerFinderContainer');
      expect(componentContainer.contains(LoadingIndicator));
    })*/

  })
