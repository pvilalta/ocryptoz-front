import { SHOW_EVENT_FORM } from '../actions/assetArrayActions';
import {
  EVENT_INPUT_CHANGE,
  EVENT_SUBMIT,
  EVENT_SUCCESS,
} from '../actions/eventActions';

const initialState = {
  showForm: false,
  dataForm: {
    type: 'buy',
    date: new Date(),
  },
};

const event = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_EVENT_FORM:
      return {
        ...state,
        showForm: !state.showForm,
      };
    case EVENT_INPUT_CHANGE:
      return {
        ...state,
        dataForm: {
          ...state.dataForm,
          ...action.payload,
        },
      };
    case EVENT_SUBMIT:
      return {
        ...state,
      };
    case EVENT_SUCCESS:
      return {
        ...state,
        showForm: false,
        dataForm: {},
        dataForm: {
          type: 'buy',
          date: new Date(),
        },
      };
    default:
      return state;
  }
};

export default event;
