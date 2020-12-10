import { SHOW_EVENT_FORM } from '../actions/assetArrayActions';

const initialState = {
  showForm: false,
};

const event = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_EVENT_FORM:
      return {
        ...state,
        showForm: !state.showForm,
      };
    default:
      return state;
  }
};

export default event;
