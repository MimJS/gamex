import bridge from '@vkontakte/vk-bridge';
import { AppID } from '../configs/config.main';
import { USER_SET_VK_TOKEN } from '../configs/config.redux';
import { store } from '../redux';

export const requestVKToken = async (scope = '') => {
    const response = await bridge.send('VKWebAppGetAuthToken', {
        app_id: AppID,
        scope,
    });
    if (response.access_token) {
        store.dispatch({
            type: USER_SET_VK_TOKEN,
            payload: response.access_token,
        });
    }
    return response.access_token || null;
};

export const getUsersData = async (ids) => {
    let token = store.getState().user.vkToken;
    if (!token) {
        const newToken = await requestVKToken();
        if (newToken) {
            token = newToken;
        } else {
            return null;
        }
    }
    const { response } = await bridge.send('VKWebAppCallAPIMethod', {
        method: 'users.get',
        params: {
            user_ids: ids.toString(),
            fields: 'photo_100',
            access_token: token,
            v: 5.131,
        },
    });
    if (response) {
        return response;
    } else {
        return null;
    }
};
