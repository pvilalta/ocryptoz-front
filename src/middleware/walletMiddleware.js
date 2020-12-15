import axios from 'axios';
import {
  GET_MAIN_WALLET,
  getMainWalletSuccess,
} from '../actions/walletActions';

const api = 'http://localhost:1234';
const wallet = '/main/wallet';

let url;
export default (store) => (next) => (action) => {
  next(action);

  const { dispatch } = store;

  switch (action.type) {
    case GET_MAIN_WALLET:
      url = api.concat(wallet);
      axios({
        method: 'get',
        url,
      }).then((res) => {
        dispatch(getMainWalletSuccess(res.data));
      });
      break;
    default:
      break;
  }
};
