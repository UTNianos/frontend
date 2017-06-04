import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import FetchingIndicator from '../Fetching/FetchingIndicator';
import SeguidorHeading from './SeguidorHeading';
import YearTabs from './YearTabs';

class Seguidor extends Component {

 constructor(props) {
    super(props)
 }

 componentDidMount() {
   this.props.onLoad();
 }

 render() {

  const { isFetching, error, materias, estados} = this.props;

  if(isFetching)
    return <FetchingIndicator />;

  if(error)
    return <p>Hubo un error recuperando las materias</p>;

  return(
  <div>

    <div>
      <SeguidorHeading />
    </div>

    <div>
      <YearTabs materias={materias} updateFn={this.props.updateEstado} />
    </div>

  </div>
  )
 }
}

export default Seguidor;
