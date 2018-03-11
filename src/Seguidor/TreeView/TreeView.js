import React from 'react';
import SubjectYears from './SubjectYears';
import getYearsArray from '../CarouselView/Carousel/getYearsArray';

const TreeView = ({ materias, updateEstado }) => {

  const years = getYearsArray(5, materias);

  return (
    <div>
      <SubjectYears
        years={years[0]}
        yearsPerTab={5}
        updateFn={updateEstado}
      />
    </div>
  );

}

export default TreeView;
