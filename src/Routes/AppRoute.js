import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

const AppRoute = ({ exact, path, component, isPrivate, isAuthenticated }) => {

  if (isPrivate && !isAuthenticated) { return <Redirect to="/login" />; }

  return <Route exact={exact} path={path} component={component} />;
}

const mapStateToProps = ({ isAuthenticated: false });
const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(AppRoute);
