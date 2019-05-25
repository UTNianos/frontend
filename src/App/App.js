import React from 'react';
import LayoutDesktop from './LayoutDesktop';
import LayoutMobile from './LayoutMobile';
import MediaQuery from 'react-responsive';

const App = ({children}) => {

  return (
  <div>
   <MediaQuery minDeviceWidth={1224} >
      <LayoutDesktop children={children} />
   </MediaQuery>
	 <MediaQuery maxDeviceWidth={1224}>
      <LayoutMobile children={children} />
   </MediaQuery>
  </div>
  );

}

export default App;
