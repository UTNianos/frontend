import React from 'react';
import LoginMenu from './LoginMenu';
import AccountMenu from './AccountMenu';

const NavbarMenu = (props) => {

  const {
    logoutFn,
    loggedIn,
    notifications,
    notificationsEnabled,
    user,
    clearFn,
    setDrawerVisible
  } = props;

  if (loggedIn) {
    return (
      <AccountMenu
        user={user}
        logoutFn={logoutFn}
        notifications={notifications}
        notificationsEnabled={notificationsEnabled}
        clearFn={clearFn}
        setDrawerVisible={setDrawerVisible}
      />
    )
  }

  return <LoginMenu setDrawerVisible={setDrawerVisible} />;
}

export default NavbarMenu;
