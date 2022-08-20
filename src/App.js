import { Root } from "@vkontakte/vkui";
import {
  VIEW_DICE,
  VIEW_HOME,
  VIEW_MENU,
  VIEW_RATING,
} from "./lib/configs/config.vkui";
import { HomeView } from "./pages/Home/Home.view";
import "./lib/styles/index.scss";
import { useSelector } from "react-redux";
import { MenuView } from "./pages/Menu/Menu.view";
import { DiceView } from "./pages/Dice/Dice.view";
import { RatingView } from "./pages/Rating/Rating.view";

export const App = () => {
  const activeView = useSelector((s) => s.ui.activeView);

  return (
    <Root activeView={activeView}>
      <HomeView id={VIEW_HOME} />
      <RatingView id={VIEW_RATING} />
      <MenuView id={VIEW_MENU} />
      <DiceView id={VIEW_DICE} />
    </Root>
  );
};
