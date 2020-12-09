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

const initialState = {
  signInData: {
    email: '',
    password: '',
  },
  loggedData: {
    firstName: '',
    lastName: '',
    email: '',
  },
  signUpData: {
    firstname: '',
    lastname: '',
    email: '',
    country: '',
    password: '',
    passwordConfirmation: '',
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
          firstName: action.payload.firstname,
          lastName: action.payload.lastname,
          email: action.payload.email,
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
      };
    default:
      return state;
  }
};

export default user;
