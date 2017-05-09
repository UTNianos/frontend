import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import storeCreator from './store/configureStore';

// Route components.
import App from './App/App'; // Main application.
import Home from './App/Home'; // Home
import Seguidor from './Seguidor/Container';

// Create store and browser history.
const store = storeCreator();
const browserHistory = createBrowserHistory();

const Root = () => (
  <div>
    <Provider store={store}>
      <Router history={browserHistory}>
        <div>
          <Route path="/" component={App} />
          <Route exact path="/" component={Home} />
          <Route exact path="/seguidor" component={Seguidor} />
        </div>
      </Router>
    </Provider>
  </div>
	)

ReactDOM.render(<Root />, document.getElementById('root'));
