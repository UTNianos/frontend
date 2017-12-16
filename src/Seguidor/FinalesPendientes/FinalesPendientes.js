import React from 'react';

const FinalesPendientes = ({materias, updateEstado}) => {

  const pendientesDeFinal = materias.filter(m => m.status === 3);

  return(
  <div>
    {pendientesDeFinal.map(mat =><p>{mat.name}</p>)}
  </div>
  );

}


export default FinalesPendientes;
