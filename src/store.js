import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

let middlewares = [
  promise(),

];

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middlewares)
));

export default store;
