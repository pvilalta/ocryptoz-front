import { LOGIN_INPUT_CHANGE } from '../actions/signInActions';

const initialState = {
  logData: {
    email: '',
    password: '',
  },
  signData: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_INPUT_CHANGE:
      return {
        ...state,
        logData: {
          ...state.logData,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default user;
