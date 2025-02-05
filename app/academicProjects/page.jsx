"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion} from "framer-motion";

const services = [
    {
        num:'01',
        skills: 'Database Systems, Algorithms, Data Structures, C++, DBMS',
        title: 'TACO DB',
        description: `Contributed to the development of a highly efficient DBMS by implementing POSIX-based file I/O, designed buffer
management, and optimized data page structures for efficient record storage and retrieval.
Designed an iterator-based query processor to handle selection, projection, and aggregation, improving execution
efficiency for single-table queries.
Built a B-Tree index system to enhance data retrieval speed, supporting efficient search, insertion, and deletion
operations
Implemented Cartesian product, sort-merge join, and index nested-loop join to optimize multi-table query
execution and improve database performance.`,
        href: ""
    },
    {
        num:'02',
        skills: 'C/C++, Sockets & TCP, Networking Concepts',
        title: 'Modern Text Chat Application',
        course: 'Modern Networking Concepts',
        description: `Designed and implemented client-server components for reliable communication, leveraging the select() system call
for efficient multi-socket handling in a single-threaded environment.
Developed key user functionalities like login, message broadcasting, private messaging, and a centralized server for
seamless interaction.
Integrated a command-line interface with commands (LIST, IP, PORT, LOGIN, REFRESH, EXIT), message
buffering for offline clients, client blocking/unblocking, and login tracking, enhancing user management and system
robustness.
Implemented three reliable transport protocols: ABT (stop-and-wait), GBN (sliding window with full
retransmission on loss), and SR (selective retransmission of lost packets).`,
        href: ""
    },
    {
        num:'03',
        title: 'Pint OS Implementation',
        skills: 'C, Operating Systems, Threading, Scheduling, System Calls',
        description: `Developed a priority thread scheduler with FIFO, preemption, and dynamic priority changes to enhance thread
management and system responsiveness.
Optimized thread sleep behavior by removing busy-waiting loops, improving CPU utilization.
Solved priority inversion with priority donation and implemented the Multi-Level Feedback Queue Scheduler
(MLFQS) for dynamic priority adjustments.
Enabled argument passing and system call handling in Pintos, supporting commands like ‘exit’ and ‘write’ with
error handling and stack-based argument passing for seamless execution`,
        href: ""
    },
    {
        num:'04',
        skills: 'ReactJS, SpringBoot, MongoDB, JUnit, Docker, Log4j, Spring security',
        title: 'One Data Share | IBM',
        description: `
Contributed to a research project developing a Spring Boot-based microservices backend and a React frontend,
ensuring scalability and efficiency.
Designed and implemented key microservices using Spring MVC, JPA, Spring Security, JWT
authentication, and MongoDB for secure and efficient data handling.
Integrated Eureka Server for service discovery, containerized microservices with Docker, leveraged Log4j for
efficient logging, and utilized Lombok to reduce boilerplate code.
Enhanced API reliability with JUnit, TestNG, and MockMVC testing, while documenting services using
Swagger for clear API communication`,
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
    {
        num:'06',
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
    }
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