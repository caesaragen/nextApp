import React from 'react'
import Image from "next/image";
import profilePic from '../public/profilePic.jpg';
import amlaHome from '../public/amlahome.png';
import amlaMedia from '../public/amlamedia.png';
import amlaorg from '../public/amlaorg.png';
import comparison from '../public/comparison.png';
import reduce from '../public/reduce.png';
import acc from '../public/acc.png';

let projectsList = [
    {
        title: "AMLA",
        description: "AMLA project is being implemented in partnership with the African Legal Support Facility of the African Development Bank and the African Union Commission, in coordination with several African Universities. It is a responsive website that is built with Laravel and styled with Bootsrap.",
        image: amlaorg,
        link: "https://amla.org/",
    },
    {
        title: "African Arbitration Legislation Atlas",
        description: "The African Arbitration Legislation (AAL) holds arbitration laws of African countries. It is a tool that has interactive and comparative features. I was the lead frontend developer for the project, using technologies such as Laravel/PHP, JavaScript, HTML/CSS, Bootstrap and JQuery.",
        image: comparison,
        link: "https://africanarbitrationatlas.org/atlas/",
    },
    {
        title: "Advocacy Accelerator",
        description: "Challenging Patriarchy is a Platform designed for young feminists ni East Africa. It is a responsive website that is built with  Laravel/PHP, JavaScript, HTML/CSS, Bootstrap and JQuery..",
        image: acc,
        link: "https://challengingpatriarchy.advocacyaccelerator.org/",
    },
    {
        title: "Reduce My Carbon",
        description: "Reduce my CO2 is a mobile App built using React Native and Consuming API end points built in Laravel",
        image: reduce,
        link: "https://amla.org/",
    }
]
const ProjectCard = ({ title, description, image }) => {
    return (
        <div className="md:w-[100rem] md:h-[40rem] w-[20.5rem] h-[40rem] p-4 rounded-2xl  dark:bg-slate-800 shadow-lg dark:shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row">
            <div className=" h-full w-full  shadow-md rounded-2xl basis-2/3 relative">
                <div className=" text-white z-10 bg-[#5865F2] absolute pl-8 pr-8 pb-2 pt-2  rounded-tl-2xl rounded-br-2xl font-semibold">
                    <h1>{title}</h1>
                </div>
                <div className="h-full w-full relative border-2 border-white rounded-2xl">
                    <Image
                        src={image}
                        alt="thumbnail"
                        layout="fill"
                        objectFit="contain"
                        className=" rounded-2xl"
                    />
                </div>
            </div>
            <div className=" h-full w-7/12 mr-2 rounded-2xl ">
                <p className="m-2 font-bold pl-1 text-lg text-[#5865F2]">About {title}</p>
                <p className="m-2 text-lg text-white">
                    {description}
                </p>
            </div>
        </div>
    )
}
// create nextButton  to render ProjectCard with next project in projectsList
const nextButton = () => {
    let nextProject = projectsList[0];
    projectsList.shift();
    return <ProjectCard {...nextProject} />
}


const projects = () => {
    return (
        //render all projects
        <div className="md:container md:mx-auto flex flex-col justify-center items-center">
            <h1 className="text-center text-2xl font-bold text-white">Projects</h1>
            <div className="flex flex-col justify-center items-center">
                {projectsList.map((project, index) => {
                    return (
                        <ProjectCard key={index} title={project.title} description={project.description} image={project.image} link={project.link} />
                    )
                }
                )}
                {/* <button className="bg-white text-white font-bold rounded-2xl p-2">
                    Next Project
                </button> */}
            </div>
        </div>

    )
}

export default projects