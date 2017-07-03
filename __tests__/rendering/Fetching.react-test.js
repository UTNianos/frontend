'use strict';

import React from 'react';
import Fetching from '../../src/Fetching/FetchingIndicator.jsx';
import renderer from 'react-test-renderer';
 

jest.mock('react-dom');
jest.mock('antd');
 
describe('<Fetching />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Fetching />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});

