import { View } from "@vkontakte/vkui";
import { MenuPanel } from "./Menu.panel";

export const MenuView = ({ id }) => {
  return (
    <View id={id} activePanel={id + "_panel"}>
      <MenuPanel id={id + "_panel"} />
    </View>
  );
};
