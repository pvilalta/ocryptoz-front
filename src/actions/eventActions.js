export const EVENT_INPUT_CHANGE = 'EVENT_INPUT_CHANGE';
export const EVENT_SUBMIT = 'EVENT SUBMIT';
export const EVENT_SUCCESS = 'EVENT SUCCESS';
export const EVENT_ERROR = 'EVENT ERROR';

export const eventInputChange = (payload) => ({
  type: EVENT_INPUT_CHANGE,
  payload,
});

export const eventSubmit = () => ({
  type: EVENT_SUBMIT,
});

export const eventSuccess = (payload) => ({
  type: EVENT_SUCCESS,
  payload,
});

export const eventError = (payload) => ({
  type: EVENT_ERROR,
  payload,
});
