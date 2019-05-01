import React from 'react';
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus as plus,
  faAddressCard as addressCard,
  faCog as cog,
  faSignOutAlt as signOut,
  faBell as bellIcon,
  faBellSlash as bellSlashIcon,
  faUser as userIcon
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import NotificationsHeader from '../AccountMenu/NotificationsMenu/NotificationsMenuHeader';

const { SubMenu } = Menu;
const menuStyle = { width: '256px', marginLeft: '-24px' };
const menuTitleStyle = { marginLeft: '5px', fontSize: '15px' };

const AccountMenu = (props) => {

  const {
    notificationsEnabled,
    notifications,
    logoutFn,
    setDrawerVisible
  } = props;

  return (
    <div className="sidemenu-inline" style={menuStyle}>
      <Menu
        onClick={null}
        defaultSelectedKeys={[]}
        defaultOpenKeys={[]}
        mode="inline"
      >
        <SubMenu
          key="UserMenu"
          title={(
            <strong style={menuTitleStyle}>
              <FontAwesomeIcon icon={userIcon} size="lg" />
            &nbsp; User
            </strong>
)}
        >
          <Menu.Item key="UserMenu:1" onClick={() => setDrawerVisible(false)}>
            <Link to="/stories/new">
              <FontAwesomeIcon
                icon={plus}
                className="MenuIcon"
                size="lg"
              />
            &nbsp; New Story
            </Link>
          </Menu.Item>
          <Menu.Item key="UserMenu:2" onClick={() => setDrawerVisible(false)}>
            <Link to="/categories">
              <FontAwesomeIcon
                icon={addressCard}
                className="MenuIcon"
                size="lg"
              />
            &nbsp; Categories
            </Link>
          </Menu.Item>
          <Menu.Item key="UserMenu:3" onClick={() => setDrawerVisible(false)}>
            <Link to="/settings">
              <FontAwesomeIcon
                icon={cog}
                className="MenuIcon"
                size="lg"
              />
            &nbsp; Settings
            </Link>
          </Menu.Item>
          <Menu.Item key="UserMenu:4" onClick={() => setDrawerVisible(false)}>
            <span
              onClick={() => logoutFn()}
              onKeyDown={() => {}}
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
        </SubMenu>
        <SubMenu
          key="NotificationsMenu"
          title={
         notificationsEnabled
           ? (
             <strong style={menuTitleStyle}>
               <FontAwesomeIcon icon={bellIcon} size="lg" />
            &nbsp; Notifications
             </strong>
           )
           : (
             <strong style={menuTitleStyle}>
               <FontAwesomeIcon icon={bellSlashIcon} size="lg" />
           &nbsp; Notifications disabled
             </strong>
           )
        }
          disabled={!notificationsEnabled}
        >
          <Menu.Item
            key="NotificationsMenu:number"
            disabled={notifications.length === 0}
          >
            {notifications.length === 0
              ? 'No unread notifications'
              : (
                <NotificationsHeader
                  notifications={notifications}
                  enabled
                />
              )
          }
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  )
};

export default AccountMenu;
