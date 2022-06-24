import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import profilePic from '../public/profilePic.jpg';
import Link from 'next/link'

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer text-dark ${classProps}`}>
            {title}
        </li>
    )
}
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            {/* create responsive tailwind navbar*/}
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <span className='flex justify-center items-center'>
                    <Image src={profilePic} alt="logo" className='object-cover h-48 w-96 cursor-pointer rounded-lg' width={50}
                        height={50} />
                    <h1 className='text-2xl font-bold text-white ml-4'>Joel Aduma </h1>
                </span>
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                {["About", "Projects", "GitHub", "LinkedIn", "Tutorials"].map((item, index) =>
                    <NavbarItem key={item + index} title={item} />
                )}
                <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover[#2546bd]'>
                    Login
                </li>
            </ul>
            <div className='flex relative'>
                {toggleMenu
                    ? <AiOutlineClose className='fontSize={28} absolute top-0 right-0 cursor-pointer' onClick={() => setToggleMenu(false)} />
                    : <HiMenuAlt4 className='fontSize={28} absolute top-0 right-0 cursor-pointer' onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <ul
                        className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                        flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
                        '           
                    >
                        <li className='text-xl  my-2'>

                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        {["About", "Projects", "GitHub", "LinkedIn",].map((item, index) =>
                            <NavbarItem key={item + index} title={item} classProps="my-2 text-lg" />
                        )}
                    </ul>
                )}
            </div>

        </nav>
    )
}
export default Navbar
