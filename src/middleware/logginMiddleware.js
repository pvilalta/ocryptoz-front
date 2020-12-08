import axios from 'axios';
import {
  LOGIN_SUBMIT,
  loginSuccess,
  loginError,
} from '../actions/signInActions';

const url = 'http://localhost:1234/login';

export default (store) => (next) => (action) => {
  next(action);

  switch (action.type) {
    case LOGIN_SUBMIT:
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
    default:
  }
};
