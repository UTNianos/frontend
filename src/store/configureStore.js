import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './Reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

function storeCreator() {

  const middleWareTools = compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  );

  return createStore(rootReducer, middleWareTools);
}

const store = storeCreator();

export default store;

sagaMiddleware.run(rootSaga);
