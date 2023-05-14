
// import useFetch from '../../custom-hooks/useFetch';
import useFetchApiData from "../../../custom-hooks/useFetchApiData";
// import {userService } from "../users/services"
import { DataTable, Column, Button, Badge } from '../../shared/prime-react-components'
import React from 'react';
import { Link } from "react-router-dom";
import { useSessionStorage } from 'primereact/hooks';


const UserApiData = ({ title }) => {
    const [count, setCount] = useSessionStorage(0, 'count');

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
                    <Link to={`/users/${rowData.id}`}>
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


            <div className="grid mt-3 pt-3" >
                {lists && lists.map((item, index) => (



                    <div className="col-12 md:col-6 lg:col-3  " key={item.id}>
                        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                            <Badge value={index + 1}></Badge>

                            <h3>Name: {item.name}</h3>
                            <h3>Gender: {item.gender}</h3>
                            <h4>Age: {item.age}</h4>
                            <p> <strong>Behaviour</strong>: {item.behaviour}</p>


                            <div className="flex justify-content-end">
                                <Link to={`/users/${item.id}`}>
                                    <Button label='View User Data' icon="pi pi-eye" />
                                </Link>
                            </div>

                        </div>

                    </div>




                ))
                }
            </div>
            <div className="grid">
                <div className="col-12 md:col-6 lg:col-3">
                    <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Orders</span>
                                <div className="text-900 font-medium text-xl">152</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">24 new </span>
                        <span className="text-500">since last visit</span>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Revenue</span>
                                <div className="text-900 font-medium text-xl">$2.100</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">%52+ </span>
                        <span className="text-500">since last week</span>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Customers</span>
                                <div className="text-900 font-medium text-xl">28441</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-inbox text-cyan-500 text-xl"></i>
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">520  </span>
                        <span className="text-500">newly registered</span>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Comments</span>
                                <div className="text-900 font-medium text-xl">152 Unread</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-comment text-purple-500 text-xl"></i>
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">85 </span>
                        <span className="text-500">responded</span>
                    </div>
                </div>
            </div>
            <div className="surface-0">
                <ul className="list-none p-0 m-0 flex align-items-center font-medium mb-3">
                    <li>
                        <p className="text-500 no-underline line-height-3 cursor-pointer">Application</p>
                    </li>
                    <li className="px-2">
                        <i className="pi pi-angle-right text-500 line-height-3"></i>
                    </li>
                    <li>
                        <span className="text-900 line-height-3">Analytics</span>
                    </li>
                </ul>
                <div className="flex align-items-start flex-column lg:justify-content-between lg:flex-row">
                    <div>
                        <div className="font-medium text-3xl text-900">Customers</div>
                        <div className="flex align-items-center text-700 flex-wrap">
                            <div className="mr-5 flex align-items-center mt-3">
                                <i className="pi pi-users mr-2"></i>
                                <span>332 Active Users</span>
                            </div>
                            <div className="mr-5 flex align-items-center mt-3">
                                <i className="pi pi-globe mr-2"></i>
                                <span>9402 Sessions</span>
                            </div>
                            <div className="flex align-items-center mt-3">
                                <i className="pi pi-clock mr-2"></i>
                                <span>2.32m Avg. Duration</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 lg:mt-0">
                        <Button label="Add" className="p-button-outlined mr-2" icon="pi pi-user-plus" />
                        <Button label="Save" icon="pi pi-check" />
                    </div>
                </div>
            </div>
            <div className="card flex flex-column align-items-center">
                <span className="font-bold text-4xl mb-5">{count}</span>
                <div className="flex flex-wrap gap-3">
                    <Button icon="pi pi-plus" className="p-button-outlined p-button-rounded p-button-success" onClick={() => setCount(count + 1)}></Button>
                    <Button icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger" onClick={() => setCount(0)}></Button>
                </div>
            </div>
        </>

    );
}

export default UserApiData;