import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';

import history from '../utils/history';

// Import custom components
import createRootReducer from '../reducers';

const initialState = {};

/**
 * Create redux store that holds the app state.
 */
const store = createStore(
  createRootReducer(history), // root reducer with router state
  initialState,
  compose(applyMiddleware(thunkMiddleware, routerMiddleware(history), logger)),
);

export default store;
