import { Root } from "@vkontakte/vkui";
import { useState } from "react";
import { ACTIVE_VIEWS, VIEW_HOME } from "./lib/configs/config.vkui";
import { HomeView } from "./pages/Home/Home.view";
import "./lib/styles/index.scss";

export const App = () => {
  const [activeView, setActiveView] = useState(VIEW_HOME);
  const setView = (name) => {
    if (activeView == name) {
      return;
    }
    if (!ACTIVE_VIEWS.includes(name)) {
      return;
    }
    setActiveView(name);
  };

  return (
    <Root activeView={activeView}>
      <HomeView id={VIEW_HOME} />
    </Root>
  );
};
