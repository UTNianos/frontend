import React from 'react';
import { Badge } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faBellSlash
} from '@fortawesome/free-solid-svg-icons';

const bellIconStyle = { marginTop:'23px' };

const NotificationsHeader = ({ notifications, enabled }) => {

  if(enabled)
  {
    return(
    <Badge count={notifications.filter(n => !n.read).length}>
      <FontAwesomeIcon icon={faBell} size="lg" style={bellIconStyle} />
    </Badge>
    );
  }
  else
  {
    return(
    <span>
       <FontAwesomeIcon icon={faBellSlash} size="lg" style={bellIconStyle} />
    </span>
    )
  }
}

export default NotificationsHeader;
