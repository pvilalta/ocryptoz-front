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
  signUpData: {
    firstname: '',
    lastname: '',
    email: '',
    country: '',
    password: '',
    passwordConfirmation: '',
  },
  loggedData: {},
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
          id: action.payload.id,
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
          email: action.payload.email,
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
    default:
      return state;
  }
};

export default user;
