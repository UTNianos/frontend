import React from 'react';
import Footer from './Footer';
import Navbar from '../Navbar/Container';

const App = ({children}) => (
  <div>
	  <Navbar />
	  {children}
	  <Footer />
	</div>
);

export default App;
