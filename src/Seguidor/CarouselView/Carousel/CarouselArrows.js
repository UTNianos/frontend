import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight
} from '@fortawesome/fontawesome-free-solid';
import './CarouselArrows.css';

const CarouselArrows = ({ prevFn, nextFn }) => (
  <span>
    <span className="ArrowLeft">
      <FontAwesomeIcon icon={faArrowLeft} size="3x" onClick={prevFn} />
    </span>
    <span className="ArrowRight">
      <FontAwesomeIcon icon={faArrowRight} size="3x" onClick={nextFn} />
    </span>
  </span>
);

export default CarouselArrows;
