import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';
import callAPIMiddleware from './callAPIMiddleware';

export default function storeCreator() {

  const middleWareTools =  compose(
      applyMiddleware(thunkMiddleware, callAPIMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  return createStore(rootReducer, middleWareTools);
}
