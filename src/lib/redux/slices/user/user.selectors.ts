import { RootState } from '../..';

export const vkDataSelector = (state: RootState) => {
    return state.user.vkData;
};

export const serverDataSelector = (state: RootState) => {
    return state.user.serverData;
};

export const balanceSelector = (state: RootState) => {
    return state.user.serverData?.balance || 0;
};
