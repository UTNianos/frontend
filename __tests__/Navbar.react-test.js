'use strict';

import React from 'react';
import Navbar from '../src/Navbar/Navbar.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Navbar />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});