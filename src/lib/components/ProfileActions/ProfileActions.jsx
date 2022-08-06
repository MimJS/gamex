import { ProfileActionButton } from "../index";
import { Icon36GiftOutline, Icon28MenuOutline, Icon28CrownOutline, Icon36VideoOutline } from "@vkontakte/icons";
import "./ProfileActions.scss";

export const ProfileActions = () => {
  return (
    <>
      <div className="ProfileActions">
        <ProfileActionButton
          icon={<Icon36GiftOutline />}
          text={"Получить бонус"}
        />
        <ProfileActionButton
          icon={<Icon36VideoOutline />}
          text={"Бонус за рекламу"}
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
        />
      </div>
    </>
  );
};
