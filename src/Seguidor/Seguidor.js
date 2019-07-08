import React, { useState, useEffect } from 'react'
import MediaQuery from 'react-responsive';
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

   useEffect(()=> {
     if(props.materias.length === 0)
       props.onLoad();

   }, [props, props.materias])

   const [view, setView] = useState('carousel');

   const changeViewType = (type) => {
     setView(type);
   }

   if (isFetching)
     return <FetchingIndicator />;

   if (error)
     return <p>Hubo un error recuperando las materias.</p>;

   return(
   <div className="Seguidor">
     <div>
      <MediaQuery maxDeviceWidth={1224}>
       <SeguidorHeading
         changeViewType={changeViewType}
         currentView={view}
         desktop={false}
       />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1224}>
         <SeguidorHeading
           changeViewType={changeViewType}
           currentView={view}
           desktop={true}
         />
      </MediaQuery>
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
