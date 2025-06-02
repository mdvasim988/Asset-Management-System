"use client"
import React, { useState } from 'react'
import { addIssue } from '@/actions/issueops'

const Addissue = ({ onClose }) => {

    const [form, setform] = useState({ eid: '', aid: '', idate: '', rdate: '', remarks: '' })

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
        console.log({ ...form, [e.target.name]: e.target.value });
    }

    const addissue = async (form) => {
        const res = await addIssue(form);
        if (res)
            alert('user added');
        else
            alert('error occurred');
    }


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-auto">
            {/* Modal container */}
            <div className="bg-[#1E293B] border-4 border-yellow-400 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto relative p-6">
                <button
                    onClick={onClose}
                    className="absolute top-10 right-10 text-white text-xl hover:text-yellow-400 rounded-xl px-3 py-2 bg-black"
                >
                    ✕
                </button>
                <div className='min-h-[86.9vh] flex justify-center items-center bg-yellow-300  '>
                    <div className="md:w-full w-[80%] max-w-sm p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 my-10">
                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); addissue(form) }}>
                            <h5 className="text-2xl font-bold text-center text-white dark:text-white">Add Issue Details</h5>
                            <div>
                                <label htmlFor="eid" className="block mb-2 text-sm font-medium text-white dark:text-white">Employee ID</label>
                                <input onChange={(e) => handleChange(e)} value={form.eid} type="text" name="eid" id="eid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                            </div>
                            <div>
                                <label htmlFor="aid" className="block mb-2 text-sm font-medium text-white dark:text-white">Asset ID</label>
                                <input onChange={(e) => handleChange(e)} value={form.aid} type="text" name="aid" id="aid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                            </div>
                            <div>
                                <label htmlFor="idate" className="block mb-2 text-sm font-medium text-white dark:text-white">Issue Date</label>
                                <input onChange={(e) => handleChange(e)} value={form.idate} type="date" name="idate" id="idate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                            </div>
                            <div>
                                <label htmlFor="rdate" className="block mb-2 text-sm font-medium text-white dark:text-white">Return Date</label>
                                <input onChange={(e) => handleChange(e)} value={form.rdate} type="date" name="rdate" id="rdate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                            </div>
                            <div>
                                <label htmlFor="remarks" className="block mb-2 text-sm font-medium text-white dark:text-white">Remarks</label>
                                <input onChange={(e) => handleChange(e)} value={form.remarks} type="text" name="remarks" id="remarks" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                            </div>
                            <button type="submit" className="mb-3 w-full text-black bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500">Issue Asset</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Addissue
