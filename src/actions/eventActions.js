export const EVENT_INPUT_CHANGE = 'EVENT_INPUT_CHANGE';
export const EVENT_SUBMIT = 'EVENT_SUBMIT';
export const EVENT_SUCCESS = 'EVENT_SUCCESS';
export const EVENT_ERROR = 'EVENT_ERROR';
export const GET_PLATFORM_EXCHANGE = 'GET_PLATFORM_EXCHANGE';
export const GET_PLATFORM_EXCHANGE_SUCCESS = 'GET_PLATFORM_EXCHANGE_SUCCESS';
export const GET_ASSET = 'GET_ASSET';
export const GET_ASSET_SUCCESS = 'GET_ASSET_SUCCESS';

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

export const getPlatformExchange = () => ({
  type: GET_PLATFORM_EXCHANGE,
});

export const getPlatformExchangeSuccess = (payload) => ({
  type: GET_PLATFORM_EXCHANGE_SUCCESS,
  payload,
});

export const getAsset = () => ({
  type: GET_ASSET,
});

export const getAssetSuccess = (payload) => ({
  type: GET_ASSET_SUCCESS,
  payload,
});
