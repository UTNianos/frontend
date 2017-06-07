import React from 'react';
import { Tabs } from 'antd';
import SubjectYears from './SubjectYears';

const TabPane = Tabs.TabPane;

const yearsPerTab = 1;

function callback(key) {
  //console.log(key);
}

function getYearsArray(yearsPerTab, subjects) {

  let i = 0;
  let yearsArray = [];
  let tabsArray = [];
  let currentYear = [];

  while(currentYear.length !== 0 || i === 0) {
    const limit = yearsPerTab +i;

    for(; i<= limit; i++) {
      currentYear = subjects.filter(m => m.year == i.toString());

      if(currentYear.length !== 0)
         yearsArray.push(currentYear);
    }
    tabsArray.push(yearsArray);
  }

  return tabsArray;
}

const YearTabs = ({materias, updateFn}) => {

  //const studyYears = getYearsArray(yearsPerTab, materias);

  const yearOne = { year: 1, subjects: materias.filter(m => m.year == 1) };
  const yearTwo = { year: 2, subjects: materias.filter(m => m.year == 2) };
  const yearThree = { year: 3, subjects:  materias.filter(m => m.year == 3) };
  const yearFour = { year: 4, subjects:  materias.filter(m => m.year == 4) };
  const yearFive = { year: 5, subjects:  materias.filter(m => m.year == 5) };
  const tab1 = [yearOne];
  const tab2 = [yearTwo];
  const tab3 = [yearThree];
  const tab4 = [yearFour];
  const tab5 = [yearFive];

  const yearsByTab = [tab1, tab2, tab3, tab4, tab5];

  return(
  <Tabs onChange={callback} type="card">
    {yearsByTab.map((tabYears, i) =>
      <TabPane tab={(i+1).toString()} key={(i+1).toString()}>
        <SubjectYears years={tabYears} updateFn={updateFn} />
      </TabPane>
    )}
  </Tabs>
  );

}

export default YearTabs;
