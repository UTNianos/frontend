import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import Loader from 'react-loader';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hola Mundo!</h1>
      </div>
    );
  }
}

export default connect(state => state, actions)(App);