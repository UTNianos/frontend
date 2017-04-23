'use strict';

import React from 'react';
import Fetching from '../src/Fetching/FetchingIndicator';
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
  const tree = renderer.create(<Fetching />).toJSON();
  expect(tree).toMatchSnapshot();
});


