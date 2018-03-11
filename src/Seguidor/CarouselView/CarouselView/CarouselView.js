import React from 'react';
import MediaQuery from 'react-responsive';
import Carousel from '../Carousel/Carousel';

const CarouselView = ({ materias, updateEstado }) => (
  <div>
    <MediaQuery minDeviceWidth={1224}>
      <Carousel
        materias={materias}
        yearsPerTab={3}
        updateFn={updateEstado}
      />
    </MediaQuery>
    <MediaQuery maxDeviceWidth={1224}>
      <Carousel
        materias={materias}
        yearsPerTab={1}
        updateFn={updateEstado}
      />
    </MediaQuery>
  </div>
)

export default CarouselView;
