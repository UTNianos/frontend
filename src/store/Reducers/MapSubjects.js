export function getNuevoEstadoArray(materia, estados) {
  const indexMateria = estados.findIndex(estado => estado.id === materia.id);

  let estadosNuevos = [];

  // La materia no esta en el array.
  if (indexMateria === -1) {
    estadosNuevos = estados.concat(materia);
  } else {
    estadosNuevos = estados.slice();
    estadosNuevos[indexMateria].status = materia.status;
  }

  return estadosNuevos;
}

function mapMateria(subjectElement, year) {
  return {
    id: subjectElement.v,
    name: subjectElement.t,
    status: 1,
    year,
    cursada: false,
    final: false
  };
}

function flattenSubjects(studyYears) {

  const flattened = studyYears.reduce(
    (prevYear, currYear) => prevYear.concat(
      currYear.v.reduce((prev, curr) => prev.concat(mapMateria(curr, currYear.a)), [])
    ), []
  );

  return flattened;
}

export default flattenSubjects;
