import React from 'react';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignInAlt as signIn,
  faUserPlus as userPlus
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css';

const LoginMenu = () => {
  return (
  <span className="LoginButtons">
		 <Link to="/login/login">
		   <Button type="primary" size="default" style={{marginRight:'4px'}}>
			   <FontAwesomeIcon icon={signIn} />
			   &nbsp;
			   Log in
		   </Button>
	   </Link>

	   <Link to="/login/register">
	     <Button type="primary" size="default">
		     <FontAwesomeIcon icon={userPlus} />
		     &nbsp;
		     Register
	     </Button>
	   </Link>
	</span>
  );
};

export default LoginMenu;
