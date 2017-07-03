import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import FetchingIndicator from '../Fetching/FetchingIndicator'
import SeguidorHeading from './SeguidorHeading'
import Carousel from './Carousel/Carousel'

class Seguidor extends Component {
  componentDidMount() {
    this.props.onLoad()
  }

  render() {

    const { isFetching, error, materias } = this.props

    if (isFetching) { return <FetchingIndicator /> }

    if (error) { return <p>Hubo un error recuperando las materias</p> }

    return (
      <div>

        <div>
          <SeguidorHeading />
        </div>

        <div>
          <MediaQuery minDeviceWidth={1224}>
            <Carousel
              materias={materias}
              yearsPerTab={3}
              updateFn={this.props.updateEstado}
            />
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1224}>
            <Carousel
              materias={materias}
              yearsPerTab={1}
              updateFn={this.props.updateEstado}
            />
          </MediaQuery>
        </div>
      </div>
    )

  }

}

export default Seguidor
