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
import { getPlatformExchange, getAsset } from '../actions/eventActions';

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
        withCredentials: true,
      })
        .then(() => {
          dispatch(loginSuccess());
          dispatch(getMainWallet());
          dispatch(getPlatformExchange());
          dispatch(getAsset());
          dispatch(getAssetPie());
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
