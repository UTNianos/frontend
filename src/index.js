import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'components/App';

// Home
import Home from 'containers/Main';

// 404
import NotFound from 'components/Errors/NotFound';

//Seguidor
import Seguidor from 'components/Seguidor';

import storeCreator from './store/configureStore';

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