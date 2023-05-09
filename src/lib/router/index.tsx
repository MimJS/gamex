import React, { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes';

export const router = createBrowserRouter(ROUTES);

export const RouterWrapper: FC = () => {
    return <RouterProvider router={router} />;
};
