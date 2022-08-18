import axios from "axios";
import { AppID, AppVersion } from "../configs/config.main";
import {
  USER_INC_BALANCE,
  USER_SET_SERVER_DATA,
} from "../configs/config.redux";
import {
  SERVER_AD_BONUS_GET,
  SERVER_BUTTON_BONUS_GET,
  SERVER_DEV_URL,
  SERVER_USER_GET,
} from "../configs/config.server";
import { store } from "../redux";

const SERVER_STATUS = {
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
};

export const serverRequest = async (type, payload = {}) => {
  console.log(SERVER_DEV_URL + type);
  const { data } = await axios.post(SERVER_DEV_URL + type, {
    auth: {
      vkAppId: AppID,
      vkQueryString: window.location.search.replace("?", ""),
      vkAppVersion: AppVersion,
      vkUserId: store.getState()?.user?.vkData?.id,
    },
    payload,
  });
  return data;
};

export const getUserData = async () => {
  const { status, data } = await serverRequest(SERVER_USER_GET);
  if (status == SERVER_STATUS.SUCCESS) {
    store.dispatch({
      type: USER_SET_SERVER_DATA,
      payload: data,
    });
  }
};

export const getButtonBonus = async () => {
  const { status, result, bonusSum } = await serverRequest(
    SERVER_BUTTON_BONUS_GET
  );
  if (status == SERVER_STATUS.SUCCESS) {
    if (result) {
      store.dispatch({
        type: USER_INC_BALANCE,
        payload: bonusSum,
      });
    }
    return { result, bonusSum };
  }
};

export const getAdBonus = async () => {
  const { status, result, bonusSum } = await serverRequest(SERVER_AD_BONUS_GET);
  if (status == SERVER_STATUS.SUCCESS) {
    if (result) {
      store.dispatch({
        type: USER_INC_BALANCE,
        payload: bonusSum,
      });
    }
    return { result, bonusSum };
  }
};
