import { useState } from 'react';
import Image from 'next/image'
import logo from 'public/images/ASNIL-Logo.png'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

import { useDispatch, useSelector } from "react-redux";
import { change } from 'store/openLogin';
import Login from 'Components/Login';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const { data: session } = useSession()

    // const [openLogin, setOpenLogin] = useState(false)

    const dispatch = useDispatch()
    const openLogin = useSelector(state => state.openLogin.value)

    return (
        <nav className=' py-1 bg-zinc-800 flex items-center mx-auto fixed top-0 z-50 w-full px-10 h-14'>
            <div className='flex w-[60px]'>
                <Image src={logo} alt='company logo' />
            </div>
            <div onClick={() => setOpen(!open)} className='lg:hidden ml-auto mr-4'>
                <img src="https://img.icons8.com/fluency/48/undefined/menu--v1.png" alt='nav menu' className='w-6 h-6' />
            </div>
            <ul className={`bg-zinc-800 py-1 lg:flex justify-end text-center left-0 w-full absolute lg:static duration-300 ease-in ${open ? 'top-12' : 'top-[-240px]'}`}>
                <Link href={'/'}><a className='block text-white font-semibold mx-5 hover:bg-rose-500 rounded-lg px-3 py-2'>HOME</a></Link>

                <Link href={'/rooms'}><a className='text-white font-semibold block mx-5 hover:bg-rose-500 rounded-lg px-3 py-2'>ROOMS</a></Link>

                <Link href={'/reviews'}><a className='text-white font-semibold block mx-5 hover:bg-rose-500 rounded-lg px-3 py-2'>REVIEWS</a></Link>

                <Link href={'/catchAll'}><a className='text-white font-semibold block mx-5 hover:bg-rose-500 rounded-lg px-3 py-2'>CATCH ALL</a></Link>

                <Link href={'/api/preview?redirect=/news'}><a className='text-white font-semibold block mx-5 hover:bg-rose-500 rounded-lg px-3 py-2'>PREVIEW</a></Link>

                {/* 
                <button onClick={() => dispatch(change())} className='text-green-400 font-semibold block mx-5 hover:bg-green-700 hover:text-white rounded-lg px-3 py-2'>LOGIN</button> */}

                {
                    session ?
                        <a onClick={() => signOut()} className='text-red-400 font-semibold block mx-5 hover:bg-red-700 hover:text-white rounded-lg px-3 py-2'>LOGOUT</a>
                        :
                        <a onClick={() => signIn()} className='text-green-400 font-semibold block mx-5 hover:bg-green-700 hover:text-white rounded-lg px-3 py-2'>LOGIN</a>

                }


                <div className={`ease-in-out duration-500 absolute left-0 ${openLogin ? `top-0` : `top-[-1500px]`} `}>
                    {/* <Login setOpenLogin={setOpenLogin} openLogin={openLogin} /> */}
                    <Login />
                </div>
            </ul>
        </nav>

    );
};

export default Navbar;