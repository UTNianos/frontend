import React from 'react'
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import MediaQuery from 'react-responsive';
import { Affix } from 'antd';

const Navbar = () => {

  return (  
  <span>
	<MediaQuery minDeviceWidth={1224} >
		<Affix>
			<NavbarDesktop />
		</Affix>
	</MediaQuery>
	<MediaQuery maxDeviceWidth={1224}>
		<NavbarMobile />
    </MediaQuery>  
  </span>
  );
}

export default Navbar
