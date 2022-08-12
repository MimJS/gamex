import { View } from "@vkontakte/vkui";
import { DicePanel } from "./Dice.panel";

export const DiceView = ({ id }) => {
  return (
    <View id={id} activePanel={id + "_panel"}>
      <DicePanel id={id + "_panel"} />
    </View>
  );
};
