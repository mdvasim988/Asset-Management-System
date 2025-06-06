'use client'
import React, { useState, useEffect } from 'react'
import { getEmps, deleteEmp } from '@/actions/empops';
import Addemp from '@/components/empcomponents/Addemp';
import Editemp from '@/components/empcomponents/Editemp';
import { useSession } from "next-auth/react";


const Getallemps = () => {
    const [emps, setemps] = useState([]);
    const [add, setadd] = useState(false);
    const [edit, setedit] = useState(false);
    const [editaaset, seteditasset] = useState(null);
    const [afteredit, setafteredit] = useState(false);
    const [searchTerm, setsearchTerm] = useState('');
    const [selectFilters, setselectFilters] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const { data: session, status } = useSession();

    useEffect(() => {
        const dat = async () => {
            const a1 = await getEmps();
            setemps(a1);
            console.log(a1)
        }
        dat();

    }, [afteredit])

    const handleDelete = (id) => {
        let a = confirm('are you sure ?');
        if (a) {
            deleteEmp(id);
            setafteredit(!afteredit)
            if (result) {
                alert('deleted successfully');
            }
            else {
                alert('error ocuured');
            }
        }
    }

    const handleCheckboxChange = (filterValue) => {
        setselectFilters(prevFilters =>
            prevFilters.includes(filterValue)
                ? prevFilters.filter(item => item !== filterValue) // Pop from array if unchecked
                : [...prevFilters, filterValue] // Push to array if checked
        );
        console.log(selectFilters)
    };



    return (
        <div className='min-h-[86.9vh] py-10 bg-yellow-300'>
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12 ">
                {add && <Addemp onClose={() => { setadd(false); setafteredit(!afteredit) }} />}
                {edit && <Editemp onClose={() => { setedit(false); seteditasset(null); setafteredit(!afteredit) }} empitem={editaaset} />}
                {/* <!-- Start coding here --> */}
                <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                    <h3 className='text-2xl text-center text-gray-900  dark:text-white font-bold p-3 '>Employee Details</h3>
                    {(status === "loading") && <p className='text-gray-900 dark:text-white font-bold text-center'>Loading...</p>}
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <div className="w-full md:w-1/2">
                            <form className="flex items-center">
                                <label forhtml="simple-search" className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <input type="text" onChange={(e) => { setsearchTerm(e.target.value); }} id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="" />
                                </div>
                            </form>
                        </div>
                        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            <button type="button" className="flex items-center justify-center bg-yellow-300 hover:bg-primary-800 focus:ring-4 focus:ring-yellow-200 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800" onClick={() => setadd(!add)}>
                                <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                </svg>
                                Add Employee
                            </button>
                            <div className="flex items-center space-x-3 w-full md:w-auto">
                                {/* <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                    <svg className="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                    Actions
                                </button>
                                <div id="actionsDropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass Edit</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete all</a>
                                    </div>
                                </div> */}
                                <button onClick={() => setIsOpen(!isOpen)} id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                                    </svg>
                                    Filter
                                    <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                </button>
                                {isOpen && (<div className="z-10 w-48 p-3 absolute top-30 right-0.5 bg-white rounded-lg shadow dark:bg-gray-700">
                                    <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose Filters</h6>
                                    <ul className="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                                        <li className="flex items-center">
                                            <input id="apple" onChange={() => handleCheckboxChange('Hyderabad')} type="checkbox" checked={selectFilters.includes('Hyderabad')} value="Hyderabad" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label forhtml="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Hyderabad</label>
                                        </li>
                                        <li className="flex items-center">
                                            <input id="fitbit" onChange={() => handleCheckboxChange('Software Engineer')} type="checkbox" checked={selectFilters.includes('Software Engineer')} value="not-assigned" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label forhtml="fitbit" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Software Engineer</label>
                                        </li>
                                        {/* <li className="flex items-center">
                                            <input id="razor" onChange={() => handleCheckboxChange('new')} type="checkbox" checked={selectFilters.includes('new')} value="new" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label forhtml="razor" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">new</label>
                                        </li>
                                        <li className="flex items-center">
                                            <input id="nikon" onChange={() => handleCheckboxChange('laptop')} type="checkbox" checked={selectFilters.includes('laptop')} value="laptop" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label forhtml="nikon" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">laptop</label>
                                        </li> */}
                                    </ul>
                                </div>)}
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-4 py-3">E-ID</th>
                                    <th scope="col" className="px-4 py-3">Employee name</th>
                                    <th scope="col" className="px-4 py-3">Email</th>
                                    <th scope="col" className="px-4 py-3">Phone</th>
                                    <th scope="col" className="px-4 py-3">D.O.J</th>
                                    <th scope="col" className="px-4 py-3">Role</th>
                                    <th scope="col" className="px-4 py-3">W-Location</th>
                                    <th scope="col" className="px-4 py-3" hidden={session?.user?.role == 'normal'}>
                                        <span>Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {emps.filter((item) => Object.values(item).some((value) => value.toString().toLowerCase().includes(searchTerm.toLocaleLowerCase()))).filter((item) => selectFilters.length === 0 || selectFilters.includes(item.role) || selectFilters.includes(item.wlocation)).map((item) => {
                                    return <tr key={item.eid} className="border-b dark:border-gray-700">
                                        <td className="px-4 py-3 text-gray-900 dark:text-white">{item.eid}</td>
                                        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.name}</th>
                                        <td className="px-4 py-3">{item.email}</td>
                                        <td className="px-4 py-3">{item.phone}</td>
                                        <td className="px-4 py-3">{item.doj}</td>
                                        <td className="px-4 py-3">{item.role}</td>
                                        <td className="px-4 py-3">{item.wlocation}</td>
                                        <td className="flex items-center px-4 py-3" hidden={session?.user?.role == 'normal'}>
                                            <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => { setedit(!edit); seteditasset(item) }}>Edit</button>
                                            <button className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3" onClick={() => handleDelete(item.eid)}>Remove</button>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                    {/* <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Showing
                            <span className="font-semibold text-gray-900 dark:text-white">1-10</span>
                            of
                            <span className="font-semibold text-gray-900 dark:text-white">1000</span>
                        </span>
                        <ul className="inline-flex items-stretch -space-x-px">
                            <li>
                                <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Previous</span>
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Next</span>
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav> */}
                </div>
            </div>
        </div>
    )
}

export default Getallemps
