import React from 'react';
import DisplayList from './DisplayList';

const Pendientes = ({ pendientes, materias }) => {

  const firma = materias.filter(m => pendientes.firma.includes(m.id));
  const final = materias.filter(m => pendientes.final.includes(m.id));

  return (
  <div>
    <strong>Para cursar te faltan las siguientes correlativas:</strong>

    <div>
      <DisplayList title="Con cursada: " list={firma} />
    </div>

    <div>
      <DisplayList title="Con final: " list={final} />
    </div>

  </div>
  );
}

export default Pendientes;
