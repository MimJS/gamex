import { createSlice } from '@reduxjs/toolkit';
import type { AnyAction } from '@reduxjs/toolkit';

import {
    SLICE_NAMES,
    USER_DEC_BALANCE,
    USER_INC_BALANCE,
    USER_SET_SERVER_DATA,
    USER_SET_VK_DATA,
    USER_SET_VK_TOKEN,
    USER_SET_VK_TOKEN_RIGHTS,
    USER_UPDATE_BALANCE,
} from '../../../configs/config.redux';
import { VKDataInterface } from '../../../types/api.vk';
import { ServerDataInterface } from '../../../types/api.server';

export interface UserInitState {
    vkData: null | VKDataInterface;
    serverData: null | ServerDataInterface;
    vkToken: null | string;
    vkTokenRights: null | string[];
}

const initialState: UserInitState = {
    vkData: null,
    serverData: null,
    vkToken: null,
    vkTokenRights: null,
};

export const userSlice = createSlice({
    name: SLICE_NAMES.USER,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(USER_SET_VK_DATA, (state, action: AnyAction) => {
                return { ...state, vkData: action.payload };
            })
            .addCase(USER_SET_SERVER_DATA, (state, action: AnyAction) => {
                return { ...state, serverData: action.payload };
            })
            .addCase(USER_SET_VK_TOKEN, (state, action: AnyAction) => {
                return { ...state, vkToken: action.payload };
            })
            .addCase(USER_SET_VK_TOKEN_RIGHTS, (state, action: AnyAction) => {
                return { ...state, vkTokenRights: action.payload };
            })
            .addCase(USER_UPDATE_BALANCE, (state, action: AnyAction) => {
                if (!state.serverData) {
                    return state;
                }

                return {
                    ...state,
                    serverData: { ...state.serverData, balance: action.payload },
                };
            })
            .addCase(USER_INC_BALANCE, (state, action: AnyAction) => {
                if (!state.serverData) {
                    return state;
                }

                return {
                    ...state,
                    serverData: {
                        ...state.serverData,
                        balance: Number(state.serverData.balance + action.payload),
                    },
                };
            })
            .addCase(USER_DEC_BALANCE, (state, action: AnyAction) => {
                if (!state.serverData) {
                    return state;
                }

                return {
                    ...state,
                    serverData: {
                        ...state.serverData,
                        balance: Number(state.serverData.balance - action.payload),
                    },
                };
            });
    },
});

export const userSliceActions = userSlice.actions;
export const userSliceReducer = userSlice.reducer;
