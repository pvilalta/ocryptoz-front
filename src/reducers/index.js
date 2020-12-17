import { combineReducers } from 'redux';
import user from './user';
import error from './error';
import wallet from './wallet';
import event from './event';
import dashboard from './dashboard';

export default combineReducers({
  user,
  error,
  wallet,
  event,
  dashboard,
});
