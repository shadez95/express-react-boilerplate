import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

// Import custom components
import authReducer from './authReducer';

export default history => combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  form: formReducer, // ← redux-form
});
