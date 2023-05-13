
// import useFetch from '../../custom-hooks/useFetch';
import useFetchApiData from "../../custom-hooks/useFetchApiData";
// import {userService } from "../users/services"
import { DataTable, Column, Button } from '../shared/prime-react-components'
import React from 'react';
import { Link } from "react-router-dom";


const UserApiData = ({ title }) => {
    const { items: lists, errors: error, loading: isLoading } = useFetchApiData('/data', '', 'data')
    const columns = [
        {
            field: 'index', header: 'No',

            body: (rowData) => {
                return lists.indexOf(rowData) + 1;
            },
        },
        { field: 'name', header: 'Name' },
        { field: 'gender', header: 'Gender' },
        { field: 'age', header: 'Age' },
        {
            field: 'action', header: 'Action',

            body: (rowData) => {
                return (
                    <Link to={`users/${rowData.id}`}>
                        <Button label='View User Data' />
                    </Link>



                )

            },
        }
    ]



    return (
        <>
            <h2>{error}</h2>
            {isLoading && <div> Page is Loading Here</div>}
            <h2>{!isLoading && !error && title}</h2>

            <div className="card">
                <DataTable value={lists} tableStyle={{ minWidth: '50rem' }}>

                    {columns.map((col, i) => (


                        <Column key={col.field} field={col.field} header={col.header} body={col.body} />
                    ))}



                </DataTable>
            </div>
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

        </>

    );
}

export default UserApiData;