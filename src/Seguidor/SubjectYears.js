import React from 'react';
import cssModules from 'react-css-modules';
import Styles from './Seguidor.scss';
import YearOfStudy from './YearOfStudy/YearOfStudy';

const SubjectYears = ({ years, updateFn }) => (
  <div styleName="YearsVisualizer">
    {years.map(year =>
    (<YearOfStudy
      key={year.year}
      year={year.year}
      subjects={year.subjects}
      updateEstado={updateFn}
    />)
  )}
  </div>
 )

export default cssModules(SubjectYears, Styles, { allowMultiple: true });
