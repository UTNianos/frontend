import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar';
import LoginMenu from '../LoginMenu/LoginMenu';

jest.mock('react-dom');
jest.mock('antd');

describe('<Navbar />', () => {
  it('Render correcto.', () => {
    const tree = renderer.create(<Navbar userLoggedIn={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});

describe('<LoginMenu />', () => {
  it('Render correcto.', () => {
    const tree = renderer.create(<MemoryRouter><LoginMenu /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
