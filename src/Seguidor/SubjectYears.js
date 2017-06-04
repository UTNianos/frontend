import React from 'react';
import Styles from './Seguidor.scss';
import cssModules from 'react-css-modules';
import YearOfStudy from './YearOfStudy/YearOfStudy';

const SubjectYears = ({years, updateFn}) => {

  return(
  <div styleName="YearsVisualizer">
  {years.map((year, i) =>
    <YearOfStudy
      key={i}
      year={year.year}
      subjects={year.subjects}
      updateEstado={updateFn}
    />
  )}
  </div>
 );

  /*
  return(
    <div styleName="YearsVisualizer">
    {
      years.map((subjects, i) =>
      {
        <YearOfStudy
          key={i}
          year={i}
          subjects={subjects}
          updateEstado={updateFn}
        />
      })
    }
    </div>
  );*/

}

export default cssModules(SubjectYears, Styles, { allowMultiple: true });
