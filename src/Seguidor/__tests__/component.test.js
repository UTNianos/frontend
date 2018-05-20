import React from 'react';
import Enzyme,  { shallow, mount, render }  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Container from '../Container';

// Components.
import Seguidor from '../Seguidor';
import SeguidorHeading from '../SeguidorHeading';
import SeguidorView from '../SeguidorView';
import CarouselView from '../CarouselView/CarouselView';
import TreeView from '../TreeView/TreeView';
import FinalesPendientes from '../FinalesPendientes/FinalesPendientes';
import LoadingIndicator from '../../Fetching/FetchingIndicator';

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
	onLoad: jest.fn(),
	updateEstado: jest.fn(),
  materias: materiasResult,
	correlativas: correlativas,
	estados: estadosRespuesta,
	isFetching: false,
	error: false
}

const props2 = {
  loadEstado: jest.fn(),
  loadMaterias: jest.fn(),
  loadCorrelativas: jest.fn(),
  updateEstadoMateria: jest.fn(),
	onLoad: jest.fn(),
	updateEstado: jest.fn(),
  materias: [],
	correlativas: [],
	estados: [],
	isFetching: true,
	error: false
}

const store = mockStore({seguidor: props});

function setupSeguidorContainer(props) {

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

function setupSeguidor(props) {
  const enzymeWrapper = mount(
  <Provider store={store}>
    <Seguidor {...props} />
  </Provider>
  );

  return {
    props,
    enzymeWrapper
  }
}

function setupSeguidorView(view){
	const enzymeWrapper = mount(
		<SeguidorView
			 materias={props.materias}
			 updateEstado={jest.fn()}
			 view={view}
		/>
	);

  return  enzymeWrapper  ;
}

describe('<Seguidor /> ', () => {

    it('Rendererear container con datos.', () => {
      const { enzymeWrapper } = setupSeguidorContainer(props);
			const wrappedComponent = enzymeWrapper.find(".Seguidor");
      /*const componentContainer = enzymeWrapper.find('.PlayerFinderContainer');
      const heading = enzymeWrapper.find('.PlayerFinderHeading');
      const controls = enzymeWrapper.find('.PlayerFinderControls');
      const table =  enzymeWrapper.find('.PlayerFinderTable');

      expect(componentContainer.contains(PositionSelect));
      expect(componentContainer.contains(PlayerSearch));
      expect(componentContainer.contains(PlayersTable));
      */
      expect(wrappedComponent).toBeTruthy();
      //expect(controls.length).toBe(1);
      //expect(table.length).toBe(1);
    })

		it('Renderear component Seguidor con datos', () => {
			const { enzymeWrapper } = setupSeguidor(props);
			//const wrappedComponent = enzymeWrapper.find(".Seguidor");

			const heading = enzymeWrapper.find(SeguidorHeading);
			const view = enzymeWrapper.find(SeguidorView);
			const viewChooser = enzymeWrapper.find(".ViewChooserSelect");
			/*const componentContainer = enzymeWrapper.find('.PlayerFinderContainer');
			const heading = enzymeWrapper.find('.PlayerFinderHeading');
			const controls = enzymeWrapper.find('.PlayerFinderControls');
			const table =  enzymeWrapper.find('.PlayerFinderTable');

			expect(componentContainer.contains(PositionSelect));
			expect(componentContainer.contains(PlayerSearch));
			expect(componentContainer.contains(PlayersTable));
			*/
			expect(enzymeWrapper.contains(SeguidorHeading));
			expect(enzymeWrapper.contains(SeguidorView));
			//expect(wrappedComponent).toBeTruthy();
			//expect(controls.length).toBe(1);
			//expect(table.length).toBe(1);
		})

    it('Render con indicador de carga.', () => {
      const { enzymeWrapper } = setupSeguidor(props2)
      expect(enzymeWrapper.contains(LoadingIndicator));
    })

		it('Renderear SeguidorView para distintas vistas.', () => {

			const enzymeWrapperTreeView = setupSeguidorView('tree');
			const enzymeWrapperCarouselView = setupSeguidorView('carousel');
			const enzymeWrapperFinalesView = setupSeguidorView('finales');

			expect(enzymeWrapperTreeView.contains(TreeView));
			expect(enzymeWrapperCarouselView.contains(CarouselView));
			expect(enzymeWrapperFinalesView.contains(FinalesPendientes));
		})

  })
