// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from 'src/reducers';
import logginMiddleware from '../middleware/logginMiddleware';
import dashboardMiddleware from '../middleware/dashboardMiddleware';
import eventMiddleware from '../middleware/eventMiddleware';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(logginMiddleware, dashboardMiddleware, eventMiddleware)
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers
);

// == Export
export default store;
