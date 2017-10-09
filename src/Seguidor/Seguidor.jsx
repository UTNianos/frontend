import React, { Component } from 'react'
import FetchingIndicator from '../Fetching/FetchingIndicator'
import SeguidorHeading from './SeguidorHeading'
import CarouselView from './CarouselView/CarouselView';

class Seguidor extends Component {
  componentDidMount() {
    this.props.onLoad()
  }

  render() {

    const { isFetching, error, materias, updateEstado } = this.props;

    if (isFetching)
      return <FetchingIndicator />;

    if (error)
      return (
      <p>
        Hubo un error recuperando las materias.
      </p>
      );

    return (
      <div>

        <div>
          <SeguidorHeading />
        </div>

        <CarouselView materias={materias} updateEstado={updateEstado} />

      </div>
    )

  }

}

export default Seguidor
