"use client"
import React, { useState } from 'react'
import { editAsset } from '@/actions/assetops'

const Editasset = ({onClose, assetitem}) => {

    const [form, setform] = useState(assetitem)

    const handleChange = (e) => {
      setform({...form, [e.target.name]:e.target.value});
      console.log({...form, [e.target.name]:e.target.value});
    }

    const editasset = async(form)=>{
            const res = await editAsset(form);
            console.log(res);
            if(res)
            {
                alert('edited successfully');
            }
            else{
                alert('error occured');
            }
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
                        <form className="space-y-6" action="#" onSubmit={(e)=>{e.preventDefault();editasset(form)}}>
                            <h5 className="text-2xl font-bold text-center text-white dark:text-white">Edit Asset Details</h5>
                            <div>
                                <label htmlFor="aname" className="block mb-2 text-sm font-medium text-white dark:text-white">Name</label>
                                <input onChange={(e) => handleChange(e)} value={form.name} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                            </div>
                            <div>
                                <label htmlFor="brand" className="block mb-2 text-sm font-medium text-white dark:text-white">Brand</label>
                                <input onChange={(e) => handleChange(e)} value={form.brand} type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                            </div>
                            <div>
                                <label htmlFor="sno" className="block mb-2 text-sm font-medium text-white dark:text-white">Serial Number</label>
                                <input onChange={(e) => handleChange(e)} value={form.sno} type="text" name="sno" id="sno" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                            </div>
                            <div>
                                <label htmlFor="config" className="block mb-2 text-sm font-medium text-white dark:text-white">Configuration</label>
                                <input onChange={(e) => handleChange(e)} value={form.config} type="text" name="config" id="config" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                            </div>
                            <div>
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-white dark:text-white">Category</label>
                                <input onChange={(e) => handleChange(e)} value={form.category} type="text" name="category" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                            </div>
                            <div>
                                <label htmlFor="dop" className="block mb-2 text-sm font-medium text-white dark:text-white">Date of Purchase</label>
                                <input onChange={(e) => handleChange(e)} value={form.dop} type="date" name="dop" id="dop" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                            </div>
                            <div>
                                <label htmlFor="status" className="block mb-2 text-sm font-medium text-white dark:text-white">Status</label>
                                <input onChange={(e) => handleChange(e)} value={form.status} type="text" name="status" id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                            </div>
                            <div>
                                <label htmlFor="condition" className="block mb-2 text-sm font-medium text-white dark:text-white">Condition</label>
                                <input onChange={(e) => handleChange(e)} value={form.condition} type="text" name="condition" id="condition" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                            </div>
                            <button type="submit" className="mb-3 w-full text-black bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500">Edit Asset</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Editasset
