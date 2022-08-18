import {
  USER_DEC_BALANCE,
  USER_INC_BALANCE,
  USER_SET_SERVER_DATA,
  USER_SET_VK_DATA,
  USER_SET_VK_TOKEN,
  USER_SET_VK_TOKEN_RIGHTS,
  USER_UPDATE_BALANCE,
} from "../../configs/config.redux";

const init = {
  vkData: null,
  serverData: null,
  vkToken: null,
  vkTokenRights: null,
};

/* examle serverData:
    balance: Number
*/

export const UserReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_SET_VK_DATA:
      return { ...state, vkData: payload };
    case USER_SET_SERVER_DATA:
      return { ...state, serverData: payload };
    case USER_SET_VK_TOKEN:
      return { ...state, vkToken: payload };
    case USER_SET_VK_TOKEN_RIGHTS:
      return { ...state, vkTokenRights: payload };
    case USER_UPDATE_BALANCE:
      return {
        ...state,
        serverData: { ...state.serverData, balance: payload },
      };
    case USER_INC_BALANCE:
      return {
        ...state,
        serverData: {
          ...state.serverData,
          balance: Number(state.serverData.balance + payload),
        },
      };
    case USER_DEC_BALANCE:
      return {
        ...state,
        serverData: {
          ...state.serverData,
          balance: Number(state.serverData.balance - payload),
        },
      };
    default:
      return state;
  }
};
