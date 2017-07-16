import React from 'react';

const Pendientes = ({pendientes, materias}) => {
 
 const firma = materias.filter(m => pendientes.firma.includes(m.id)); 
 const final = materias.filter(m => pendientes.final.includes(m.id)); 
  
 return(
 <div>
    <p>Para cursar te faltan las siguientes correlativas:</p>
	<ul>
	 {firma.map(pendiente =>
	  <li key={pendiente.id}>
		{pendiente.name}
	  </li>
	  )}
	</ul>
  </div>
 );		
}

export default Pendientes;
