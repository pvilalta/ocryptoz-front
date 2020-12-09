export const GET_MAIN_WALLET = 'GET MAIN WALLET';
export const GET_MAIN_WALLET_SUCCESS = 'GET MAIN WALLET SUCCESS';

export const getMainWallet = (payload) => ({
  type: GET_MAIN_WALLET,
  payload,
});

export const getMainWalletSuccess = (payload) => ({
  type: GET_MAIN_WALLET_SUCCESS,
  payload,
});
