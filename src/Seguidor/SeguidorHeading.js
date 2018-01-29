import React from 'react';
import './Seguidor.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
	faClock,
	faTree,
	faArrowsAltH
} from '@fortawesome/fontawesome-free-solid';
import { Button } from 'antd';

const SeguidorHeading = ({changeViewType, currentView}) => (
  <div>

    <div className="SeguidorTitle">
      <h1 className="SeguidorHeading">Materias</h1>
    </div>

    <div className="ViewChooser">
      <Button onClick={() => changeViewType('carousel')} >
		  <FontAwesomeIcon icon={faArrowsAltH} size="lg" />
       </Button>
       <Button onClick={() => changeViewType('tree')}>
          <FontAwesomeIcon icon={faTree} size="lg" />
       </Button>
       <Button onClick={() => changeViewType('finales')}>
          <FontAwesomeIcon icon={faClock} size="lg" />
       </Button>
    </div>

  </div>
  )

export default SeguidorHeading;
