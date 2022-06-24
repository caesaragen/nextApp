import React from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';



const About = () => {
    return (
        <div className='flex flex-col justify-center items-center p-4 border-2 border-gray-700 shadow-sm'>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-xl text-white text-white text-center'>Hello, I am a frontend developer with a keen eye for building custom components to match designs and client expectations.I am experienced in HTML5/CSS3, Bootstrap, Javascript, React, React Native and JQuery.
                    I am also proficient in consuming REST APIs as well as some background in backend development using Node (MERN) and PHP/Laravel (LAMP) </p>
            </div>
         
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-bold text-white'>Social Media</h1>
                <div className='flex flex-row justify-center items-center gap-px'>
                    <p className='text-xl text-white'><a href="

        " className='text-blue-500 hover:text-blue-700'>
                        <FaFacebook className='text-xl text-white' />
                        <span className='ml-2'>
                            <span className='font-bold'>    </span>
                        </span>     </a></p>
                    <p className='text-xl text-white'> <a href="

        " className='text-blue-500 hover:text-blue-700'>
                        <FaTwitter className='text-xl text-white' />
                        <span className='ml-2'>
                            <span className='font-bold'>    </span>
                        </span>     </a></p>
                    <p className='text-xl text-white'> <a href="

        " className='text-blue-500 hover:text-blue-700'>
                        <FaLinkedin className='text-xl text-white' />
                        <span className='ml-2'>
                            <span className='font-bold'>    </span>
                        </span>     </a></p>
                    <p className='text-xl text-white'> <a href="

        " className='text-blue-500 hover:text-blue-700'>
                        <FaGithub className='text-xl text-white' />
                        <span className='ml-2'>
                            <span className='font-bold'>    </span>
                        </span>     </a></p>
                    <p className='text-xl text-white'> <a href="

        " className='text-blue-500 hover:text-blue-700'>
                        <FaWhatsapp className='text-xl text-white' />
                        <span className='ml-2'>
                            <span className='font-bold'>    </span>
                        </span>     </a></p>
                </div>
            </div>
        </div>
    )
}


export default About;


        