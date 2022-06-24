import React from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import Image from "next/image";
import profilePic from '../public/profilePic.jpg';
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
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
        <div className="md:w-[100rem] md:h-[40rem] w-[20.5rem] h-[40rem] p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse">
            <div className=" h-full w-full  shadow-md rounded-2xl basis-2/3 relative">
                <div className=" text-white z-10 bg-[#5865F2] absolute pl-8 pr-8 pb-2 pt-2  rounded-tl-2xl rounded-br-2xl font-semibold">
                    <h1>Joel</h1>
                </div>
                <div className="h-full w-full relative border-2 border-white rounded-2xl">
                    <Image
                        src={profilePic}
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

                <div className=" pt-16 pr-2 pl-2 flex flex-row justify-around flex-wrap">
                    <div className="flex flex-row items-center m-2">
                        <FaReact size={20} color="#61DBFB" />
                        <h1 className="pl-1 dark:text-white">ReactJs</h1>
                    </div>
                    <div className="flex flex-row items-center m-2">
                        <FaLaravel size={20} color="#61DBFB" />
                        <h1 className="pl-1 dark:text-white">Laravel</h1>
                    </div>
                    <div className="flex flex-row items-center m-2">
                        <FaNodeJs size={20} color="#61DBFB" />
                        <h1 className="pl-1 dark:text-white">NodeJs</h1>
                    </div>
                    <div className="flex flex-row items-center m-2">
                        <FaJs size={20} color="#007acc" />
                        <h1 className="pl-1 dark:text-white">JavaScript</h1>
                    </div>
                    <div className="flex flex-row items-center m-2">
                        <FaHtml5 size={20} color="#007acc" />
                        <h1 className="pl-1 dark:text-white">HTML</h1>
                    </div>
                    <div className="flex flex-row items-center m-2">
                        <FaCss3 size={20} color="#007acc" />
                        <h1 className="pl-1 dark:text-white">CSS</h1>
                    </div>
                    <div className="flex flex-row items-center m-2">
                        <FaPhp size={20} color="#007acc" />
                        <h1 className="pl-1 dark:text-white">PHP</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;


        