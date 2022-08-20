import {
  Avatar,
  Panel,
  PanelHeader,
  PanelHeaderContent,
} from "@vkontakte/vkui";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  CustomSnackbar,
  GameList,
  Loading,
  PaddingWrapper,
  ProfileActions,
  UserBalance,
} from "../../lib/components";
import { AppName } from "../../lib/configs/config.main";
import { VIEW_HOME } from "../../lib/configs/config.vkui";
import { getUserData } from "../../lib/modules/serverRequests";

export const HomePanel = ({ id }) => {
  const { vkData, serverData } = useSelector((s) => {
    return { vkData: s.user.vkData, serverData: s.user.serverData };
  });

  useEffect(() => {
    const updateUser = setInterval(() => {
      getUserData(vkData.id);
    }, 10000);
    return () => clearInterval(updateUser);
  }, []);

  if (!vkData || !serverData) {
    return <Loading />;
  }

  return (
    <Panel id={id}>
      <PanelHeader
        before={<Avatar size={34} src={vkData?.photo_100} />}
        separator={false}
      >
        <PanelHeaderContent
          status={`${vkData?.first_name} ${vkData?.last_name}`}
        >
          {AppName}
        </PanelHeaderContent>
      </PanelHeader>
      <PaddingWrapper>
        <UserBalance size="l" title="Баланс" />
        <ProfileActions />
        <GameList />
      </PaddingWrapper>
      <CustomSnackbar viewName={VIEW_HOME} />
    </Panel>
  );
};
