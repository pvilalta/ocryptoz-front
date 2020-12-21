/* eslint-disable no-fallthrough */
import axios from 'axios';

import {
  GET_ALL_WALLET,
  getAllWalletSuccess,
} from '../actions/mainPageActions';

const api = 'http://localhost:1234';
const wallet = '/wallet';

let url;
export default (store) => (next) => (action) => {
  next(action);

  const { dispatch } = store;

  switch (action.type) {
    case GET_ALL_WALLET:
      url = api.concat(wallet);
      axios({
        method: 'get',
        url,
        withCredentials: true,
      }).then((res) => {
        dispatch(getAllWalletSuccess(res.data));
      });
    default:
      break;
  }
};
