import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ApplicationRoutes from './Routes/Routes';
import AppRoute from './Routes/AppRoute';
import { Provider } from 'react-redux';
import storeCreator from './store/configureStore';

import createBrowserHistory from 'history/createBrowserHistory';

// Create browser history.
const store = storeCreator();
const browserHistory = createBrowserHistory();
const { App } = ApplicationRoutes;
const { Routes } = ApplicationRoutes;

const Utnianos = () => (
  <div>
    <Provider store={store}>
      <Router history={browserHistory}>
        <App>
          <Switch>
            {Routes.map(route =>
            (<AppRoute
              exact={route.exact}
              path={route.path}
              component={route.component}
              isPrivate={route.private}
            />))}
          </Switch>
        </App>
      </Router>
    </Provider>
  </div>
);

ReactDOM.render(<Utnianos />, document.getElementById('root'));
