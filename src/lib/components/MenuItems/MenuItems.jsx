import {
  Icon24ArticleBoxOutline,
  Icon24GiftOutline,
  Icon24Users3Outline,
  Icon24RobotOutline,
} from "@vkontakte/icons";
import { SimpleCell } from "@vkontakte/vkui";
import "./MenuItems.scss";

export const MenuItems = () => {
  return (
    <div className="MenuItems">
      <SimpleCell
        hasHover={false}
        hasActive={false}
        before={<Icon24GiftOutline fill="var(--color__fourth)" />}
      >
        Активировать промокод
      </SimpleCell>
      <SimpleCell
        hasHover={false}
        hasActive={false}
        before={<Icon24Users3Outline fill="var(--color__fourth)" />}
      >
        Наша группа
      </SimpleCell>
      <SimpleCell
        hasHover={false}
        hasActive={false}
        before={<Icon24RobotOutline fill="var(--color__fourth)" />}
      >
        Тех. поддержка
      </SimpleCell>
      <SimpleCell
        hasHover={false}
        hasActive={false}
        before={<Icon24ArticleBoxOutline fill="var(--color__fourth)" />}
      >
        Пользовательское соглашение
      </SimpleCell>
    </div>
  );
};
