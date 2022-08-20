import { Snackbar } from "@vkontakte/vkui";
import "./CustomSnackbar.scss";

import {
  Icon28CancelCircleFillRed,
  Icon28CheckCircleFill,
  Icon28BlockCircleFillGray,
} from "@vkontakte/icons";
import { useDispatch, useSelector } from "react-redux";
import { UI_SET_SNACKBAR } from "../../configs/config.redux";

export const CustomSnackbar = ({ viewName }) => {
  const Icons = {
    warning: <Icon28BlockCircleFillGray />,
    error: <Icon28CancelCircleFillRed />,
    success: <Icon28CheckCircleFill />,
  };

  const dispatch = useDispatch();

  const snackbar = useSelector((s) => s.ui.snackbar[viewName]);

  const onSnackbarClose = () => {
    dispatch({
      type: UI_SET_SNACKBAR,
      payload: {
        view: viewName,
        snackbar: null,
      },
    });
  };

  return snackbar ? (
    <Snackbar
      before={Icons[snackbar.type]}
      onClose={onSnackbarClose}
      duration={1200}
    >
      {snackbar.text}
    </Snackbar>
  ) : null;
};
