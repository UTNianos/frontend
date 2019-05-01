import React from 'react';
import { Spin } from 'antd';
import AccountAvatar from './AccountAvatar';

const avatarStyle = { top: '8px', marginRight: '2px', marginTop: '3px' };

const AvatarTitle = ({ link, style, username, isFetching }) => {
  if (isFetching) { return <span style={avatarStyle}><Spin /></span>; }

  return <AccountAvatar link={link} style={style} username={username} />;
}

export default AvatarTitle;
