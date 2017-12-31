import React from 'react';
import Navbar from '../Navbar/Container';
import Footer from './Footer';
import './Base.css';
import 'antd/dist/antd.css';

const App = ({ children }) => (
  <div className="App">
    <Navbar />
    <div className="MainApp" >
      {children}
    </div>
    <Footer />
  </div>
);

export default App;
