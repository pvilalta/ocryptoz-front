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

import { getMainWallet } from '../actions/walletActions';

const api = 'http://localhost:1234';
const login = '/login';
const account = '/account';
let url;
export default (store) => (next) => (action) => {
  next(action);

  const { dispatch } = store;

  switch (action.type) {
    case LOGIN_SUBMIT:
      url = api.concat(login);
      axios({
        method: 'post',
        url,
        data: store.getState().user.signInData,
      })
        .then((res) => {
          dispatch(loginSuccess(res.data));
          dispatch(getMainWallet(res.data.id));
        })

        .catch((err) => {
          dispatch(loginError(err.response.data));
        });
      break;
    case SIGNUP_SUBMIT:
      url = api.concat(account);
      axios({
        method: 'post',
        url,
        data: store.getState().user.signUpData,
      })
        .then(() => {
          dispatch(signUpSuccess());
        })
        .catch((err) => {
          dispatch(signUpError(err.response.data));
        });
      break;
    default:
      break;
  }
};
