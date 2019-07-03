/* eslint-disable react/no-children-prop */
import React from 'react';
import MediaQuery from 'react-responsive';
import LayoutDesktop from './LayoutDesktop';
import LayoutMobile from './LayoutMobile';

const App = ({ children }) => (
  <div>
    <MediaQuery minDeviceWidth={1224}>
      <LayoutDesktop children={children} />
    </MediaQuery>
    <MediaQuery maxDeviceWidth={1224}>
      <LayoutMobile children={children} />
    </MediaQuery>
  </div>
)

export default App;
