import { Avatar, Panel, PanelHeader, PanelHeaderContent } from '@vkontakte/vkui';
import React, { FC, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { GameList, Loading, PaddingWrapper, ProfileActions, UserBalance } from '../../lib/components';
import { AppName } from '../../lib/configs/config.main';
import { getUserData } from '../../lib/modules/serverRequests';
import { serverDataSelector, vkDataSelector } from '../../lib/redux/slices/user/user.selectors';

interface HomePanelProps {
    id: string;
}

export const HomePanel: FC<HomePanelProps> = ({ id }) => {
    const vkData = useSelector(vkDataSelector);
    const serverData = useSelector(serverDataSelector);

    const timeoutRef = useRef<undefined | NodeJS.Timeout>(undefined);

    useEffect(() => {
        if (!vkData) {
            clearInterval(timeoutRef.current);

            return;
        }

        timeoutRef.current = setInterval(() => {
            getUserData();
        }, 10000);
        return () => clearInterval(timeoutRef.current);
    }, []);

    if (!vkData || !serverData) {
        return (
            <Panel id={id}>
                <Loading />
            </Panel>
        );
    }

    return (
        <Panel id={id}>
            <PanelHeader before={<Avatar size={34} src={vkData.photo_100} />} separator={false}>
                <PanelHeaderContent status={`${vkData.first_name} ${vkData.last_name}`}>{AppName}</PanelHeaderContent>
            </PanelHeader>
            <PaddingWrapper>
                <UserBalance size="l" title="Баланс" />
                <ProfileActions />
                <GameList />
            </PaddingWrapper>
        </Panel>
    );
};
