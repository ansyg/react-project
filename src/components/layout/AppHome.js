import React from 'react';

import '../../router/interceptor'
import AppSidebar from './AppSidebar';
import AppNavbar from './AppNavbar';
import AppFooter from './AppFooter';
// import { Layout, Space } from 'antd';
import AppContent from './AppContent';
import { Space } from 'antd';


const AppHome = () => {

    return (

        <div className="App">
            <AppNavbar />
            <Space className='SideBarAppContent'>
                <AppSidebar />
                <AppContent />

            </Space>
            <AppFooter />


            {/* <Layout >
                <AppNavbar />
                <Layout>
                    <AppSidebar />

                    <AppContent />
                </Layout>


                <AppFooter />
            </Layout> */}


        </div>
    );
}

export default AppHome;