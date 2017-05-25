import React from 'react'
import { NavLink as Link } from 'react-router-dom';
import { Menu, Row, Col } from 'antd';
import './Navbar.css';
//import AccountMenu from './AccountMenu/AccountMenu';
import logo from './logo_utnianos.png'; // Tell Webpack this JS file uses this image

const imgStyle = {
  marginLeft: '17px',
  marginTop: '9px',
  width: '150px',
  height: '30px'
};


const NavbarDesktop = () => {

  return (
   <Menu mode="horizontal">
    <Row type="flex" justify="space-between">
	    <Col span={4} style={{paddingLeft:'80px'}}>
       <span>
          <Link to="/" activeClassName="HomeLinkActive">
            <img src={logo} alt="UTNianos" style={imgStyle} />
          </Link>
       </span>
      </Col>
      <Col span={4}></Col>
      <Col span={4}></Col>
	    <Col span={4}></Col>
      <Col span={4}></Col>
	    <Col span={4}></Col>
	  </Row>
  </Menu>
  )
};

export default NavbarDesktop;
