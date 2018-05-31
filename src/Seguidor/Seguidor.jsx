import React, { Component } from 'react'
import FetchingIndicator from '../Fetching/FetchingIndicator'
import SeguidorHeading from './SeguidorHeading'
import SeguidorView from './SeguidorView';

class Seguidor extends Component {

  constructor(props) {
    super(props);
    this.state = { view: 'carousel' };
  }

  componentDidMount() {
    this.props.onLoad()
  }

  changeViewType(type) {
    this.setState({view: type});
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
      <div className="Seguidor">

        <div>
          <SeguidorHeading
              changeViewType={this.changeViewType.bind(this)}
              currentView={this.state.view}
          />
        </div>

        <SeguidorView
            materias={materias}
            updateEstado={updateEstado}
            view={this.state.view}
        />

      </div>
    )

  }

}

export default Seguidor
