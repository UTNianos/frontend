import React from 'react';
import { Badge } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments as comments } from '@fortawesome/free-solid-svg-icons';

const Notification = ({ notification }) => {
  const status = notification.read ? 'default' : 'processing';

  return (
    <span>
      <Badge status={status} />
      <FontAwesomeIcon icon={comments} className="MenuIcon" size="lg" />
    &nbsp;
      {notification.text}
    </span>
  );
}

export default Notification;
