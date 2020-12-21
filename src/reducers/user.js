import {
  LOGIN_INPUT_CHANGE,
  LOGIN_SUBMIT,
  LOGIN_SUCCESS,
} from '../actions/signInActions';

import {
  SIGNUP_INPUT_CHANGE,
  SIGNUP_SUBMIT,
  SIGNUP_SUCCESS,
} from '../actions/signUpActions';

import {
  LOGOUT_SUBMIT,
  LOGOUT_SUBMIT_SUCCESS,
} from '../actions/mainPageActions';

const initialState = {
  signInData: {
    email: '',
    password: '',
  },
  signUpData: {
    firstname: '',
    lastname: '',
    email: '',
    country: '',
    password: '',
    passwordConfirmation: '',
  },
  loggedData: {
    // email: 'hey@hey.fr',
  },
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_INPUT_CHANGE:
      return {
        ...state,
        signInData: {
          ...state.signInData,
          ...action.payload,
        },
      };
    case LOGIN_SUBMIT:
      return {
        ...state,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedData: {
          email: state.signInData.email,
          currentWallet: action.payload,
        },
        signInData: {
          email: '',
          password: '',
        },
      };
    case SIGNUP_INPUT_CHANGE:
      return {
        ...state,
        signUpData: {
          ...state.signUpData,
          ...action.payload,
        },
      };
    case SIGNUP_SUBMIT:
      return {
        ...state,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signUpData: {
          firstname: '',
          lastname: '',
          email: '',
          country: '',
          password: '',
          passwordConfirmation: '',
        },
      };
    case LOGOUT_SUBMIT:
      return {
        ...state,
      };

    case LOGOUT_SUBMIT_SUCCESS:
      return {
        ...state,
        loggedData: {},
      };
    default:
      return state;
  }
};

export default user;
