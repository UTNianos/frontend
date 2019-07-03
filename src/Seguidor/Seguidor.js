import React, { useState, useEffect } from 'react'
import FetchingIndicator from '../Fetching/FetchingIndicator'
import SeguidorHeading from './SeguidorHeading'
import SeguidorView from './SeguidorView';

const Seguidor = (props) => {

  const {
    isFetching,
    error,
    materias,
    updateEstado
  } = props;

  useEffect(() => {
    if (materias.length === 0) { props.onLoad(); }

  }, [props, materias])

  const [view, setView] = useState('carousel');

  const changeViewType = (type) => {
    setView(type);
  }

  if (isFetching) { return <FetchingIndicator />; }

  if (error) { return <p>Hubo un error recuperando las materias.</p>; }

  return (
    <div className="Seguidor">
      <div>
        <SeguidorHeading
          changeViewType={changeViewType}
          currentView={view}
        />
      </div>
      <SeguidorView
        materias={materias}
        updateEstado={updateEstado}
        view={view}
      />
    </div>
  );
}

export default Seguidor;
