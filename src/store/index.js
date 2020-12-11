// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from 'src/reducers';
import logginMiddleware from '../middleware/logginMiddleware';
import walletMiddleware from '../middleware/walletMiddleware';
import eventMiddleware from '../middleware/eventMiddleware';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(logginMiddleware, walletMiddleware, eventMiddleware)
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers
);

// == Export
export default store;
