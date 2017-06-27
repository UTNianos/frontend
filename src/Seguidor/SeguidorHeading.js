import React from 'react';
import cssModules from 'react-css-modules';
import Styles from './Seguidor.scss';

const SeguidorHeading = () => (
  <div>
    <h1 styleName="SeguidorHeading">Materias</h1>
  </div>
  )

export default cssModules(SeguidorHeading, Styles, { allowMultiple: true });
