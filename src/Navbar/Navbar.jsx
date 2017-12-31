import React from 'react'
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import MediaQuery from 'react-responsive';
import { Affix } from 'antd';

const Navbar = () => {

  return (
  <Affix>
   <MediaQuery minDeviceWidth={1224} >
      <NavbarDesktop />
    </MediaQuery>
	<MediaQuery maxDeviceWidth={1224}>
      <NavbarMobile />
    </MediaQuery>
  </Affix>
  );
}

export default Navbar
