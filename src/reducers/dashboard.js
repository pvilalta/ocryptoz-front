import {
  GET_MAIN_WALLET,
  GET_MAIN_WALLET_SUCCESS,
  GET_ASSET_PIE,
  GET_ASSET_PIE_SUCCESS,
} from '../actions/dashboardActions';

const initialState = {
  mainWallet: [],
  assetPie: [],
};

const dashboard = (state = initialState, action = {}) => {
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
    case GET_ASSET_PIE:
      return {
        ...state,
      };
    case GET_ASSET_PIE_SUCCESS:
      return {
        ...state,
        assetPie: [...action.payload],
      };
    default:
      return state;
  }
};

export default dashboard;
