import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'; // Replace
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from './logo_utnianos.png';
import './Navbar.css';

const menuTitleStyle = { marginLeft: '5px', fontSize: '15px' };

const Navbar = (props) => {

  const [drawerVisible, setDrawerVisible] = useState(false);

  const {
    loggedIn,
    user,
    notifications,
    notificationsEnabled,
    logoutFn,
    dismissNotifications
  } = props;

  return (
    <div className="navbar-container">
      <Row gutter={4}>
        <Col className="gutter-row" span={16}>
          <Link to="/" className="topnav header-logo">
            <img src={logo} alt="UTNianos" />
          </Link>
        </Col>
        <Col className="gutter-row" span={4} />
        <Col className="gutter-row" span={4}>
          <span
            onClick={() => setDrawerVisible(true)}
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              color="gainsboro"
            />
          </span>
        </Col>
      </Row>
    </div>
  );

}

export default Navbar;
