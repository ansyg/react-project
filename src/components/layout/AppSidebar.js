

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

import { Menu } from 'antd';
import { menus } from '../../utils/menu'
import { useSessionStorage } from 'primereact/hooks';
// import Sider from 'antd/es/layout/Sider';
// import type { MenuProps } from 'antd';


const AppSidebar = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const [current, setCurrent] = useState('/');


    const [openKeys, setOpenKeys] = useSessionStorage([], 'openKeys');


    const onOpenChange = (keys) => {
        //set current menu through the leaves menu

        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (menus.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    useEffect(() => {

        setCurrent(location.pathname)
    }, [location.pathname]);

    const onClick = (e) => {
        console.log('click ', e.key);
        console.log('opened ', e);
        console.log('keyPath ', e.keyPath);
        setCurrent(e.key)

        navigate(e.key)
        //set current opened Menu Item
        setOpenKeys(e.keyPath)
    };
    return (
        <>



            <div className='SideBarMenu'>

                <Menu
                    className='SideBarMenuVertical'
                    onClick={onClick}
                    selectedKeys={[current]}
                    defaultSelectedKeys={[current]}
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}

                    mode="inline"
                    items={menus} />;

            </div>

        </>
    )
}

export default AppSidebar;