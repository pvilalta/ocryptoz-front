export const GET_MAIN_WALLET = 'GET MAIN WALLET';
export const GET_MAIN_WALLET_SUCCESS = 'GET MAIN WALLET SUCCESS';
export const GET_ASSET_PIE = 'GET_ASSET_PIE';
export const GET_ASSET_PIE_SUCCESS = 'GET_ASSET_PIE_SUCCESS';

export const getMainWallet = (payload) => ({
  type: GET_MAIN_WALLET,
  payload,
});

export const getMainWalletSuccess = (payload) => ({
  type: GET_MAIN_WALLET_SUCCESS,
  payload,
});

export const getAssetPie = () => ({
  type: GET_ASSET_PIE,
});

export const getAssetPieSuccess = () => ({
  type: GET_ASSET_PIE_SUCCESS,
});
