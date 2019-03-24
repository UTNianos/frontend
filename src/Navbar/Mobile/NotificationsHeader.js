import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments as comments,
  faBell,
  faBellSlash
  } from '@fortawesome/free-solid-svg-icons';

const Notification = ({ notification }) => {
  const status = notification.read ? "default" : "processing";

  return(
  <span>
    <FontAwesomeIcon icon={comments} className="MenuIcon" size="lg" />
    &nbsp;
    {notification.text}
  </span>
  );
}

export default Notification;
