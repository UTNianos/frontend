import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory} from 'react-router';
import App from './components/App';
import configureStore from './store/configureStore';

let _store = configureStore();

// FIXME: browserHistory no funciona. Averigüar porque.

class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider store={_store}>          
		  <Router history={browserHistory} >
            <Route path="/" component={App} />		
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<Root />, 
document.getElementById('app'));