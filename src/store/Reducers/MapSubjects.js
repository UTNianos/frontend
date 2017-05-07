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

function flattenSubjects(studyYears) {
  const subjects = [];

  for (const subjectYear of studyYears) {
    const year = subjectYear.a;

    for (const subjectElement of subjectYear.v) {
      const subject = {
        id: subjectElement.v,
        name: subjectElement.t,
        status: 1,
        year,
        cursada: false,
        final: false
      };

      subjects.push(subject);
    }
  }

  return subjects;
}

export default flattenSubjects;
