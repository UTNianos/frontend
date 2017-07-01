
function getYearsArray(yearsPerTab, subjects) {

  let index = 0;
  let yearIndex = 1;
  let yearsArray = [];
  const tabsArray = [];
  let currentYear = 0;

  const maxYearMaterias = 5;

  while (yearIndex <= maxYearMaterias) {

    index = 1;
    while (index <= yearsPerTab && yearIndex <= maxYearMaterias) {

      currentYear = {
        year: yearIndex,
        subjects: subjects.filter(m => parseInt(m.year, 10) === yearIndex)
      };

      yearsArray.push(currentYear);

      index += 1;
      yearIndex += 1
    }

    tabsArray.push(yearsArray);
    yearsArray = [];

  }

  return tabsArray;

}

export default getYearsArray;
