import React, { useState } from "react"
import UserList from "./../shared/UserList"


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
        <div className="home">

            <h1> {welcome} </h1>
            <p> Started at late :{age}</p>
            <p>My name is:<strong> {name}</strong></p>
            <div className="grid " style={{ display: 'grid', padding: '2px', margin: '2px' }}>

                <button onClick={() => HandleDynamicValues('Ali Nadeem')}>Change Name</button>
                <button onClick={handleClick}>Click Me 4Gs</button>

                <button onClick={() => [handleClickAgain('One Function'), HandleClickAgainTheAgain('Two Functions')]}> 4Gs Params Array</button>
                <button onClick={() => { handleClickAgain('function1'); HandleClickAgainTheAgain('function2') }}> 4Gs Params Object</button>
            </div>


            <UserList users={users} title="All Users" removeUser={removeUser} returnUser={returnUser} />
            <UserList users={users.filter((user) => user.age > 14)} title="Users Above 14 years old" removeUser={removeUser} returnUser={returnUser} />
            <UserList users={users.filter((user) => user.age <= 14 && user.gender === 'Male')} title="Male Users and below or equal to 14 years old" removeUser={removeUser} returnUser={returnUser} />
            <UserList removedUsers={removedUsers} title="List of Users has been Removed" returnUser={returnUser} />


        </div>
    );
}

export default Home;