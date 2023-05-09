import React from 'react';
import { RouteObject } from 'react-router-dom';
import { ROUTES_PATH } from '../configs/config.router';
import { HomeView } from '../../pages/Home/Home.view';
import { VIEW_DICE, VIEW_HOME, VIEW_MENU, VIEW_RATING } from '../configs/config.vkui';
import { RatingView } from '../../pages/Rating/Rating.view';
import { MenuView } from '../../pages/Menu/Menu.view';
import { DiceView } from '../../pages/Dice/Dice.view';

export const ROUTES: RouteObject[] = [
    {
        path: ROUTES_PATH.HOME,
        element: <HomeView id={VIEW_HOME} />,
    },
    {
        path: ROUTES_PATH.RATING,
        element: <RatingView id={VIEW_RATING} />,
    },
    {
        path: ROUTES_PATH.MENU,
        element: <MenuView id={VIEW_MENU} />,
    },
    {
        path: ROUTES_PATH.DICE,
        element: <DiceView id={VIEW_DICE} />,
    },
];
