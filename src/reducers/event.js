import { SHOW_EVENT_FORM } from '../actions/assetArrayActions';
import {
  EVENT_INPUT_CHANGE,
  EVENT_SUBMIT,
  EVENT_SUCCESS,
  GET_PLATFORM_EXCHANGE_SUCCESS,
  GET_ASSET_SUCCESS,
  EVENT_FORM_CHOICE,
} from '../actions/eventActions';

const initialState = {
  showForm: false,
  dataForm: {
    type: 'buy',
    date: new Date(),
  },
  platformExchange: [],
  asset: [],
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
    case GET_PLATFORM_EXCHANGE_SUCCESS:
      return {
        ...state,
        platformExchange: action.payload,
      };
    case GET_ASSET_SUCCESS:
      return {
        ...state,
        asset: action.payload,
      };
    case EVENT_FORM_CHOICE:
      return {
        ...state,
        dataForm: {
          ...state.dataForm,
          type: action.payload,
        },
      };
    default:
      return state;
  }
};

export default event;
