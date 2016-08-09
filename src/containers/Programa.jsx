import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
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
		<h2> /Kick gonza</h2>
		<button onClick={fetchCarreras}>Obtener carreras</button>
      </div>
    );
	
  }
};

export default connect(mapStateToProps, actions)(Programa);