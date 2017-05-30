import React from 'react';
import Styles from './Seguidor.scss';
import cssModules from 'react-css-modules';
import YearOfStudy from './YearOfStudy/YearOfStudy';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;
const yearsPerTab = 4;

const studyYears = [1,2,3,4,5];

const SubjectYears = ({materias, updateFn}) => {
  return(
    <div styleName="YearsVisualizer">
    {studyYears.map((year, i) =>
      <YearOfStudy
        key={year}
        subjects={materias.filter(m => m.year == year)}
        year={year}
        updateEstado={updateFn}
      />
    )}
    </div>
  );
}

export default cssModules(SubjectYears, Styles, { allowMultiple: true });
