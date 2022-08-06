import {
  USER_SET_SERVER_DATA,
  USER_SET_VK_DATA,
  USER_SET_VK_TOKEN,
  USER_SET_VK_TOKEN_RIGHTS,
} from "../../configs/config.redux";

const init = {
  vkData: null,
  serverData: {
    balance: 1000,
  },
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
    default:
      return state;
  }
};
