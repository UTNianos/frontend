import React from 'react'
import CarouselView from './CarouselView/CarouselView';
import TreeView from './TreeView/TreeView';
import FinalesPendientes from './FinalesPendientes/FinalesPendientes';

const SeguidorView = ({ view, materias, updateEstado }) => {

  if (view === 'tree') { return <TreeView materias={materias} updateEstado={updateEstado} />; }

  if (view === 'carousel') { return <CarouselView materias={materias} updateEstado={updateEstado} />; }

  if (view === 'finales') { return <FinalesPendientes materias={materias} updateEstado={updateEstado} />; }

  return null;
}

export default SeguidorView;
