import React from 'react';
import { Routes, Route } from "react-router-dom"

// import Navbar from '../components/layout/Navbar';
import { routes as appRoutes } from '../../router/'
import '../../router/interceptor'

import { Content } from "antd/es/layout/layout";

const AppContent = () => {
    return (<>

        <Content className=' mx-2'
        >



            <div className="surface-0 h-100vh">

                <div className="border-2 border-dashed border-300 m-2 p-2">
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
        </Content>


    </>);
}

export default AppContent;