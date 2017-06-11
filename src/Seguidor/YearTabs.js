import React from 'react';
import { Tabs } from 'antd';
import SubjectYears from './SubjectYears';

const TabPane = Tabs.TabPane;

const yearsPerTab = 3;

function callback(key) {}

function getYearsArray(yearsPerTab, subjects) {

  let index = 0;
  let yearIndex = 1;
  let yearsArray = [];
  let tabsArray = [];
  let currentYear = 0;

  const maxYearMaterias = 5;

  while(yearIndex <= maxYearMaterias) {

     index = 1;
     while(index <= yearsPerTab && yearIndex <= maxYearMaterias) {

        currentYear = {
            year: yearIndex,
            subjects: subjects.filter(m => m.year == yearIndex)
        };

        yearsArray.push(currentYear);

        index++;
        yearIndex++
     }

     tabsArray.push(yearsArray);
     yearsArray = [];

  }

  return tabsArray;

}

const YearTabs = ({materias, updateFn}) => {

  const studyYears = getYearsArray(yearsPerTab, materias);

  return(
  <Tabs onChange={callback} type="card">
    {studyYears.map((tabYears, i) =>
      <TabPane tab={(i+1).toString()} key={(i+1).toString()}>
        <SubjectYears years={tabYears} updateFn={updateFn} />
      </TabPane>
    )}
  </Tabs>
  );

}

export default YearTabs;
