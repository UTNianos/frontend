import React from 'react';
import Enzyme, { mount, render } from 'enzyme';
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

// Subject.
import Subject from '../Subject/Subject';
import StatusDropdown from '../Subject/StatusDropdown';
import SubjectBadge from '../Subject/SubjectBadge';

// Componente año de estudio.
import YearOfStudy from '../YearOfStudy/YearOfStudy';
import SubjectYearsCarousel from '../CarouselView/SubjectYears';
import getYearsArray from '../CarouselView/Carousel/getYearsArray';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('antd');

const materiasResult = [{
  cursada: false,
  final: false,
  id: '416',
  name: 'Materia 1',
  status: 1,
  year: '1'
},
{
  cursada: false,
  final: false,
  id: '415',
  name: 'Materia 2',
  status: 1,
  year: '1'
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

const estadosRespuesta = [{ id: 416, status: 2 }, { id: 415, status: 1 }];

const props = {
  loadEstado: jest.fn(),
  loadMaterias: jest.fn(),
  loadCorrelativas: jest.fn(),
  updateEstadoMateria: jest.fn(),
  onLoad: jest.fn(),
  updateEstado: jest.fn(),
  materias: materiasResult,
  correlativas,
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

const store = mockStore({ seguidor: props });

function setupSeguidorContainer(propsSeguidor) {

  const wrapper = render(<Provider store={store}><Container /></Provider>);

  return {
    propsSeguidor,
    wrapper
  }
}

function setupSeguidor(propsSeguidor) {
  const wrapper = mount(<Provider store={store}><Seguidor {...propsSeguidor} /></Provider>);

  return {
    propsSeguidor,
    wrapper
  }
}

function setupSeguidorView(view) {
  const enzymeWrapper = mount(<SeguidorView
    materias={props.materias}
    updateEstado={jest.fn()}
    view={view}
  />);

  return enzymeWrapper;
}

describe('<Seguidor /> ', () => {

  it('Rendererear container con datos.', () => {
    const { enzymeWrapper } = setupSeguidorContainer(props);
    const wrappedComponent = enzymeWrapper.find('.Seguidor');

    expect(wrappedComponent).toBeTruthy();
  })

  it('Renderear component Seguidor con datos', () => {
    const { enzymeWrapper } = setupSeguidor(props);

    expect(enzymeWrapper.contains(SeguidorHeading));
    expect(enzymeWrapper.contains(SeguidorView));
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

  it('Renderear componente materia.', () => {

    const enzymeWrapperSubject = mount(<Subject
      subject={materiasResult[0]}
      updateEstado={jest.fn()}
    />);

    expect(enzymeWrapperSubject.contains(StatusDropdown));
    expect(enzymeWrapperSubject.contains(SubjectBadge));

    // Testear dropdown de estado.
    const enzymeWrapperStatus = mount(<StatusDropdown
      updateFn={jest.fn()}
      materiaId={materiasResult[0].id}
      status={materiasResult[0].status}
    />);

    expect(enzymeWrapperStatus).toBeTruthy();

    // Testear componente indicador de estado materia.
    const enzymeWrapperBadge = mount(<SubjectBadge
      name={materiasResult[0].name}
      status={materiasResult[0].status}
    />);

    expect(enzymeWrapperBadge).toBeTruthy();

    const yearsArray = getYearsArray(1, materiasResult);

    // Componente de vistas del carousel.
    const enzymeWrapperYearsCarousel = mount(<SubjectYearsCarousel
      years={yearsArray[0]}
      updateFn={jest.fn()}
    />);

    const yearsVisualizer = enzymeWrapperYearsCarousel.find('.YearsVisualizer');
    expect(yearsVisualizer.length).toBe(1);

    // YearOfStudy test.
    const yearOfStudy = yearsArray[0][0];
    const yearOfStudyWrapper = mount(<YearOfStudy
      subjects={yearOfStudy.subjects}
      year={yearOfStudy.year}
      updateEstado={jest.fn()}
    />);

    const yearOfStudyContainer = yearOfStudyWrapper.find('.Container');
    expect(yearOfStudyContainer.length).toBe(1);
    expect(yearOfStudyWrapper.contains(Subject));
  })

})
