import React from 'react';
import cssModules from 'react-css-modules';
import styles from './Footer.scss';

const Footer = () => (
  <div styleName="footer">
    <hr />
  </div>
);

export default cssModules(Footer, styles, { allowMultiple: true });