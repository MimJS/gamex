import { configureStore } from '@reduxjs/toolkit';
import { gameSliceReducer, userSliceReducer } from './slices';

export const store = configureStore({
    reducer: {
        user: userSliceReducer,
        game: gameSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
