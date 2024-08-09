"use client";

import {FaJs, FaReact, FaFigma, FaNodeJs, FaJava, FaStripe, FaAws,  } from "react-icons/fa";
import {RiSupabaseFill} from "react-icons/ri"
import {
    SiTailwindcss, SiNextdotjs,
    SiPlaywright,
    SiMicrosoftazure,
    SiPostman
} from "react-icons/si";
import { Button} from "@/components/ui/button"
import { FiDownload } from 'react-icons/fi'
import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import { TooltipContent, TooltipTrigger, TooltipProvider, Tooltip } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import {motion} from "framer-motion";

const experience = {
    title: 'My Experience',
    description: "",
    items: [
        // {
        //     company: "Hive",
        //     position: "Full Stack Intern",
        //     duration: "July 2024 - Present",     
        // },
        {
            company: "One Data Share",
            position: "Research Student-Front End",
            duration: "Jan 2024 - May 2024",     
        },
        {
            company: "Caterpillar",
            position: "Software Engineer",
            duration: "Sep 2022 - July 2023",     
        },
        {
            company: "Cognizant",
            position: "Automation Engineer",
            duration: "Mar 2021 - Aug 2022",     
        },
    ]
};
const certifications = {
    title: 'My Certifications',
    description: "",
    items: [
        {
            company: "Data Scientist Associate",
            position: "Microsoft Certfified",
            duration: "June 2024",
            path: "/azuredp100.pdf" ,
            down: "azuredp100.pdf"   
        },
        {
            company: "Ai Associate",
            position: "Oracle Cloud Certfified",
            duration: "July 2024", 
            path: "/ociai.pdf" ,
            down: "ociai.pdf"     
        },
        {
            company: "Gen Ai Professional",
            position: "Oracle Cloud Certified",
            duration: "July 2024",
            path: "/ocigenai.pdf" ,
            down: "ocigenai.pdf"      
        },
    ]
};

const education = {
    title: 'My Education',
    description: "",
    items: [
        {
            institution: "University At Buffalo",
            degree: "Master's",
            course: "Computer Science & Engineering",
            duration: "Aug 2023 - Jan 2025",     
        },
        {
            institution: "Sathyabama University",
            degree: "Bachelor Of Engineering",
            course: "Electronics & Communication Engineering",
            duration: "Aug 2017 - June 2021",    
        },
    ]
};

const skills = {
    title: "My Skills",
    description: "",
    skillList: [
        {
            icon: <FaJava/>,
            name: "Java",
        },
        {
            icon: <RiSupabaseFill/>,
            name: "Supabase",
        },
        {
            icon: <FaJs/>,
            name: "javascript",
        },
        {
            icon: <FaReact/>,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs/>,
            name: "NextJs",
        },
        {
            icon: <SiTailwindcss/>,
            name: "tailwind.css",
        },
        {
            icon: <SiPlaywright/>,
            name: "Playwright",
        },
        {
            icon: <FaStripe/>,
            name: "Stripe",
        },
        {
            icon: <FaAws/>,
            name: "Aws",
        },
        {
            icon: <SiMicrosoftazure/>,
            name: "Azure",
        },
        {
            icon: <SiPostman/>,
            name: "Postman",
        },

    ]
}

const resume = () => {
    return (
        <motion.div 
            initial= {{opacity: 0}} 
            animate={{opacity: 1, transition: {delay: 0.4, duration: 0.4, ease:"easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
            >
             <div className="container mx-auto">
                <Tabs defaultValue="education" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="education">
                            Education 
                        </TabsTrigger> 
                        <TabsTrigger value="experience">
                            Work Experience
                        </TabsTrigger>
                        <TabsTrigger value="skills">
                            Skills
                        </TabsTrigger>
                        <TabsTrigger value="certifications">
                            Certifications
                        </TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full" >
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {experience.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent-hover">
                                                        {item.duration}
                                                    </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent-hover">

                                                        </span>
                                                        <p className="text-white/60">
                                                           {item.company} 
                                                        </p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full" >
                        <div className="flex flex-col gap-[30px] text-center xl:test-left">
                                <h3 className="text-4xl font-bold">
                                    {education.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent-hover">
                                                
                                                        {item.duration} 
                                                    </span>
                                                    <h3 className="text-xl max-w-[360px] min-h-[60px] text-center lg:text-left">
                                                        {item.degree}
                                                    </h3>
                                                    <h2 className="text-lg max-w-[360px] min-h-[60px] text-center lg:text-left">
                                                        {item.course}
                                                    </h2>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent-hover"/>
                                                        <p className="text-white/60">
                                                           {item.institution}
                                                        </p>
                                                    </div>
                                                </li>
                                        )})}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full" >
                           <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                               <h3 className="text-4xl font-bold">
                                {skills.title}
                               </h3>
                               <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {skills.description}
                               </p>
                               </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                {skills.skillList.map((skill, index) => {
                                    return (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent-hover transition-all duration-300">
                                                            {skill.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">
                                                        {skill.name}
                                                        </p>                                    
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    )
                                })}
                            </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="certifications" className="w-full" >
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {certifications.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {certifications.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                                        {certifications.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent-hover">
                                                        {item.duration}
                                                    </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.company}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent-hover"/>
                                                        <p className="text-white/60">
                                                        {item.position}
                                                        </p>
                                                        <Button >        
                                                            <a href={item.path} download={item.down}>
                                                               <FiDownload className="text-xl"/>
                                                            </a>
                                                        </Button>
                                                    </div>
                                                </li> 
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
             </div>
        </motion.div>
    )
}

export default resume;