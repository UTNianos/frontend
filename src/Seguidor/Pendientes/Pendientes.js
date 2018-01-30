import React from 'react';

const DisplayList = ({ title, list }) => {
  if (list.length === 0) { return null; }

  return (
    <div>

      <p>{title}</p>

      <ul>
        {list.map(pendiente =>
         (<li key={pendiente.id}>
           {pendiente.name}
          </li>))}
      </ul>

    </div>
  );
}

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
