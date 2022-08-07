import { Root } from "@vkontakte/vkui";
import { VIEW_HOME, VIEW_MENU } from "./lib/configs/config.vkui";
import { HomeView } from "./pages/Home/Home.view";
import "./lib/styles/index.scss";
import { useSelector } from "react-redux";
import { MenuView } from "./pages/Menu/Menu.view";

export const App = () => {
  const activeView = useSelector((s) => s.ui.activeView);

  return (
    <Root activeView={activeView}>
      <HomeView id={VIEW_HOME} />
      <MenuView id={VIEW_MENU} />
    </Root>
  );
};
