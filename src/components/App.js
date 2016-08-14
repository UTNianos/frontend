import React from 'react';
import Footer from './Footer';
import NavbarUTNianos from '../containers/NavbarUTNianos';

const App = ({children}) => (    	  
     <div>	
		  <NavbarUTNianos />
		  {children}
		  <Footer />
	 </div>  
);

export default App;