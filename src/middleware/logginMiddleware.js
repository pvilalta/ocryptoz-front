import axios from 'axios';
import {
  LOGIN_SUBMIT,
  loginSuccess,
  loginError,
} from '../actions/signInActions';

import {
  SIGNUP_SUBMIT,
  signUpSuccess,
  signUpError,
} from '../actions/signUpActions';

const api = 'http://localhost:1234';
const login = '/login';
const account = '/account';
let url;
export default (store) => (next) => (action) => {
  next(action);

  switch (action.type) {
    case LOGIN_SUBMIT:
      url = api.concat(login);
      axios({
        method: 'post',
        url,
        data: store.getState().user.signInData,
      })
        .then((res) => {
          store.dispatch(loginSuccess(res.data));
        })
        .catch((err) => {
          store.dispatch(loginError(err.response.data));
        });
      break;
    case SIGNUP_SUBMIT:
      url = api.concat(account);
      axios({
        method: 'post',
        url,
        data: store.getState().user.signUpData,
      })
        .then((res) => {
          store.dispatch(signUpSuccess());
        })
        .catch((err) => {
          store.dispatch(signUpError(err.response.data));
        });
      break;
    default:
      break;
  }
};
