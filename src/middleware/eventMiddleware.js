/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  EVENT_SUBMIT,
  eventSuccess,
  eventError,
} from '../actions/eventActions';
import handleForm from '../utils/handleForm';

const api = 'http://localhost:1234';
const event = '/event/new/';
const walletId = 13;
let url;
export default (store) => (next) => (action) => {
  next(action);

  const { dispatch } = store;

  switch (action.type) {
    case EVENT_SUBMIT:
      const newDataForm = handleForm(store.getState().event.dataForm);
      url = api.concat(event).concat(walletId);
      axios({
        method: 'post',
        url,
        data: newDataForm,
        withCredentials: true,
      })
        .then((res) => {
          console.log(res);
          dispatch(eventSuccess(res.data));
          //   dispatch(getMainWallet());
        })

        .catch((err) => {
          dispatch(eventError(err.response.data));
        });
      break;
    // case SIGNUP_SUBMIT:
    //   url = api.concat(account);
    //   axios({
    //     method: 'post',
    //     url,
    //     data: store.getState().user.signUpData,
    //   })
    //     .then(() => {
    //       dispatch(signUpSuccess());
    //     })
    //     .catch((err) => {
    //       dispatch(signUpError(err.response.data));
    //     });
    //   break;
    default:
      break;
  }
};
