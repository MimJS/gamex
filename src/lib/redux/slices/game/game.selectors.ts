import { RootState } from '../..';

export const gameListSelector = (state: RootState) => {
    return state.game.gameList;
};
