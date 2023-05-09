import { ProfileActionButton } from '../index';
import { Icon36GiftOutline, Icon28MenuOutline, Icon28CrownOutline, Icon36VideoOutline } from '@vkontakte/icons';
import './ProfileActions.scss';
import { getAdBonus, getButtonBonus } from '../../modules/serverRequests';

export const ProfileActions = () => {
    const openMenu = () => {};

    const openTopDay = () => {};

    const getBonus = (type) => {
        if (type === 'button') {
            getButtonBonus();
        }
        if (type === 'ad') {
            getAdBonus();
        }
    };

    return (
        <>
            <div className="ProfileActions">
                <ProfileActionButton
                    icon={<Icon36GiftOutline />}
                    text={'Получить бонус'}
                    onClick={() => getBonus('button')}
                />
                <ProfileActionButton
                    icon={<Icon36VideoOutline />}
                    text={'Бонус за рекламу'}
                    onClick={() => getBonus('ad')}
                />
            </div>
            <div className="ProfileActions">
                <ProfileActionButton
                    icon={<Icon28CrownOutline width={36} height={36} />}
                    text={'Топ дня'}
                    onClick={openTopDay}
                />
                <ProfileActionButton
                    icon={<Icon28MenuOutline width={36} height={36} />}
                    text={'Меню'}
                    onClick={openMenu}
                />
            </div>
        </>
    );
};
