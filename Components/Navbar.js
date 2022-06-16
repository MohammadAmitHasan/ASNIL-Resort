import { useState } from 'react';
import Image from 'next/image'
import logo from '../public/images/ASNIL-Logo.png'
import Link from 'next/link'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='py-2 bg-zinc-800 flex items-center mx-auto fixed top-0 z-50 w-full px-10'>
            <div className='flex w-[80px]'>
                <Image src={logo} alt='company logo' />
            </div>
            <div onClick={() => setOpen(!open)} className='md:hidden ml-auto mr-4'>
                <img src="https://img.icons8.com/fluency/48/undefined/menu--v1.png" alt='nav menu' className='w-6 h-6' />
            </div>
            <ul className={`bg-zinc-800 py-1 md:flex justify-end text-center left-0 w-full absolute md:static duration-300 ease-in ${open ? 'top-14' : 'top-[-240px]'}`}>
                <Link href={'/'}><a className='block text-white font-semibold mx-5 hover:bg-rose-500 rounded-lg px-3 py-2'>HOME</a></Link>
                <Link href={'/'}><a className='text-white font-semibold block mx-5 hover:bg-rose-500 rounded-lg px-3 py-2'>ROOMS</a></Link>
                <Link href={'/'}><a className='text-white font-semibold block mx-5 hover:bg-rose-500 rounded-lg px-3 py-2'>BOOK NOW</a></Link>
                <Link href={'/'}><a className='text-white font-semibold block mx-5 hover:bg-rose-500 rounded-lg px-3 py-2'>CONTACT US</a></Link>
                <a className='text-green-400 font-semibold block mx-5 hover:bg-green-800 hover:text-white rounded-lg px-3 py-2'>LOGIN</a>
            </ul>
        </nav>

    );
};

export default Navbar;