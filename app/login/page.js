'use client'
import { signIn } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const page = () => {
    const router = useRouter();
    const [callbackUrl, setCallbackUrl] = useState("/");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            setCallbackUrl(params.get("callbackUrl") || "/");
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const result = await signIn("credentials", { email, password, redirect : false });
        if(result.error)
        {
            alert('login failed')
        }
        else{
            router.push(callbackUrl);
        }
    };

    return (
        <div className='min-h-[86.9vh] flex justify-center items-center bg-yellow-300'>
            <div className="md:w-full w-[80%] max-w-sm p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <h5 className="text-2xl font-bold text-center text-white dark:text-white">Login</h5>                    
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex items-start">
                        {/* <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-yellow-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-yellow-400 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label htmlFor="remember" className="ms-2 text-sm font-medium text-white dark:text-gray-300">Remember me</label>
                        </div> */}
                        <Link href="/forgot-password" className="ms-auto text-sm text-yellow-300 hover:underline dark:text-yellow-400">Forgot Password?</Link>
                    </div>
                    <button type="submit" className="w-full text-black bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500">Login to your account</button>
                    <div className="text-sm font-medium text-white dark:text-gray-300">
                        Not registered? <Link href="/signup" className="text-yellow-300 hover:underline dark:text-yellow-400">Create account</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default page
