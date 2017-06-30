import React from 'react';
import { Icon } from 'react-fa';
import './Carousel.css';

const CarouselArrows = ({prevFn, nextFn}) => {
	return(
	<span>		
	  <span className="ArrowLeft">
		 <Icon name="arrow-left" size="3x" onClick={prevFn} />
	  </span>	  
	  <span className="ArrowRight">
		<Icon name="arrow-right"size="3x" onClick={nextFn} />
	  </span>	  
	</span>
    );
}

export default CarouselArrows;