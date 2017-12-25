import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

const AppRoute = ({
  exact, path, component, isPrivate, isAuthenticated
}) => {

  if (isPrivate && !isAuthenticated) { return <Redirect to="/login" />; }
  return (
    <Route
      exact={exact}
      path={path}
      component={component}
    />
  );
}

const mapStateToProps = state => ({
  isAuthenticated: false // state.session.loggedIn
})

const mapDispatchToProps = (dispatch, ownProps) => {}

const ConnectedAppRoute = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRoute)

export default ConnectedAppRoute;
