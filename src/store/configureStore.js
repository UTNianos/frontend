import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import callAPIMiddleware from './callAPIMiddleware';
import rootReducer from './Reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

function storeCreator() {

  const middleWareTools = compose(
    applyMiddleware(sagaMiddleware, thunkMiddleware, callAPIMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  return createStore(rootReducer, middleWareTools);
}

const store = storeCreator();

export default store;

sagaMiddleware.run(rootSaga);
