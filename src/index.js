import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import storeCreator from './store/configureStore';

// Componentes de la aplicación.
import App from 'components/App';
import Home from 'containers/Main';
import NotFound from 'components/Errors/NotFound';
import Seguidor from 'components/Seguidor';

import fetchCarreras from './actions/index';

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

// Despachar fetching inicial de datos.
store.dispatch(fetchCarreras());

ReactDOM.render(<Root />, document.getElementById('app'));