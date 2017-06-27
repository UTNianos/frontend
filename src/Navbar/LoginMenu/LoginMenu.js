import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const LoginMenu = () => (
  <span>
    <Link to="/login">
      <Button type="primary" icon="login" size="default" style={{ marginRight: '4px' }}>
		   Ingresar
	   </Button>
    </Link>
    <Link to="/register">
      <Button type="primary" icon="user-add" size="default">
		   Registrarse
	   </Button>
    </Link>
  </span>
  );

export default LoginMenu;
