export const SHOW_DASHBOARD = 'SHOW_DASHBOARD';
export const SHOW_WALLETS = 'SHOW_WALLETS';
export const SHOW_SETTINGS = 'SHOW_SETTINGS';
export const SHOW_CONTACT = 'SHOW_CONTACT';
export const SHOW_EVENT_FORM = 'SHOW_EVENT_FORM';

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
