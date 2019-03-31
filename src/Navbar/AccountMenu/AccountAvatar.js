import React from 'react';
import { Avatar } from 'antd';
import './AccountMenu.css';

const AccountAvatar = ({ link, username }) => {

  const avatarLink = `/static/avatars/${link}`;
  const hasLink = link.trim() === '';

  return (
    <span className="UserMenu">
      <Avatar
        type="circle"
        size="small"
        className="Avatar"
        src={avatarLink}
      >
        {hasLink ? username[0] : null}
      </Avatar>
      <p className="UserMenuName">{username}</p>
    </span>
  );
}

export default AccountAvatar;
