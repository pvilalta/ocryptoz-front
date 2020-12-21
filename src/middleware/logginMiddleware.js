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

import { getMainWallet, getAssetPie } from '../actions/dashboardActions';

import {
  LOGOUT_SUBMIT,
  getAllWallet,
  logOutSubmitSuccess,
} from '../actions/mainPageActions';
import { getPlatformExchange, getAsset } from '../actions/eventActions';

const api = 'http://localhost:1234';
const loggin = '/login';
const account = '/account';
const logout = '/logout';

let url;
export default (store) => (next) => (action) => {
  next(action);

  const { dispatch } = store;

  switch (action.type) {
    case LOGIN_SUBMIT:
      url = api.concat(loggin);
      axios({
        method: 'post',
        url,
        data: store.getState().user.signInData,
        withCredentials: true,
      })
        .then((res) => {
          dispatch(loginSuccess(res.data));
          dispatch(getMainWallet());
          dispatch(getAssetPie());
          dispatch(getAllWallet());
          dispatch(getPlatformExchange());
          dispatch(getAsset());
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
        withCredentials: true,
      })
        .then(() => {
          dispatch(signUpSuccess());
        })
        .catch((err) => {
          dispatch(signUpError(err.response.data));
        });
      break;
    case LOGOUT_SUBMIT:
      url = api.concat(logout);
      axios({
        method: 'get',
        url,
        withCredentials: true,
      })
        .then(() => {
          dispatch(logOutSubmitSuccess());
        })
        .catch((err) => {
          dispatch(signUpError(err.response.data));
        });
      break;
    default:
      break;
  }
};
