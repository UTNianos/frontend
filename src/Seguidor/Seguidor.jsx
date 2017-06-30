import React, { Component } from 'react';
import { Link } from 'react-router';
import FetchingIndicator from '../Fetching/FetchingIndicator';
import SeguidorHeading from './SeguidorHeading';
import Carousel from './Carousel/Carousel';
import YearTabsMobile from './YearTabsMobile';
import MediaQuery from 'react-responsive';

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
	  <MediaQuery minDeviceWidth={1224} >			
		<Carousel 
			materias={materias} 
			updateFn={this.props.updateEstado} 
		/>
	  </MediaQuery>
	  <MediaQuery maxDeviceWidth={1224}>
		  <YearTabsMobile
			materias={materias} 
			updateFn={this.props.updateEstado} 
		  />	  
      </MediaQuery>	      
    </div>
  </div>
  );
  
 }
 
}

export default Seguidor;
