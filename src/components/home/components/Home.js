import React, { useState } from "react"
import UserList from "./../../users/components/UserList"

import { Button, } from './../../shared/prime-react-components';
import { Space } from 'antd';

const Home = () => {
    const welcome = 'Hello World ,here stating learning React Js- from Variable'
    const age = 50

    // let name = 'Jon Peterson'
    const [name, setName] = useState('')
    const handleClick = () => {
        console.log('handleClick , hello 4 Gs')
    }

    const handleClickAgain = (name) => {
        console.log(name)
    }

    const HandleClickAgainTheAgain = (name) => {
        console.log(name)
    }

    const HandleDynamicValues = (value) => {
        setName(value)
    }



    let userLists = [
        { name: 'Kudra Limoi', age: 12, gender: 'Female', behaviour: 'Good at singing', id: 1 },
        { name: 'Jgeme Nola', age: 18, gender: 'Male', behaviour: 'Good at Running and Singing', id: 2 },
        { name: 'Jonathan Mlira', age: 14, gender: 'Male', behaviour: 'Good at Running and Singing and Writting', id: 3 },
        { name: 'Gerson Gervase', age: 14, gender: 'Male', behaviour: 'Good at  Maths, Physics and Chemistry', id: 4 },
        { name: '4G Haouw ', age: 14, gender: 'Female', behaviour: 'Good at  Maths, Physics and Chemistry, and Singing', id: 5 },
    ]
    const [users, setUser] = useState(userLists)
    const [removedUsers, setRemovedUser] = useState([])


    const removeUser = (user) => {


        setUser(users.filter((users) => users.id !== user.id))//update list of users after remove
        if (removedUsers.filter((users) => users.id === user.id).length === 0)//check if user  ia not exist in user
            setRemovedUser([...removedUsers, user])
    }


    const returnUser = (user) => {

        setRemovedUser(removedUsers.filter((users) => users.id !== user.id))
        setUser([...users, user])
    }
    return (
        <>



            <div className="surface-0 p-4 shadow-2 border-round">
                <div className="text-3xl font-medium text-900 mb-3">Card Title</div>
                <div className="font-medium text-500 mb-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
                <div className="border-2 border-dashed border-300">

                    <div className="card m-4" >
                        <div className="">
                            <Space>
                                <Button label="Try" className="text-white" />
                                <Button className="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700">
                                    <img alt="logo" src="https://primefaces.org/cdn/primereact/images/primereact-logo-light.svg" className="h-2rem"></img>
                                </Button>
                                <Button icon="pi pi-check" aria-label="Filter" />
                                <Button icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" />
                                <Button icon="pi pi-search" severity="success" aria-label="Search" />
                                <Button icon="pi pi-user" severity="info" aria-label="User" />
                                <Button icon="pi pi-bell" severity="warning" aria-label="Notification" />
                                <Button icon="pi pi-heart" severity="help" aria-label="Favorite" />
                                <Button icon="pi pi-times" severity="danger" aria-label="Cancel" />

                                <Button icon="pi pi-check" rounded aria-label="Filter" />
                                <Button icon="pi pi-bookmark" rounded severity="secondary" aria-label="Bookmark" />
                                <Button icon="pi pi-search" rounded severity="success" aria-label="Search" />
                                <Button icon="pi pi-user" rounded severity="info" aria-label="User" />
                                <Button icon="pi pi-bell" rounded severity="warning" aria-label="Notification" />
                                <Button icon="pi pi-heart" rounded severity="help" aria-label="Favorite" />
                                <Button icon="pi pi-times" rounded severity="danger" aria-label="Cancel" />

                                <Button icon="pi pi-check" rounded outlined aria-label="Filter" />
                                <Button icon="pi pi-bookmark" rounded outlined severity="secondary" aria-label="Bookmark" />
                                <Button icon="pi pi-search" rounded outlined severity="success" aria-label="Search" />
                                <Button icon="pi pi-user" rounded outlined severity="info" aria-label="User" />
                                <Button icon="pi pi-bell" rounded outlined severity="warning" aria-label="Notification" />
                                <Button icon="pi pi-heart" rounded outlined severity="help" aria-label="Favorite" />
                                <Button icon="pi pi-times" rounded outlined severity="danger" aria-label="Cancel" />

                                <Button icon="pi pi-check" rounded text raised aria-label="Filter" />
                                <Button icon="pi pi-bookmark" rounded text raised severity="secondary" aria-label="Bookmark" />
                                <Button icon="pi pi-search" rounded text raised severity="success" aria-label="Search" />
                                <Button icon="pi pi-user" rounded text raised severity="info" aria-label="User" />
                                <Button icon="pi pi-bell" rounded text raised severity="warning" aria-label="Notification" />
                                <Button icon="pi pi-heart" rounded text raised severity="help" aria-label="Favorite" />
                                <Button icon="pi pi-times" rounded text raised severity="danger" aria-label="Cancel" />

                                <Button icon="pi pi-check" rounded text aria-label="Filter" />
                                <Button icon="pi pi-bookmark" rounded text severity="secondary" aria-label="Bookmark" />
                                <Button icon="pi pi-search" rounded text severity="success" aria-label="Search" />
                                <Button icon="pi pi-user" rounded text severity="info" aria-label="User" />
                                <Button icon="pi pi-bell" rounded text severity="warning" aria-label="Notification" />
                                <Button icon="pi pi-heart" rounded text severity="help" aria-label="Favorite" />
                                <Button icon="pi pi-times" rounded text severity="danger" aria-label="Cancel" />
                            </Space>
                        </div>
                        <h1> {welcome} </h1>
                        <p> Started at late :{age}</p>
                        <p>My name is:<strong> {name}</strong></p>
                        <div className="grid " >

                            <div className="">
                                <Space>

                                    <Button onClick={() => HandleDynamicValues('Ali Nadeem')}>Change Name</Button>
                                    <Button onClick={handleClick}>Click Me 4Gs</Button>

                                    <Button onClick={() => [handleClickAgain('One Function'), HandleClickAgainTheAgain('Two Functions')]}> 4Gs Params Array</Button>
                                    <Button onClick={() => { handleClickAgain('function1'); HandleClickAgainTheAgain('function2') }}> 4Gs Params Object</Button>

                                </Space>
                            </div>
                        </div>


                        <UserList users={users} title="All Users" removeUser={removeUser} returnUser={returnUser} />
                        <UserList users={users.filter((user) => user.age > 14)} title="Users Above 14 years old" removeUser={removeUser} returnUser={returnUser} />
                        <UserList users={users.filter((user) => user.age <= 14 && user.gender === 'Male')} title="Male Users and below or equal to 14 years old" removeUser={removeUser} returnUser={returnUser} />
                        <UserList removedUsers={removedUsers} title="List of Users has been Removed" returnUser={returnUser} />

                    </div>

                </div>
            </div>



        </>
    );
}

export default Home;