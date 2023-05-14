import { lazy } from 'react';

const UserDetails = lazy(() => import('../components/UserDetails'));
const UserApiData = lazy(() => import('../components/UserApiData'));


export const userRoutes = [
    {
        path: '/user-management/users',
        component: UserApiData,
        title: "User Management Api",
        exact: true,

    }, {
        path: '/users',
        component: UserApiData,
        title: "List Of users tha have been loaded from Api",
        exact: true,

    },

    {
        path: '/users/:id',
        component: UserDetails,
        title: "Fetched User Details from API",
        exact: true,

    },
]