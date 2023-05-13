import { lazy, } from 'react';


const UserDetails = lazy(() => import('../components/UserDetails'));
const UserApiData = lazy(() => import('../components/layout/UserApiData'));
const Home = lazy(() => import('../components/layout/Home'));
// const AppHome = lazy(() => import('../components/layout/AppHome'));



export const routes = [
    {
        path: '/home',
        component: Home,
        exact: true,
        title: 'Home',

    },

    {
        path: 'user-management/users',
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



];
