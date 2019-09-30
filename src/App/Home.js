import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="main-body">
    <Link to="/seguidor">
      <p>Seguidor de carrera</p>
    </Link>
  </div>
);

export default Home;
