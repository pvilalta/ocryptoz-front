/* eslint-disable no-fallthrough */
/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  EVENT_SUBMIT,
  GET_PLATFORM_EXCHANGE,
  GET_ASSET,
  eventSuccess,
  eventError,
  getPlatformExchangeSuccess,
  getAssetSuccess,
} from '../actions/eventActions';
import payWay from '../utils/handleForm';

const api = 'http://localhost:1234';
const event = '/event/new/';
const platformExchange = '/content/platform';
const asset = '/content/asset';

const walletId = 13;
let url;
export default (store) => (next) => (action) => {
  next(action);

  const { dispatch } = store;

  switch (action.type) {
    case EVENT_SUBMIT:
      const finalDataForm = payWay(store.getState().event.dataForm);
      url = api.concat(event).concat(walletId);
      axios({
        method: 'post',
        url,
        data: finalDataForm,
        withCredentials: true,
      })
        .then((res) => {
          dispatch(eventSuccess(res.data));
          //   dispatch(getMainWallet());
        })

        .catch((err) => {
          dispatch(eventError(err.response.data));
        });
    case GET_PLATFORM_EXCHANGE:
      url = api.concat(platformExchange);
      axios({
        method: 'get',
        url,
      })
        .then((res) => {
          dispatch(getPlatformExchangeSuccess(res.data));
        })
        .catch((err) => {
          // dispatch(signUpError(err.response.data));
        });
    case GET_ASSET:
      url = api.concat(asset);
      axios({
        method: 'get',
        url,
        withCredentials: true,
      })
        .then((res) => {
          dispatch(getAssetSuccess(res.data));
        })
        .catch((err) => {
          // dispatch(signUpError(err.response.data));
        });
    default:
  }
};
