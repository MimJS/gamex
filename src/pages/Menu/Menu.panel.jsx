import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  PanelHeaderContent,
} from "@vkontakte/vkui";
import { useDispatch } from "react-redux";
import { MenuItems, PaddingWrapper } from "../../lib/components";
import { UI_SET_VIEW } from "../../lib/configs/config.redux";
import { VIEW_HOME } from "../../lib/configs/config.vkui";

export const MenuPanel = ({ id }) => {
  const dispatch = useDispatch();

  const onClose = () => {
    return dispatch({
      type: UI_SET_VIEW,
      payload: VIEW_HOME,
    });
  };

  return (
    <Panel id={id}>
      <PanelHeader
        separator={false}
        before={<PanelHeaderBack onClick={onClose} />}
      >
        <PanelHeaderContent status>Меню</PanelHeaderContent>
      </PanelHeader>
      <PaddingWrapper>
        <MenuItems />
      </PaddingWrapper>
    </Panel>
  );
};
