import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import storeCreator from './store/configureStore';

import App from './App/App';
import Home from './App/Home'; // Home
import NotFound from './Errors/NotFound'; // 404
import Seguidor from './Seguidor/Seguidor';

const store = storeCreator();

class Root extends React.Component {
  render() {
    return (
    <div>
      <Provider store={store}>
        <Router history={browserHistory} >
          <Route path="/" component={App}>
			      <IndexRoute component={Home} />
			      <Route path="/seguidor" component={Seguidor} />
			      <Route path="/*" component={NotFound} />
			    </Route>
			    <Route path="*" component={NotFound} />
        </Router>
      </Provider>
    </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('app'));
