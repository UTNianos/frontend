import React from 'react';
import MediaQuery from 'react-responsive';
import { Affix } from 'antd';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Navbar = () => (
  <Affix>
    <MediaQuery minDeviceWidth={1224}>
      <NavbarDesktop />
    </MediaQuery>
    <MediaQuery maxDeviceWidth={1224}>
      <NavbarMobile />
    </MediaQuery>
  </Affix>
)

export default Navbar
