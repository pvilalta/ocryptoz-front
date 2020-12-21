/* eslint-disable no-fallthrough */
import axios from 'axios';
import {
  GET_MAIN_WALLET,
  GET_ASSET_PIE,
  GET_ALL_WALLET,
  getAssetPieSuccess,
  getMainWalletSuccess,
  getAllWalletSuccess,
} from '../actions/dashboardActions';

const api = 'http://localhost:1234';
const mainWallet = '/main/wallet';
const assetPie = '/wallet/assetPie/';
const wallet = '/wallet';

let url;
export default (store) => (next) => (action) => {
  next(action);

  const { dispatch } = store;

  switch (action.type) {
    case GET_MAIN_WALLET:
      url = api.concat(mainWallet);
      axios({
        method: 'get',
        url,
        withCredentials: true,
      }).then((res) => {
        dispatch(getMainWalletSuccess(res.data));
      });
    case GET_ASSET_PIE:
      url = api
        .concat(assetPie)
        .concat(store.getState().user.loggedData.currentWallet);
      axios({
        method: 'get',
        url,
        withCredentials: true,
      }).then((res) => {
        dispatch(getAssetPieSuccess(res.data));
      });
    default:
      break;
  }
};
