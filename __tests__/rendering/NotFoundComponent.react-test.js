'use strict';

import React from 'react';
import NotFound from '../../src/Errors/NotFound.jsx';
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
  const tree = renderer.create(<NotFound />).toJSON();
  expect(tree).toMatchSnapshot();
});

