import React from 'react';
import { Row, Col } from 'antd';
import logo from './logo_utnianos.png';
import './Navbar.css';

const Navbar = (props) => {

  const {
    loggedIn,
    user,
    notifications,
    logoutFn,
    dismissNotifications,
  } = props;

  return (
    <div className="navbar-container">
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <div className="logo container">
            <a href="/" className="topnav header-logo">
              <img src={logo} alt="UTNianos" />
            </a>
          </div>
        </Col>
        <Col className="gutter-row" span={6} />
        <Col className="gutter-row" span={6} />
        <Col className="gutter-row" span={6}></Col>
      </Row>
    </div>
  );
}

export default Navbar;
