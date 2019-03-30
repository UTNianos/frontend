import React from 'react';
import { Avatar } from 'antd';
import './AccountMenu/AccountMenu.css';

const AccountMenuAvatar = ({ user }) => {

  if (user.avatar === undefined || user.avatar.trim() === '') {
    return (
      <Avatar
        type="circle"
        size="medium"
        className="Avatar"
      >
        {user.username[0]}
      </Avatar>
    );
  }

  const userAvatar = `/static/avatars/${user.avatar}`;

  return (
    <Avatar
      type="circle"
      size="medium"
      className="Avatar"
      src={userAvatar}
    />
  );

}

export default AccountMenuAvatar;
