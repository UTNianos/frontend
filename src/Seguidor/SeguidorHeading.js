import React from 'react';
import './Seguidor.css';
import { Icon } from 'react-fa';
import { Button } from 'antd';

const SeguidorHeading = ({changeViewType, currentView}) => (
  <div>

    <div className="SeguidorTitle">
      <h1 className="SeguidorHeading">Materias</h1>
    </div>

    <div className="ViewChooser">
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

export default SeguidorHeading;
