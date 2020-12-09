export const SIGNUP_INPUT_CHANGE = 'SIGNUP_INPUT_CHANGE';
export const SIGNUP_SUBMIT = 'SIGNUP_SUBMIT';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const signUpInputChange = (payload) => ({
  type: SIGNUP_INPUT_CHANGE,
  payload,
});

export const signUpSubmit = () => ({
  type: SIGNUP_SUBMIT,
});

export const signUpSuccess = () => ({
  type: SIGNUP_SUCCESS,
});

export const signUpError = (payload) => ({
  type: SIGNUP_ERROR,
  payload,
});
