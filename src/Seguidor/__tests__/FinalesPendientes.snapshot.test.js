import React from 'react';
import renderer from 'react-test-renderer';
import FinalesPendientes from '../FinalesPendientes/FinalesPendientes';


describe('<FinalesPendientes />', () => {

  const updateEstado = jest.fn();

  it('Sin materias.', () => {

    const tree = renderer.create(<FinalesPendientes materias={[]} updateEstado={updateEstado} />).toJSON();

    expect(tree).toMatchSnapshot();
  })

  it('Con materias.', () => {

    const materias = [{ cursada: false, final: true, id: '416', name: 'Materia 1', status: 3, year: '0' }, { cursada: false, final: true, id: '415', name: 'Materia 2', status: 3, year: '0' }];
    const tree = renderer.create(<FinalesPendientes materias={materias} updateEstado={updateEstado} />).toJSON();

    expect(tree).toMatchSnapshot();
  })

})
