import React from 'react';
import { connect } from 'react-redux';
import Seguidor from './Seguidor';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const SeguidorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Seguidor)

export default SeguidorContainer;
