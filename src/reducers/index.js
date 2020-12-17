import { combineReducers } from 'redux';
import user from './user';
import error from './error';
import dashboard from './dashboard';
import event from './event';
import mainPage from './mainPage';

export default combineReducers({
  user,
  error,
  dashboard,
  event,
  mainPage,
});
