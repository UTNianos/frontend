import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../Navbar';

jest.mock('react-dom');
jest.mock('antd');

describe('<Navbar />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Navbar userLoggedIn={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
