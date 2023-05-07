
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetchApiData from "../custom-hooks/useFetchApiData";

const UserDetails = ({ title }) => {
    const { id } = useParams()
    const { items: item, errors: error, loading: isLoading } = useFetchApiData('data/' + id, '', 'data')

    return (

        <div className='flex flex-wrap'>

            <h2>{error}</h2>
            {isLoading && <div> Page is Loading Here</div>}
            <h2>{!isLoading && !error && title}</h2>


            {item && (<div className="blog-preview" key={item.id}>

                <h3>Name: {item.name}</h3>
                <h3>Gender: {item.gender}</h3>
                <h4>Age: {item.age}</h4>
                <p> <strong>Behaviour</strong>: {item.behaviour}</p>
            </div>)}



        </div>


    );
}

export default UserDetails;