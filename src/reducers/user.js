import {
  LOGIN_INPUT_CHANGE,
  LOGIN_SUBMIT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CLOSE_ERROR,
} from '../actions/signInActions';

import { SIGNUP_INPUT_CHANGE } from '../actions/signUpActions';

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
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
  error: {
    errorMessage: '',
    isError: false,
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
    case LOGIN_ERROR:
      return {
        ...state,
        error: {
          errorMessage: action.payload,
          isError: true,
        },
      };
    case CLOSE_ERROR:
      return {
        ...state,
        error: {
          errorMEssage: '',
          isError: false,
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
    default:
      return state;
  }
};

export default user;
