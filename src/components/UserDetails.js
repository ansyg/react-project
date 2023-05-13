
import { Link, useParams } from "react-router-dom";
import useFetchApiData from "../custom-hooks/useFetchApiData";

import { Card, Button } from './shared/prime-react-components'


const UserDetails = ({ title }) => {
    const { id } = useParams()
    const { items: item, errors: error, loading: isLoading } = useFetchApiData('data/' + id, '', 'data')
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Link to={`/users`}>
                <Button label='Go Back' icon="pi pi-arrow-left" />
            </Link>
            <Button label="Save" icon="pi pi-check" />

            <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary" />
        </div>
    );
    return (

        <div className='flex flex-wrap'>

            <h2>{error}</h2>
            {isLoading && <div> Page is Loading Here</div>}


            {item && (


                <div className="blog-preview" key={item.id} >
                    <Card title={!isLoading && !error && title} footer={footer} >

                        <h3>Name: {item.name}</h3>
                        <h3>Gender: {item.gender}</h3>
                        <h4>Age: {item.age}</h4>
                        <p> <strong>Behaviour</strong>: {item.behaviour}</p>
                    </Card>
                </div>)}



        </div>


    );
}

export default UserDetails;