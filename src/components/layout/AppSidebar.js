

import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Menu } from 'antd';
import { menus } from '../../utils/menu'
// import type { MenuProps } from 'antd';


const AppSidebar = () => {



    const [current, setCurrent] = useState('mail');
    const navigate = useNavigate()
    const onClick = (e) => {
        console.log('click ', e.key);
        setCurrent(e.key)
        navigate(e.key, { replace: true })
    };
    return (
        <div className="shadow-1 bg-menu-bg  flex flex-direction-row  h-100vh top-0 left-0 sm:hidden md:inline-flex  ">
            <Menu onClick={onClick} selectedKeys={[current]} mode="inline" items={menus} />;
        </div>
    )
}

export default AppSidebar;