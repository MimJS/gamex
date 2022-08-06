import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { VKUIProvider } from "./lib/components";
import bride from "@vkontakte/vk-bridge";
import { UseVKBridge } from "./lib/configs/config.main";
import { Provider } from "react-redux";
import { store } from "./lib/redux";

if (UseVKBridge) {
  // init vk-bridge
  bride.send("VKWebAppInit");
}

// render app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <VKUIProvider>
      <App />
    </VKUIProvider>
  </Provider>
);
