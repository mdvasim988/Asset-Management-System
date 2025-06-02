'use client'
import { addUser } from '@/actions/registerops';
import { useRouter } from 'next/navigation';
import React from 'react';

const page = () => {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const eid = e.target.eid.value;
        const secret = e.target.secret.value;
        const result = await addUser({ email: email, password: password, name: name, eid: eid, secret: secret });
        if(result) {
            alert("user added");
            router.push('/login');
        }
        else{
            alert("user already existed");
            router.push('/login');
        }
    };

    return (
        <div className='min-h-[86.9vh] flex justify-center items-center bg-yellow-300'>
            <div className="my-10 md:w-full w-[80%] max-w-sm p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <h5 className="text-2xl font-bold text-center text-white dark:text-white">Sign UP</h5>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-white dark:text-white">Name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="eid" className="block mb-2 text-sm font-medium text-white dark:text-white">Employee ID</label>
                        <input type="text" name="eid" id="eid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <label htmlFor="secret" className="block mb-2 text-sm font-medium text-white dark:text-white">Your Secret to reset password</label>
                        <input type="password" name="secret" id="secret" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <button type="submit" className="mb-3 w-full text-black bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500">Create your account</button>
                </form>
            </div>

        </div>
    )
}

export default page
