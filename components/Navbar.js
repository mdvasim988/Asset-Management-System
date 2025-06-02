"use client"
import Link from 'next/link'
import React from 'react'
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";


const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <nav className='flex justify-between bg-slate-500 text-white items-center h-22 md:h-14'>
      <div className="logo mx-3 md:mx-5 text-lg md:text-xl font-bold">
        <Link href={'/'}><h1><span className="text-yellow-200">A</span>sset <span className="text-yellow-200">M</span>anagement <span className="text-yellow-200">S</span>ystem</h1></Link>
      </div>
      <ul className='flex gap-9 mx-5 justify-around'>
        <li className='hover:font-bold'><Link href="/">Home</Link></li>
        {!session ? (<><li className='hover:font-bold'><Link href="/signup">SignUp</Link></li>
        <li className='hover:font-bold'><Link href="/login">Login</Link></li></>) : (<li className='hover:font-bold'><button onClick={() => signOut()}>Logout</button></li>)
        }
      </ul>
    </nav>
  )
}

export default Navbar
