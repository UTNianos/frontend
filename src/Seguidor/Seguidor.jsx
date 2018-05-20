import React, { Component } from 'react'
import FetchingIndicator from '../Fetching/FetchingIndicator'
import SeguidorHeading from './SeguidorHeading'
import CarouselView from './CarouselView/CarouselView';
import TreeView from './TreeView/TreeView';
import FinalesPendientes from './FinalesPendientes/FinalesPendientes';

const SeguidorView = ({view, materias, updateEstado}) => {

  if(view === 'tree')
     return <TreeView materias={materias} updateEstado={updateEstado} />;

  if(view === 'carousel')
     return <CarouselView materias={materias} updateEstado={updateEstado} />;

  if(view === 'finales')
    return <FinalesPendientes materias={materias} updateEstado={updateEstado} />;

}

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
