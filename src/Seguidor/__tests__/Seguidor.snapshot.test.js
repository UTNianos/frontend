import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store' // ES6 modules
import { Provider } from 'react-redux';
import Seguidor from '../Seguidor';
import CarouselView from '../CarouselView/CarouselView';
import Carousel from '../CarouselView/Carousel/Carousel';
import Subject from '../Subject/Subject';

const middlewares = []
const mockStore = configureStore(middlewares)

jest.mock('react-dom');
jest.mock('antd');

// Setup
const materias = [{ cursada: false, final: false, id: '416', name: 'Materia 1', status: 1, year: '0' }, { cursada: false, final: false, id: '415', name: 'Materia 2', status: 1, year: '0' }];
const materias2 = [{ cursada: false, final: false, id: '1', name: 'Materia 1', status: 1, year: '1' }, { cursada: true, final: false, id: '2', name: 'Materia 2', status: 1, year: '1' }];

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


describe('<Seguidor />', () => {

  it('Render inicial correcto.', () => {

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
  });

  it('Cambiar de vista', () => {

    const seguidorClass = new Seguidor({
      onLoad: onLoadFn,
      updateEstado: updateEstadoFn,
      materias: materias,
      estados: estados,
      correlativas: correlativas
    });

    seguidorClass.changeViewType('tree');
    seguidorClass.changeViewType('finales');
  });

  it('Vista de carousel renderea correctamente.', () => {
     const carouselViewTree = renderer.create(<CarouselView materias={materias} updateEstado={jest.fn()} />).toJSON();
     expect(carouselViewTree).toMatchSnapshot();

     const params = {
       materias: materias2,
       yearsPerTab: 1,
       updateFn: jest.fn()
     };

     const carouselClass = new Carousel(params);
     carouselClass.nextTab();
     carouselClass.prevTab();
     carouselClass.render();
  });


  it('Materia renderea correctamente.', () => {

    const subjectTree = renderer.create(<Subject subject={materias2[0]} updateEstado={jest.fn()} />).toJSON();
    expect(subjectTree).toMatchSnapshot();

    const subjectTree2 = renderer.create(<Subject subject={materias2[1]} updateEstado={jest.fn()} />).toJSON();
    expect(subjectTree2).toMatchSnapshot();
  });

});
