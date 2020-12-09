import {
  GET_MAIN_WALLET,
  GET_MAIN_WALLET_SUCCESS,
} from '../actions/walletActions';

const initialState = {
  mainWallet: [],
};

const wallet = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_MAIN_WALLET:
      return {
        ...state,
      };
    case GET_MAIN_WALLET_SUCCESS:
      return {
        ...state,
        mainWallet: [...action.payload],
      };
    default:
      return state;
  }
};

export default wallet;
