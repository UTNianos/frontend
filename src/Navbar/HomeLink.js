import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo_utnianos.png';
import './Navbar.css';

const HomeLink = () => (
  <span className="HomeLink">
    <Link to="/" className="HomeLinkActive">
      <img alt="logo" src={logo} width="40" height="40" />
      <h1>Morpheus</h1>
    </Link>
  </span>
);

export default HomeLink;
