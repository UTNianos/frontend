import React from 'react';
import { Icon } from 'react-fa';
import cssModules from 'react-css-modules';
import Styles from './CarouselArrows.scss';

const CarouselArrows = ({ prevFn, nextFn }) => (
  <span>
    <span styleName="ArrowLeft">
      <Icon name="arrow-left" size="3x" onClick={prevFn} />
    </span>
    <span styleName="ArrowRight">
      <Icon name="arrow-right"size="3x" onClick={nextFn} />
    </span>
  </span>
);

export default cssModules(CarouselArrows, Styles, { allowMultiple: true });
