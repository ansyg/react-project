import { AppstoreOutlined, MailOutlined, SettingOutlined, UserAddOutlined } from '@ant-design/icons';


export const menus = [
    {
        label: 'Home',
        key: '/home',
        icon: <MailOutlined />,


    },


    {
        label: 'Users',
        key: '/users',
        icon: <UserAddOutlined />,


    },
    {
        label: 'Navigation Two',
        key: 'app',
        icon: <AppstoreOutlined />,
        disabled: true,
    },
    {
        label: 'Navigation Three - Submenu',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'Users Management',
                label: 'Users Management',
                children: [
                    {
                        label: 'List Users',
                        key: 'user-management/users',
                        icon: <UserAddOutlined />,

                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
        ),
        key: 'alipay',
    },
];