import {
  UI_SET_MODAL,
  UI_SET_POPOUT,
  UI_SET_VIEW,
} from "../../configs/config.redux";
import { ACTIVE_VIEWS, VIEW_HOME } from "../../configs/config.vkui";

const init = {
  activeView: VIEW_HOME,
  popout: {
    [VIEW_HOME]: null,
  },
  modal: {
    [VIEW_HOME]: null,
  },
};

export const UIReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case UI_SET_VIEW:
      if (!ACTIVE_VIEWS.includes(payload)) {
        return state;
      } else {
        return { ...state, activeView: payload };
      }
    case UI_SET_MODAL:
      return {
        ...state,
        modal: { ...state.modal, [payload.view]: payload.modal },
      };
    case UI_SET_POPOUT:
      return {
        ...state,
        popout: { ...state.popout, [payload.view]: payload.popout },
      };
    default:
      return state;
  }
};
