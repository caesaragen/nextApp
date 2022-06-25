import React from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { FaBootstrap, FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import Image from "next/image";
import profilePic from '../public/profilePic.jpg';
import profile from '../public/profile.jpg';
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { AiOutlineClockCircle } from "react-icons/ai";
import { VscChecklist } from "react-icons/vsc";
import { FaPlay } from "react-icons/fa";
import { MoonIcon } from "@heroicons/react/solid";
import { SunIcon } from "@heroicons/react/solid";
import { FaLaravel } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";





const About = ({ toggle, setToggle }) => {
    return (
        <div className="md:w-[100rem] md:h-[40rem] w-[20.5rem] z-10 h-[40rem] p-4 rounded-2xl  dark:bg-slate-800 shadow-lg dark:shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse">
            <div className=" h-full w-full  shadow-md rounded-2xl basis-2/3 relative">
                <div className=" text-white z-10 bg-[#5865F2] absolute pl-8 pr-8 pb-2 pt-2  rounded-tl-2xl rounded-br-2xl font-semibold">
                    <h1>Joel Ragen Aduma</h1>
                </div>
                <div className="h-full w-full relative border-2 border-white rounded-2xl">
                    <Image
                        src={profile}
                        alt="thumbnail"
                        layout="fill"
                        objectFit="cover"
                        className=" rounded-2xl"
                    />
                </div>
            </div>

            <div className=" h-full w-full mr-2 rounded-2xl ">
                <p className="m-2 font-bold pl-1 text-lg text-[#5865F2]">About</p>
                <h1 className="m-2 text-4xl font-bold dark:text-white">
                    Software Developer
                </h1>
                <p className="m-2 text-lg text-white">
                    I am a software developer with a keen eye for building custom components to match designs and client expectations.
                </p>
                <p className="m-2 text-lg text-white">
                    I am experienced in:
                </p>
                <ul className='flex flex-wrap'>
                    <li className="m-2 text-lg text-white flex  items-center">
                        <FaHtml5 className="mr-2" color="#61DBFB" />
                        HTML5
                    </li>
                    <li className="m-2 text-lg text-white flex  items-center">
                        <FaCss3 className="" color="#61DBFB" />
                        CSS3
                    </li>
                    <li className="m-2 text-lg text-white flex  items-center">
                        <FaJs className="mr-2" color="yellow" />
                        Javascript
                    </li>
                    <li className="m-2 text-lg text-white flex  items-center">
                        <FaReact className="mr-2" color="#61DBFB" />
                        React
                    </li>
                    <li className="m-2 text-lg text-white flex  items-center">
                        <FaNodeJs className="mr-2" color="green" />
                        NodeJS
                    </li>
                    <li className="m-2 text-lg text-white flex  items-center">
                        <FaPhp className="mr-2" color="#61DBFB" />
                        PHP
                    </li>
                    <li className="m-2 text-lg text-white flex  items-center">
                        <FaLaravel className="mr-2" color="red" />
                        Laravel
                    </li>
                    <li className="m-2 text-lg text-white flex  items-center">
                        <FaBootstrap className="mr-2" color="#61DBFB" />
                        Bootstrap
                    </li>
                    <li className="m-2 text-lg text-white flex  items-center">
                        <SiTailwindcss className="mr-2" color="#61DBFB" />
                        Tailwind
                    </li>
                </ul>
                <ul className='hidden md:block'>
                    <li className="m-2 text-lg text-white flex  items-center">
                        <p>Consuming REST APIs as well backend development using NodeJs and PHP/Laravel </p> 
                    </li>
                    <li className="m-2 text-lg text-white flex  items-center">
                        <p>Building responsive web applications using Next.js and React-router-dom.</p>
                    </li>
                    <li className="m-2 text-lg text-white flex  items-center">
                        <p>
                            Building applications using the MVC pattern.
                        </p>
                    </li>
                    </ul>
            </div>
        </div>
    )
}


export default About;


