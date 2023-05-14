const UserList = ({ users, title, removedUsers, removeUser, returnUser }) => {



    return (
        <div className="user-list">

            <div className="blog-preview">


                <h2>{title}</h2>
            </div>
            {users?.map((user, index) => (
                <div className="blog-preview" key={user.id}>
                    <h2> {index + 1}</h2>
                    <h3>Name: {user.name}</h3>
                    <h3>Gender: {user.gender}</h3>
                    <h4>Age: {user.age}</h4>
                    <p> <strong>Behaviour</strong>: {user.behaviour}</p>
                    <button onClick={() => removeUser(user)}>Remove User</button>




                </div>

            ))}

            {removedUsers?.map((user, index) => (
                <div className="blog-preview" key={user.id}>
                    <h2> {index + 1}</h2>
                    <h3>Name: {user.name}</h3>
                    <h3>Gender: {user.gender}</h3>
                    <h4>Age: {user.age}</h4>
                    <p> <strong>Behaviour</strong>: {user.behaviour}</p>

                    <button onClick={() => returnUser(user)}>Return User</button>



                </div>

            ))}

        </div>
    );
}

export default UserList;