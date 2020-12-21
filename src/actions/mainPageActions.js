export const SHOW_DASHBOARD = 'SHOW_DASHBOARD';
export const SHOW_WALLETS = 'SHOW_WALLETS';
export const SHOW_SETTINGS = 'SHOW_SETTINGS';
export const SHOW_CONTACT = 'SHOW_CONTACT';
export const SHOW_EVENT_FORM = 'SHOW_EVENT_FORM';
export const GET_ALL_WALLET = 'GET_ALL_WALLET';
export const GET_ALL_WALLET_SUCCESS = 'GET_ALL_WALLET_SUCCESS';
export const LOGOUT_SUBMIT = 'LOGOUT_SUBMIT';
export const LOGOUT_SUBMIT_SUCCESS = 'LOGOUT_SUBMIT_SUCCESS';

export const showDashboard = () => ({
  type: SHOW_DASHBOARD,
});

export const showWallets = () => ({
  type: SHOW_WALLETS,
});

export const showSettings = () => ({
  type: SHOW_SETTINGS,
});

export const showContact = () => ({
  type: SHOW_CONTACT,
});

export const showEventForm = () => ({
  type: SHOW_EVENT_FORM,
});

export const getAllWallet = () => ({
  type: GET_ALL_WALLET,
});

export const getAllWalletSuccess = (payload) => ({
  type: GET_ALL_WALLET_SUCCESS,
  payload,
});

export const logOutSubmit = () => ({
  type: LOGOUT_SUBMIT,
});

export const logOutSubmitSuccess = () => ({
  type: LOGOUT_SUBMIT_SUCCESS,
});
