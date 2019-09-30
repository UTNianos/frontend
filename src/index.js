import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import store from './store/configureStore';
import routes from './Routes/Routes';
import AppRoute from './Routes/AppRoute';
import App from './App/App';

// Create browser history.
const browserHistory = createBrowserHistory();

const Utnianos = () => (
  <div>
    <Provider store={store}>
      <Router history={browserHistory}>
        <App>
          <Switch>
            {routes.map((route) => (
              <AppRoute
                key={route.path}
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
