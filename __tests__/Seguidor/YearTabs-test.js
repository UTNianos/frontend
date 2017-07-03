/* eslint-env node, mocha */
import getYearsArray from '../../src/Seguidor/Carousel/getYearsArray'
import subjects from '../fixtures/flattenedSubjects.json'
import yearsArray from '../fixtures/yearsArray.json'

describe('test getYearsArray', () => {
  it('renders correctly', () => {
    const resultArray = getYearsArray(3, subjects.materias);
    expect(resultArray).toEqual(yearsArray);
  })
});
