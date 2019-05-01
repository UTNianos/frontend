import React from 'react';
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignInAlt as signIn,
  faUserPlus as userPlus
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const menuStyle = {
  width: '256px',
  marginLeft: '-24px'
}

const LoginMenu = ({ setDrawerVisible }) => (
  <div className="sidemenu-inline" style={menuStyle}>
    <Menu
      onClick={() => {}}
      defaultSelectedKeys={[]}
      defaultOpenKeys={[]}
      mode="inline"
    >
      <Menu.Item key="1" onClick={() => setDrawerVisible(false)}>
        <Link to="/login/login">
          <FontAwesomeIcon icon={signIn} />
          &nbsp;
          Log in
        </Link>
      </Menu.Item>
      <Menu.Item key="2" onClick={() => setDrawerVisible(false)}>
        <Link to="/login/register">
          <FontAwesomeIcon icon={userPlus} />
         &nbsp;
         Register
        </Link>
      </Menu.Item>
    </Menu>
  </div>
);

export default LoginMenu;
