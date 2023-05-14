import { lazy } from 'react';

const Home = lazy(() => import('../components/Home'));


export const homeRoutes = [
    {
        path: '/home',
        component: Home,
        exact: true,
        title: 'Home',

    }
]