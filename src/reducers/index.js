import { combineReducers } from 'redux';
import user from './user';
import error from './error';
import wallet from './wallet';

export default combineReducers({
  user,
  error,
  wallet,
});
