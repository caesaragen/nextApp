//create footer using tailwind css
import React from 'react'
import Moment from 'react-moment';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
const dateToFormat = new Date();
const Footer = () => {
    return (
        <footer className='flex justify-center items-center p-4'>         
            <div className='flex flex-row justify-between'>
                <AiOutlineCopyrightCircle className='text-white ' />
                <p className='text-white my-2'>Copyright <Moment format="YYYY" date={dateToFormat} /></p>
                <p className='text-xl text-white m-2'><a href="

        " className='text-blue-500 hover:text-blue-700'>
                    <FaFacebook className='text-xl text-white' />
                    <span className='ml-2'>
                        <span className='font-bold'>    </span>
                    </span>     </a></p>
                <p className='text-xl text-white m-2'> <a href="

        " className='text-blue-500 hover:text-blue-700'>
                    <FaTwitter className='text-xl text-white' />
                    <span className='ml-2'>
                        <span className='font-bold'>    </span>
                    </span>     </a></p>
                <p className='text-xl text-white m-2'> <a href="

        " className='text-blue-500 hover:text-blue-700'>
                    <FaLinkedin className='text-xl text-white' />
                    <span className='ml-2'>
                        <span className='font-bold'>    </span>
                    </span>     </a></p>
                <p className='text-xl text-white m-2'> <a href="

        " className='text-blue-500 hover:text-blue-700'>
                    <FaGithub className='text-xl text-white' />
                    <span className='ml-2'>
                        <span className='font-bold'>    </span>
                    </span>     </a></p>
                <p className='text-xl text-white m-2'> <a href="

        " className='text-blue-500 hover:text-blue-700'>
                    <FaWhatsapp className='text-xl text-white' />
                    <span className='ml-2'>
                        <span className='font-bold'>    </span>
                    </span>     </a></p>
            </div>
        </footer>
    )
}
export default Footer


