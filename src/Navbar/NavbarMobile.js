import React, { useState } from 'react';
import { Drawer, Row, Col } from 'antd';
import { Link } from 'react-router-dom'; // Replace
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from './logo_utnianos.png';
import NavbarMenu from './Mobile/MobileMenu';
import AccountMenuAvatar from './AccountMenuAvatar';

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
      <Drawer
        visible={drawerVisible}
        placement="right"
        onClose={() => setDrawerVisible(false)}
        title={
       loggedIn
         ? (
           <React.Fragment>
             <AccountMenuAvatar user={user} />
             <strong style={menuTitleStyle}>
               {user.username}
             </strong>
           </React.Fragment>
         )
         : null
     }
        className="drawer-navbar"
      >
        <NavbarMenu
          logoutFn={logoutFn}
          loggedIn={loggedIn}
          notifications={notifications}
          notificationsEnabled={notificationsEnabled}
          user={user}
          clearFn={dismissNotifications}
          setDrawerVisible={setDrawerVisible}
        />
      </Drawer>
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
