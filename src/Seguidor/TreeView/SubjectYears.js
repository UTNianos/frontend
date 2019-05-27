import React from 'react';
import '../Seguidor.css';
import YearOfStudy from '../YearOfStudy/YearOfStudy';

const SubjectYears = ({ years, updateFn }) => {

  if (!years) { return null; }

  return (
  <div className="YearsVisualizer">
    {years.map(year => (
      <YearOfStudy
        key={year.year}
        year={year.year}
        subjects={year.subjects}
        updateEstado={updateFn}
      />
    ))}
  </div>
  )

}

export default SubjectYears;
