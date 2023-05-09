import { AnyAction, createSlice } from '@reduxjs/toolkit';
import {
    GAME_SET_DATA,
    GAME_SET_GAMELIST,
    GAME_SET_GAMES_ONLINE,
    GAME_SET_NAME,
    SLICE_NAMES,
} from '../../../configs/config.redux';
import { GameListType } from '../../../types/data.game';

export interface GameInitState {
    gameName: null | string;
    gameData: null | any;
    gameList: GameListType;
    gamesOnline: number;
}

const initialState: GameInitState = {
    gameName: null,
    gameData: null,
    gameList: [
        {
            id: 'wheel',
            name: 'wheel',
        },
        {
            id: 'double',
            name: 'double',
        },
        {
            id: 'dice',
            name: 'dice',
        },
        {
            id: 'down7up',
            name: 'down 7 up',
        },
    ],
    gamesOnline: 0,
};

export const gameSlice = createSlice({
    name: SLICE_NAMES.GAME,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GAME_SET_DATA, (state, action: AnyAction) => {
                return { ...state, gameData: action.payload };
            })
            .addCase(GAME_SET_NAME, (state, action: AnyAction) => {
                return { ...state, gameName: action.payload };
            })
            .addCase(GAME_SET_GAMELIST, (state, action: AnyAction) => {
                return { ...state, gameList: action.payload };
            })
            .addCase(GAME_SET_GAMES_ONLINE, (state, action: AnyAction) => {
                return { ...state, gamesOnline: action.payload };
            });
    },
});

export const gameSliceActions = gameSlice.actions;
export const gameSliceReducer = gameSlice.reducer;
