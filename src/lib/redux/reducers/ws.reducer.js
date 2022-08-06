import {
  WS_INIT,
  WS_SET_IS_CONNECTED,
  WS_SET_STATUS,
  WS_SET_TOKEN,
} from "../../configs/config.redux";

const init = {
  ws: null,
  wsStatus: null,
  wsConnected: false,
  wsToken: null,
};

export const WSReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case WS_INIT:
      return { ...state, ...payload };
    case WS_SET_IS_CONNECTED:
      return { ...state, wsConnected: payload };
    case WS_SET_STATUS:
      return { ...state, wsStatus: payload };
    case WS_SET_TOKEN:
      return { ...state, wsToken: payload };
    default:
      return state;
  }
};
