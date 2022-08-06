import {
  Avatar,
  Panel,
  PanelHeader,
  PanelHeaderContent,
} from "@vkontakte/vkui";
import { useSelector } from "react-redux";
import {
  GameList,
  Loading,
  PaddingWrapper,
  ProfileActions,
  UserBalance,
} from "../../lib/components";
import { AppName } from "../../lib/configs/config.main";

export const HomePanel = ({ id }) => {
  const { vkData, serverData } = useSelector((s) => {
    return { vkData: s.user.vkData, serverData: s.user.serverData };
  });

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
    </Panel>
  );
};
