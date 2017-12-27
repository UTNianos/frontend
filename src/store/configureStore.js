import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import callApiMiddleware from './callAPIMiddleware';
import rootReducer from './Reducers';

export default function storeCreator() {
  const middleWareTools = compose(
    applyMiddleware(thunkMiddleware, callApiMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  return createStore(rootReducer, middleWareTools);
}
