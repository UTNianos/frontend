import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import store from './store/configureStore';
import ApplicationRoutes from './Routes/Routes';
import AppRoute from './Routes/AppRoute';

// Create browser history.
const browserHistory = createBrowserHistory();
const { App } = ApplicationRoutes;
const { Routes } = ApplicationRoutes;

const Utnianos = () => (
  <div>
    <Provider store={store}>
      <Router history={browserHistory}>
        <App>
          <Switch>
            {Routes.map(route => (
              <AppRoute
                exact={route.exact}
                path={route.path}
                component={route.component}
                isPrivate={route.private}
              />
            ))}
          </Switch>
        </App>
      </Router>
    </Provider>
  </div>
);

ReactDOM.render(<Utnianos />, document.getElementById('root'));
