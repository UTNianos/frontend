import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import storeCreator from './store/configureStore';

// Route components.
import App from './App/App'; // Main application.
import Home from './App/Home'; // Home
import NotFound from './Errors/NotFound'; // 404
import Seguidor from './Seguidor/Container';

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
              <Route path="*" component={NotFound} />
            </Route>
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
