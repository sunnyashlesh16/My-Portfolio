"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion} from "framer-motion";

const services = [
    {
        num:'01',
        skills: 'C++, Socket, Networking Concepts',
        title: 'Chat Application',
        course: 'Modern Networking Concepts',
        description: `Designed and implemented the client and server components of a TCP-based text chat application as part of a modern
networking concepts course.
The project involved socket programming using C/C++, handling multiple socket connections via the select() system
call without multi-threading, and ensuring compatibility with dedicated hosts provided by the course.
The application supports user login, message broadcasting, and private messaging, with all communications relayed
through a central server.
Additionally, implemented command-line interface functionality to display client lists, IP addresses, and handle user
commands effectively.
The project was divided into two stages, focusing initially on basic login functionality and later on advanced features
such as message buffering for offline clients, client blocking/unblocking, and detailed statistics tracking.`,
        href: ""
    },
    {
        num:'02',
        skills: 'Python, Stream Lit, ML, MongoDB',
        title: 'Chicago Crimes Analysis',
        description: `Choosen a real time crime dataset and done the needful data cleaning and data analysis to make the dataset preprocessed.
Applied different machine learning algorithms using different random sampling methods to check the better accuracy.
Using stream lit, developed a front-end application to replicate the steps like viewing the data, applying different algorithms, and
sampling methods, getting the predicted values, and checking the accuracy.
So, here we have developed a problem statement as the starting point and using python, feature importance, data processing, and
machine learning (algorithms) we have predicted labels with better accuracies. This will help the police department to overcome
certain issues and a few possible measures have been implemented as well.`,
        course:'Data Intensive Computing',
        href: "https://github.com/rahult18/Chicago-Crime-Analysis"
    },
    {
        num:'03',
        title: 'Pint OS Implementation',
        skills: 'C, Operating Systems',
        description: `Implemented key components of a priority thread scheduler and system call handler in Pintos OS.
Enhanced the thread scheduling mechanism by incorporating priority scheduling, alarm handling, and multi-level
feedback queue scheduling (MLFQS), ensuring efficient CPU utilization.
Developed and tested system call functionality, including argument passing and handling exit/write operations,
demonstrating strong problem-solving skills and proficiency in low-level programming.`,
        href: ""
    },
    {
        num:'04',
        skills: 'JS, HTML, CSS, ReactJS, MUI',
        title: 'One Data Share',
        description: `
Worked on the Design System of OneDataShare by providing front-end support to their website.
Handled different Material UI components in developing the website.
Explored many other features in React and integrated new enhancements to the components`,
        href: ""
    },
    {
        num:'05',
        skills: 'Verilog, C, Computer Architecture',
        title: 'Design and Implementation of an 8-bit Processor',
        description: `Collaborated in a team to design, simulate, and implement a single-cycle, non-pipelined 8-bit processor using Verilog
and Xilinx Vivado.
Developed key components including the ALU, instruction memory, data memory, register file, control units,
multiplexers, and program counter.
Conducted comprehensive software simulations to verify the processor's functionality, and successfully synthesized
and programmed the design onto a Xilinx Basys 3 FPGA board.
Demonstrated proficiency in hardware description languages and FPGA-based design, culminating in a live hardware
demonstration and in-depth technical interview to validate the project outcomes.
`,
        href: ""
    },

]

const Services = () => {
    return (
       <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                    initial={{opacity: 0}} animate={{opacity:1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" }}}>
                    {services.map((service, index) => {
                        return <div className="flex-1 flex flex-col justify-center gap-6 group" key={index}>
                             <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                {service.num}
                                </div>
                                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent-hover  transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                    <BsArrowDownRight className="text-black text-3xl"/>
                                </Link>
                             </div>
                             <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-hover transition-all duration-500">
                                 {service.title}
                             </h2>
                             <h2 className="text-[30px] font-bold leading-none text-white group-hover:text-accent-hover transition-all duration-500">
                                 {service.skills}
                             </h2>
                             <h2 className="text-[20px] font-bold leading-none text-white group-hover:text-accent-hover transition-all duration-500">
                                 {service.course}
                             </h2>
                             <p className="group-hover:text-white/60">
                                {service.description}
                             </p>
                             <div className="border-b border-white/20 w-full">

                             </div>
                        </div>
                    })}
                </motion.div>
            </div>
       </section>
    )
}

export default Services;