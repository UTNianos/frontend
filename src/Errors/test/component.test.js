import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFound from '../NotFound';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  render(<NotFound />);
});
