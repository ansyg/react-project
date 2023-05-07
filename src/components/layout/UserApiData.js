
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import useFetch from '../../custom-hooks/useFetch';
import useFetchApiData from "../../custom-hooks/useFetchApiData";
// import {userService } from "../users/services"

const UserApiData = ({ title }) => {
    const { items: lists, errors: error, loading: isLoading } = useFetchApiData('/data', '', 'data')



    return (
        <div className='flex flex-wrap'>
            <h2>{error}</h2>
            {isLoading && <div> Page is Loading Here</div>}
            <h2>{!isLoading && !error && title}</h2>
            {lists && lists.map((item, index) => (

                <div className="blog-preview" key={item.id}>
                    <h2> {index + 1}</h2>
                    <h3>Name: {item.name}</h3>
                    <h3>Gender: {item.gender}</h3>
                    <h4>Age: {item.age}</h4>
                    <p> <strong>Behaviour</strong>: {item.behaviour}</p>
                    <Link to={`users/${item.id}`}>


                        <button >View User Data</button>
                    </Link>




                </div>
            ))
            }

        </div>

    );
}

export default UserApiData;