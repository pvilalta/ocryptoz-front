import {
  SHOW_DASHBOARD,
  SHOW_EVENT_FORM,
  GET_ALL_WALLET,
  GET_ALL_WALLET_SUCCESS,
} from '../actions/mainPageActions';

const initialState = {
  display: {
    showDash: true,
    showForm: false,
    showWallet: false,
    showSettings: false,
    showContact: false,
  },
  allWallet: [],
};

const dashboard = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_DASHBOARD:
      return {
        ...state,
        display: {
          showDash: true,
          showForm: false,
          showWallet: false,
          showContact: false,
        },
      };
    case SHOW_EVENT_FORM:
      return {
        ...state,
        display: {
          showDash: false,
          showForm: true,
          showWallet: false,
          showContact: false,
        },
      };

    case GET_ALL_WALLET:
      return {
        ...state,
      };
    case GET_ALL_WALLET_SUCCESS:
      return {
        ...state,
        allWallet: [...action.payload],
      };

    default:
      return state;
  }
};

export default dashboard;
