'use client'
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (<>
    <div className="min-h-[84.1vh] mb-5">
      <div className="flex flex-col items-center justify-center h-50 bg-yellow-300">
        <h2 className="text-2xl md:text-3xl font-bold">Welcome</h2>
        <h3 className="text-xl md:text-2xl font-bold">to</h3>
        <h2 className="text-2xl md:text-3xl font-bold">Assest Management System</h2>
      </div>
      <div className="bg-white flex flex-wrap md:flex md:flex-row items-center md:justify-between md:mx-5 md:flex-wrap mx-[10%] mt-9 md:mt-10 justify-center border-2 rounded-md px-35 py-5 sm:px-9 relative">
        {/* <h4 className="absolute -top-5 sm:left-2 sm:-top-5 bg-yellow-300 font-bold p-1 w-20 text-center text-lg">Asset</h4> */}
        <Link href="/getallassets">
          <div className="w-55 my-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center p-2">
            <img className="rounded-lg" src="/asset.gif" alt="" width={80} />
            <div className="p-2">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">Asset Details</h5>
            </div>
          </div>
        </Link>
        <Link href="/getallemps">
          <div className="w-55 my-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center p-2">
            <img className="rounded-lg" src="/emp.gif" alt="" width={80} />
            <div className="p-2">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">Employee Details</h5>
            </div>
          </div>
        </Link>
        <Link href="/getallusers">
          <div className="w-55 my-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center p-2">
            <img className="rounded-lg" src="/user.gif" alt="" width={80} />
            <div className="p-2">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">User Details</h5>
            </div>
          </div>
        </Link>
        <Link href="/getallissues">
          <div className="w-55 my-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center p-2">
            <img className="rounded-lg" src="/read.gif" alt="" width={80} />
            <div className="p-2">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">Issue Details</h5>
            </div>
          </div>
        </Link>
        {/* <Link href="/getallassets">
          <div className="w-55 my-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center p-2">
            <img className="rounded-lg" src="/get.gif" alt="" width={80} />
            <div className="p-2">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">Get All Asset Details</h5>
            </div>
          </div>
        </Link> */}
      </div>

      {/* <div className="bg-white flex flex-wrap md:flex md:flex-row items-center md:justify-between md:mx-5 md:flex-wrap mx-[10%] rounded-md mt-9 md:mt-10 justify-center border-2 px-35 py-5 sm:px-9 relative">
        <h4 className="absolute -top-5 sm:left-2 sm:-top-5 bg-yellow-300 font-bold p-1 w-25 text-center text-lg">Employee</h4>
        <Link href="/addemp">
          <div className="w-55 my-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center p-2">
            <img className="rounded-lg" src="/addt.gif" alt="" width={80} />
            <div className="p-2">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">Add Employee Details</h5>
            </div>
          </div>
        </Link>
        <Link href="/updateemp">
          <div className="w-55 my-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center p-2">
            <img className="rounded-lg" src="/updatett.gif" alt="" width={80} />
            <div className="p-2">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">Update Employee Details</h5>
            </div>
          </div>
        </Link>
        <Link href="/deleteemp">
          <div className="w-55 my-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center p-2">
            <img className="rounded-lg" src="/delete.gif" alt="" width={80} />
            <div className="p-2">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">Delete Employee Details</h5>
            </div>
          </div>
        </Link>
        <Link href="/getemp">
          <div className="w-55 my-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center p-2">
            <img className="rounded-lg" src="/read.gif" alt="" width={80} />
            <div className="p-2">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">Get Employee Details</h5>
            </div>
          </div>
        </Link>
        <Link href="/getallemp">
          <div className="w-55 my-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center p-2">
            <img className="rounded-lg" src="/get.gif" alt="" width={80} />
            <div className="p-2">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">Get All Employee Details</h5>
            </div>
          </div>
        </Link>
      </div>
      
      
      <div className="bg-white flex flex-wrap md:flex md:flex-row items-center md:justify-between md:mx-5 md:flex-wrap mx-[10%] rounded-md mt-9 md:mt-10 justify-center border-2 px-35 py-5 sm:px-9 relative">
        <h4 className="absolute -top-5 sm:left-2 sm:-top-5 bg-yellow-300 font-bold p-1 w-20 text-center text-lg">User</h4>
        <Link href="/adduser">
          <div className="w-55 my-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center p-2">
            <img className="rounded-lg" src="/addt.gif" alt="" width={80} />
            <div className="p-2">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">Add User Details</h5>
            </div>
          </div>
        </Link>
        <Link href="/updateuser">
          <div className="w-55 my-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center p-2">
            <img className="rounded-lg" src="/updatett.gif" alt="" width={80} />
            <div className="p-2">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">Update User Details</h5>
            </div>
          </div>
        </Link>
        <Link href="/deleteuser">
          <div className="w-55 my-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center p-2">
            <img className="rounded-lg" src="/delete.gif" alt="" width={80} />
            <div className="p-2">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">Delete User Details</h5>
            </div>
          </div>
        </Link>
        <Link href="/getuser">
          <div className="w-55 my-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center p-2">
            <img className="rounded-lg" src="/read.gif" alt="" width={80} />
            <div className="p-2">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">Get User Details</h5>
            </div>
          </div>
        </Link>
        <Link href="/getalluser">
          <div className="w-55 my-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center p-2">
            <img className="rounded-lg" src="/get.gif" alt="" width={80} />
            <div className="p-2">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">Get All User Details</h5>
            </div>
          </div>
        </Link>
      </div> */}
    </div>

  </>);
}
