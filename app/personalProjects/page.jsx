"use client"

import { motion } from "framer-motion";
import React from "react";
import {useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub} from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import WorkSliderBtns from "@/components/WorkSliderBtns"
import Link from "next/link";

const projects = [
    {
        num:'01',
        category: 'FullStack Project',
        title: 'Beat Box',
        description:`Developed a full-stack Beat Box Application leveraging Next.js 13.4 and React for a responsive user interface, styled with Tailwind CSS.
Utilized Supabase for authentication and PostgreSQL for database management, ensuring secure user registration and login processes.
Integrated Stripe to manage premium subscriptions, handling secure transactions and user billing information seamlessly.
Implemented advanced audio playback features, allowing users to stream music effortlessly across devices.
Designed and built a comprehensive favorites and playlist system to enhance user experience, enabling personalized music collections.
Used Supabase storage to manage file and image uploads securely, ensuring smooth and efficient handling of user data.
Incorporated react-hook-form for client-side form validation and react-toast for server-side error handling, enhancing application stability and user interaction. 
Developed route handlers for POST operations, directly accessing the database from server components without the need for API calls.
Managed real-time data synchronization between server and client components, ensuring a responsive and up-to-date user experience.`,
        stack:[
            {
                name: "HTML-5"
            },
            {
                name: "CSS-3"
            },
            {
                name: "JavaScript"
            },
            {
                name: "Supbase"
            },
            {
                name: "Next.js"
            },
            {
                name: "React"
            },
            {
                name:"stripe"
            },
            {
                name:"API"
            }
        ],
        live: "https://beat-box-eight.vercel.app/",
        github: 'https://github.com/sunnyashlesh16/My-Music-App',
    },

    {
        num:'02',
        category: 'Ai Portfolio',
        title: 'My Portfolio',
        description:`Developed a dynamic Next.js 14 & React application featuring advanced AI integrations and modern styling with Tailwind css. 
Integrated a chat bot with Vercel AI SDK and enhanced its capabilities through Gemini AI API.
Utilized Langchain for various AI functions, including ChatGeminiAI, templates, and sophisticated document processing with DirectoryLoader, TextLoader, and RecursiveCharacterTextSplitter. 
Implemented vector embeddings and a vector store using AstraDB, and optimized data retrieval with Langchain vector retrievers and retrieval chains. 
Incorporated chat history management and caching with Upstash Redis for improved performance.
        `,
        stack:[
            {
                name: "NextJs"
            },
            {
                name: "React"
            },
            {
                name: "LangChain"
            },
            {
                name: "Gemini Ai"
            },
            {
                name: "AstraDB & Redis(Upstash)"
            }

        ],
        live: "/",
        github: "",
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {

        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition: {delay: 0.4, duration: 0.4, ease: "easeIn"}}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
           <div className="container mx-auto">
               <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-hover transition-all duration-500 capitalize">
                                {project.category}
                            </h2>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent-hover">
                                            {item.name}
                                            {index !== project.stack.length-1 ? "," : "."} 
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="border border-white/20"/>
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent-hover"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                    </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsGithub className="text-white text-3xl group-hover:text-accent-hover"/>
                                            </TooltipTrigger>
                                    
                                            <TooltipContent>
                                                <p>Github Repo</p>
                                            </TooltipContent>
                                    </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                          <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                              {projects.map((project, index) => {
                                return ( 
                                    <SwiperSlide key={index} className="w-full">
                                        <div className=" justify-center items-center bg-primary">                                          
                                            <ScrollArea className="h-[400px]">
                                                {/* {projects.length === index + 1 ?  (
                                                        <>
                                                        {project.description} <Link className="text-accent-hover hover:underline"href="/contact">Contact Me</Link>
                                                        </>
                                                    )  : project.description } */}
                                                    {project.description}
                                            </ScrollArea>
                                        </div>
                                    </SwiperSlide>
                                )
                              })}
                              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"/>
                          </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Work;