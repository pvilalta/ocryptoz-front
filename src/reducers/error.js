import { CLOSE_ERROR } from '../actions/errorActions';
import { LOGIN_ERROR } from '../actions/signInActions';
import { SIGNUP_ERROR } from '../actions/signUpActions';

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
    case SIGNUP_ERROR:
      return {
        ...state,
        error: {
          errorMessage: action.payload,
          isError: true,
        },
      };
    default:
      return state;
  }
};

export default error;
