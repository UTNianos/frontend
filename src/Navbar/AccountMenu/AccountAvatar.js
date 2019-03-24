import React from 'react';
import { Avatar } from 'antd';
import './AccountMenu.css';

const AccountAvatar = ({ link, username }) => {

  const avatarLink = '/static/avatars/' + link;

  if(link.trim() === "") {
    return(
    <span className="UserMenu">
      <Avatar
         type="circle"
         size='small'
         className="Avatar"
      >
        {username[0]}
      </Avatar>
      <p className="UserMenuName">{username}</p>
    </span>
    );
  }

  return(
  <span className="UserMenu">
    <Avatar
       src={avatarLink}
       type="circle"
       size='small'
       className="Avatar"
    />
    <p className="UserMenuName">{username}</p>
  </span>
  );
}

export default AccountAvatar;
