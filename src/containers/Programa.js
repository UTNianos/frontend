import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Loader from 'react-loader';

const mapStateToProps = function (state) {
  return state;
};

class Programa extends React.Component {
  
  render() {
	  
    const { fetchCarreras } = this.props;
    
    return (
      <div>       		
        <h1>Bienvenido a la nueva plataforma de UTNianos</h1>
		<button onClick={fetchCarreras}>/kick gonza</button>
      </div>
    );
	
  }
};

export default connect(mapStateToProps, actions)(Programa);