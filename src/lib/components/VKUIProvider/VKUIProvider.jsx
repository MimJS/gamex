import { AdaptivityProvider, AppRoot, ConfigProvider } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { VKUIconfigProvider } from "../../configs/config.vkui";

export const VKUIProvider = ({ children }) => {
  return (
    <ConfigProvider {...VKUIconfigProvider.ConfigProvider}>
      <AdaptivityProvider {...VKUIconfigProvider.AdaptivityProvider}>
        <AppRoot>{children}</AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
