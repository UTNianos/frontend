import React from 'react';
import renderer from 'react-test-renderer';
import Fetching from '../FetchingIndicator';

jest.mock('react-dom');
jest.mock('antd');

describe('<Fetching />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Fetching />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});

