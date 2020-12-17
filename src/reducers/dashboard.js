import { SHOW_EVENT_FORM, SHOW_DASHBOARD } from '../actions/dashboardActions';

const initialState = {
  display: {
    showDash: true,
    showForm: false,
    showWallet: false,
    showSettings: false,
    showContact: false,
  },
};

const dashboard = (state = initialState, action = {}) => {
  switch (action.type) {
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

    default:
      return state;
  }
};

export default dashboard;
