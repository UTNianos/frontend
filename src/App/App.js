import React from 'react';
import Footer from './Footer';
import Navbar from '../Navbar/Container';
import cssModules from 'react-css-modules';
import styles from './Footer.scss';
import Styles from './Base.scss';

const App = ({children}) => (
  <div styleName="App">
	  <Navbar />
	  {children}
	  <Footer />
	</div>
);

export default cssModules(App, styles, { allowMultiple: true });
