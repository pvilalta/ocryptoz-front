import { CLOSE_ERROR } from '../actions/errorActions';
import { LOGIN_ERROR, LOGIN_SUBMIT } from '../actions/signInActions';
import { SIGNUP_ERROR, SIGNUP_SUBMIT } from '../actions/signUpActions';

const initialState = {
  error: {
    errorMessage: '',
    isError: false,
  },
};

const error = (state = initialState, action = {}) => {
  switch (action.type) {
    case CLOSE_ERROR:
      return {
        ...state,
        error: {
          errorMessage: '',
          isError: false,
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
    case LOGIN_SUBMIT:
      return {
        ...state,
        error: {
          errorMessage: '',
          isError: false,
        },
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        error: {
          errorMessage: action.payload,
          isError: true,
        },
      };
    case SIGNUP_SUBMIT:
      return {
        ...state,
        error: {
          errorMessage: '',
          isError: false,
        },
      };
    default:
      return state;
  }
};

export default error;
