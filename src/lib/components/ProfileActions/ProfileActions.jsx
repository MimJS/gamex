import { ProfileActionButton } from "../index";
import {
  Icon36GiftOutline,
  Icon28MenuOutline,
  Icon28CrownOutline,
  Icon36VideoOutline,
} from "@vkontakte/icons";
import "./ProfileActions.scss";
import { useDispatch } from "react-redux";
import { UI_SET_VIEW } from "../../configs/config.redux";
import { VIEW_MENU } from "../../configs/config.vkui";
import { getAdBonus, getButtonBonus } from "../../modules/serverRequests";

export const ProfileActions = () => {
  const dispatch = useDispatch();

  const openMenu = () => {
    return dispatch({
      type: UI_SET_VIEW,
      payload: VIEW_MENU,
    });
  };

  const getBonus = (type) => {
    if (type === "button") {
      getButtonBonus();
    }
    if (type === "ad") {
      getAdBonus();
    }
  };

  return (
    <>
      <div className="ProfileActions">
        <ProfileActionButton
          icon={<Icon36GiftOutline />}
          text={"Получить бонус"}
          onClick={() => getBonus("button")}
        />
        <ProfileActionButton
          icon={<Icon36VideoOutline />}
          text={"Бонус за рекламу"}
          onClick={() => getBonus("ad")}
        />
      </div>
      <div className="ProfileActions">
        <ProfileActionButton
          icon={<Icon28CrownOutline width={36} height={36} />}
          text={"Топ дня"}
        />
        <ProfileActionButton
          icon={<Icon28MenuOutline width={36} height={36} />}
          text={"Меню"}
          onClick={openMenu}
        />
      </div>
    </>
  );
};
