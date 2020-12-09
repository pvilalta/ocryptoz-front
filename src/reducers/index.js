import { combineReducers } from 'redux';
import counter from './counter';
import user from './user';
import error from './error';

export default combineReducers({
  counter,
  user,
  error,
});
