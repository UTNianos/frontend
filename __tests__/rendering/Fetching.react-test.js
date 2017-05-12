'use strict';

import React from 'react';
import Fetching from '../../src/Fetching/FetchingIndicator.jsx';
import renderer from 'react-test-renderer';
 
describe('<Fetching />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Fetching />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});

