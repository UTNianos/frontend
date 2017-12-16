import React from 'react';
import cssModules from 'react-css-modules';
import Styles from './Seguidor.scss';
import { Icon } from 'react-fa';
import { Button } from 'antd';

const SeguidorHeading = ({changeViewType, currentView}) => (
  <div>

    <div className="SeguidorTitle">
      <h1 styleName="SeguidorHeading">Materias</h1>
    </div>

    <div styleName="ViewChooser">
      <Button onClick={() => changeViewType('carousel')} >
          <Icon name="arrows-h" size="lg"/>
       </Button>
       <Button onClick={() => changeViewType('tree')}>
          <Icon name="tree" size="lg" />
       </Button>
       <Button onClick={() => changeViewType('finales')}>
          <Icon name="clock-o" size="lg" />
       </Button>
    </div>

  </div>
  )

export default cssModules(SeguidorHeading, Styles, { allowMultiple: true });
