import { Panel, PanelHeader, PanelHeaderBack, PanelHeaderContent } from '@vkontakte/vkui';
import { MenuItems, PaddingWrapper } from '../../lib/components';

export const MenuPanel = ({ id }) => {
    const onClose = () => {};

    return (
        <Panel id={id}>
            <PanelHeader separator={false} before={<PanelHeaderBack onClick={onClose} />}>
                <PanelHeaderContent status>Меню</PanelHeaderContent>
            </PanelHeader>
            <PaddingWrapper>
                <MenuItems />
            </PaddingWrapper>
        </Panel>
    );
};
