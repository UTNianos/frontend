import React from 'react';
import Styles from './Seguidor.scss';
import cssModules from 'react-css-modules';

const SeguidorHeading = () => {
  return(
  <div>
    <h1 styleName="SeguidorHeading">Materias</h1>
  </div>
  );
}

export default cssModules(SeguidorHeading, Styles, { allowMultiple: true });
