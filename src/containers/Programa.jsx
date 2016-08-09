import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import Loader from 'react-loader';

const mapStateToProps = function (state) {
  return state;
};

class Programa extends React.Component {
  render() {
    const {
      fetchCarreras
    } = this.props;

    return (
      <div>
        <button onClick={fetchCarreras}></button>
        <h1>Hola Mundo</h1>
      </div>
    );
  }
}


export default connect(mapStateToProps, actions)(Programa);

