import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Fetching from './FetchingIndicator';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  render(<Fetching />);
});
