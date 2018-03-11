import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faSignInAlt,
  faUserPlus
} from '@fortawesome/fontawesome-free-solid';

const buttonStyles = { marginRight: '4px', fontSize: '12px' };

const LoginMenu = () => (
  <span>
    <Link to="/login">
      <Button type="primary" size="default" style={buttonStyles}>
        <FontAwesomeIcon icon={faSignInAlt} />
         &nbsp; Ingresar
      </Button>
    </Link>
    <Link to="/register">
      <Button type="primary" size="default">
        <FontAwesomeIcon icon={faUserPlus} />
        &nbsp; Registrarse
      </Button>
    </Link>
  </span>
);

export default LoginMenu;
