export function getNuevoEstadoArray(materia, estados) {
  const indexMateria = estados.findIndex(estado => estado.id == materia.id);

  let _estados = [];

   // La materia no esta en el array.
  if (indexMateria == -1) {
	  _estados = estados.concat(materia);
  } else {
	 _estados = estados.slice();
	 _estados[indexMateria].status = materia.status;
  }

  return _estados;
}

function flattenSubjects(studyYears) {
  const subjects = [];

  for (const subjectYear of studyYears) {
    const year = subjectYear.a;

    for (const _subject of subjectYear.v)	{
      const subject = {
        id: _subject.v,
        name: _subject.t,
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
