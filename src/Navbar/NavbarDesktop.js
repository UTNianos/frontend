import React from 'react';
import { Row, Col } from 'antd';
import logo from './logo_utnianos.png';
import './Navbar.css';

// Menus.
import LoginMenu from './LoginMenu';
import AccountMenu from './AccountMenu/Container';

const NavbarMenu = (props) => {

  const {
    logoutFn,
    loggedIn,
    /* notifications, */
    user,
    /* clearFn */
  } = props;

  if (loggedIn) {
    return (
      <div style={{ marginLeft: '176px' }}>
        {/*
        <Notifications
          notifications={notifications} clearFn={clearFn}
        />
       */}
        <AccountMenu user={user} logoutFn={logoutFn} />
      </div>
    )
  }

  return <LoginMenu />;
}

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
        <Col className="gutter-row" span={6}>
          <NavbarMenu
            notifications={notifications}
            loggedIn={loggedIn}
            user={user}
            logoutFn={logoutFn}
            clearFn={dismissNotifications}
          />
        </Col>
      </Row>
    </div>
  );
}

/*
Navbar.propTypes = {
  : PropTypes.
}; */

export default Navbar;
