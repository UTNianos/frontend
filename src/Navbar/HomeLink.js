import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo_utnianos.png';
import './Navbar.css';

const HomeLink = () => (
  <div className="logo container">
    <Link to="/" className="topnav header-logo">
      <img src={logo} alt="UTNianos" />
    </Link>
  </div>
);

export default HomeLink;
