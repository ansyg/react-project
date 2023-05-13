import React from 'react';
import { Routes, Route } from "react-router-dom"

// import Navbar from '../components/layout/Navbar';
import { routes as appRoutes } from '../../router/'
import '../../router/interceptor'
import AppSidebar from './AppSidebar';
import AppNavbar from './AppNavbar';
import AppFooter from './AppFooter';

const AppHome = () => {

    return (

        <div className="App">

            <AppNavbar />
            <div className="">


                <div className=" shadow-none h-100vh flex flex-direction-row flex-1   gap-2 bg-gray-100">
                    <AppSidebar />

                    <div className="ml-4 w-full   min-h-100vh">
                        <Routes>
                            {appRoutes.map((route) => (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    exact={route.exact}
                                    element={
                                        <React.Suspense fallback={<div>Loading...</div>}>
                                            <route.component title={route.title} />
                                        </React.Suspense>

                                    }

                                />
                            ))}
                        </Routes>
                    </div>
                </div>


            </div>
            <AppFooter />

        </div>
    );
}

export default AppHome;