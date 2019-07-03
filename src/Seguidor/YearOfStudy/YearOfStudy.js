import React from 'react';
import Subject from '../Subject/Subject';
import './YearOfStudy.css';

const YearOfStudy = ({ subjects, year, updateEstado }) => (
  <div className="Container">
    <p className="Heading">
Año
      {year}
    </p>
    <hr className="Separator" />
    {subjects.map(subject => (
      <div key={subject.id}>
        <Subject subject={subject} updateEstado={updateEstado} />
      </div>
    ))}
  </div>
);

export default YearOfStudy;
