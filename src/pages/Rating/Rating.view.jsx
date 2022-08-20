import { View } from "@vkontakte/vkui";
import { RatingPanel } from "./Rating.panel";

export const RatingView = ({ id }) => {
  return (
    <View id={id} activePanel={id + "_panel"}>
      <RatingPanel id={id + "_panel"} />
    </View>
  );
};
