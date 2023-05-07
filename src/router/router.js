import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Navbar from '../components/layout/Navbar';

const UserDetails = lazy(() => import('../components/UserDetails'));
const UserApiData = lazy(() => import('../components/layout/UserApiData'));
const Home = lazy(() => import('../components/layout/Home'));

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
        title: 'Home',
        menu: {
            title: 'Home ',
            icon: 'home',
        },
    },

    {
        path: '/users',
        component: UserApiData,
        title: "List Of users tha have been loaded from Api",
        exact: true,
        menu: {
            title: 'Home ',
            icon: 'home',
        },
    }, {
        path: '/users/:id',
        component: UserDetails,
        title: "Fetched User Details from API",
        exact: true,
        menu: {
            title: 'Get User Details ',
            icon: 'home',
        },
    },


    {
        path: '/dashboard',
        component: Home,
        exact: true,
        menu: {
            title: 'Dashboard',
            icon: 'dashboard',
            children: [
                {
                    path: '/dashboard/settings',
                    title: 'Settings',
                },
                {
                    path: '/dashboard/analytics',
                    title: 'Analytics',
                },
            ],
        },
    },
];

const Routes = () => {

    return (
        <Router>

            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        {routes.map((route) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                render={() => (
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <route.component title={route.title} />
                                    </Suspense>
                                )}
                            />
                        ))}
                    </Switch>
                </div>

            </div>
        </Router>
    );
};

export default Routes;