"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import { loginContext } from '../MainRoot'

export default function Header() {
 let {token,setToken} =useContext(loginContext)
  return (
    <div>
         <header className='container backgroundnav'>
            <div className='flex w-[1400px] mx-auto py-4  text-[white] justify-between px-3 items-center'>
                <div className=''>
                    <h1 className='text-[#45ce55] text-2xl font-bold'>Blog-
                        <span className='text-[#ff4d00]'>st</span></h1>             
                </div>
                <div className=''>
                    <ul className='flex gap-16 text-lg cursor-pointer'>
                        <li className='hover:text-[#45ce55]  font-bold capitalize'><Link href={'/'}> Blog</Link>
                           
                            </li>
                         <li className='hover:text-[#45ce55]  font-bold capitalize'>
                         <Link href={'/Create'}>Create</Link>
                         
                         </li>
                         <li className='hover:text-[#45ce55]  font-bold capitalize'>
                         <Link href={'/Listing'}>Listing</Link>
                         </li>
                         {token!==undefined && token!==""
                           ?
                           <li>
                            <button  onClick={()=>setToken('')} className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow'>
                           LogOut
                            </button>
                            </li>
                            :
                            <li>
                            <button  className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow'>
                            <Link href={'/Login'}>Login</Link>
                            </button>
                            </li>
                         }
                         
                    </ul>
                </div>
            </div>
        </header>
    </div>
  )
}
