import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

//this makes a dispatch function available to all store methods
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
  //this attaches our methods into our store.
  const store = createStoreWithMiddleware(rootReducer, initialState);
  return store;
}
