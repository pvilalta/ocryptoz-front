/* eslint-disable no-fallthrough */
import axios from 'axios';
import {
  GET_MAIN_WALLET,
  GET_ASSET_PIE,
  getAssetPieSuccess,
  getMainWalletSuccess,
} from '../actions/dashboardActions';

const api = 'http://localhost:1234';
const wallet = '/main/wallet';
const assetPie = '/wallet/assetPie/13';

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
    case GET_ASSET_PIE:
      url = api.concat(assetPie);
      axios({
        method: 'get',
        url,
      }).then((res) => {
        dispatch(getAssetPieSuccess(res.data));
      });
    default:
      break;
  }
};
