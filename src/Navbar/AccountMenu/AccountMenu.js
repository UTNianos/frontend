import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';

// Font awesome icons.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus as plus,
  faAddressCard as addressCard,
  faCog as cog,
  faSignOutAlt as signOut
} from '@fortawesome/free-solid-svg-icons';
import AccountMenuAvatar from '../AccountMenuAvatar';
import './AccountMenu.css';

const userNameStyle = {
  textAlign: 'center',
  color: 'gainsboro',
  fontSize: '20px',
  marginLeft: '10px',
  verticalAlign: 'text-bottom'
};

const hrLineStyle = {
  height: '12px',
  border: '0',
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
};

const AccountMenu = ({ logoutFn, user /* , isFetching */ }) => {

  const menu = (
    <Menu className="AccountDropdownMenu">
      <Menu.Item key="account:0" disabled>
        <AccountMenuAvatar user={user} />
        <span style={userNameStyle}>
          {user.username}
        </span>
      </Menu.Item>
      <hr style={hrLineStyle} />
      <Menu.Item key="account:1">
        <Link to="/stories/new">
          <FontAwesomeIcon
            icon={plus}
            className="MenuIcon"
            size="lg"
          />
          &nbsp; New Story
        </Link>
      </Menu.Item>
      <Menu.Item key="account:2">
        <Link to="/categories">
          <FontAwesomeIcon
            icon={addressCard}
            className="MenuIcon"
            size="lg"
          />
          &nbsp; Categories
        </Link>
      </Menu.Item>
      <Menu.Item key="account:3">
        <Link to="/settings">
          <FontAwesomeIcon
            icon={cog}
            className="MenuIcon"
            size="lg"
          />
          &nbsp; Settings
        </Link>
      </Menu.Item>
      <Menu.Item key="account:4">
        <span
          onClick={() => logoutFn()}
          onKeyUp={() => {}}
          role="button"
          tabIndex={0}
        >
          <FontAwesomeIcon
            icon={signOut}
            className="MenuIcon"
            size="lg"
          />
          &nbsp; Log out
        </span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <span className="UserMenuAvatar">
        <AccountMenuAvatar user={user} />
      </span>
    </Dropdown>
  )

}

export default AccountMenu;
