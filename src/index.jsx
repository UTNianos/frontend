import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'containers/Programa';
import storeCreator from './store/configureStore';
import { Router, Route, browserHistory } from 'react-router';

const store = storeCreator();

class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router history={browserHistory} >
            <Route path="/" component={App} />
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('app'));