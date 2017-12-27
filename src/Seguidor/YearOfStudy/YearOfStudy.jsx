import React from 'react';
import Subject from '../Subject/Subject';
import './YearOfStudy.css';

const YearOfStudy = ({subjects, year, updateEstado}) => {

  return(
  <div className="Container">
    <p className="Heading">Año {year}</p>
    <hr className="Separator" />
    {subjects.map((subject, i) =>
    <div key={subject.id}>
      <Subject
      id={subject.id}
      name={subject.name}
      status={subject.status}
      cursada={subject.cursada}
      final={subject.final}
      updateEstado={updateEstado}
    />
    </div>
    )}
  </div>
  );

};

export default YearOfStudy; //cssModules(YearOfStudy, Styles, { allowMultiple: true });