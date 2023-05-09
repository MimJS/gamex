import { View } from '@vkontakte/vkui';
import { HomePanel } from './Home.panel';

export const HomeView = ({ id }) => {
    return (
        <View id={id} activePanel={id + '_panel'}>
            <HomePanel id={id + '_panel'} />
        </View>
    );
};
