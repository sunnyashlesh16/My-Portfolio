"use client";

import { Button} from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CopyToClipboard} from "react-copy-to-clipboard"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import {motion} from "framer-motion";
import { Copy } from 'lucide-react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt/>,
        title: "Phone",
        description: "+1 716 256 5073"
    },
    {
        icon: <FaEnvelope/>,
        title: "Email",
        description: "saisunny@buffalo.edu"
    },
    {
        icon: <FaMapMarkerAlt/>,
        title: "Address",
        description: "Buffalo, NY, USA."
    },
]

export default function Contact ()  {
    const [selectedService, setSelectedService] = useState('Select a service');
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "db63c0d5-27c2-4357-88b0-692cbf30707f");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });
        

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        setSelectedService('Select a service');
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
   }
   
   
    return (
        <motion.section 
        initial={{opacity:0}} animate={{opacity:1, transition: {delay: 0.4, duration: 0.4, ease: "easeIn"}}}
        className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form onSubmit={onSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <input type="hidden" name="access_key" value="db63c0d5-27c2-4357-88b0-692cbf30707f" />
                            <h3 className="text-4xl text-accent-hover" >
                                Let's Connect!
                            </h3>
                            <p className="text-white/60">
                            Eager to contribute to innovative projects and collaborative efforts.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input name="firstname" type="firstname" placeholder="Firstname"/>
                                <Input name="lastname" type="lastname" placeholder="Lastname"/>
                                <Input name="email" type="email" placeholder="Email ID"/>
                                <Input name="phone" type="phone" placeholder="Phone number"/>
                            </div>
                            <Select name="service" value={selectedService} onValueChange={setSelectedService}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="Select a service">
                                            Select a Service
                                        </SelectItem>
                                        <SelectItem value="Wanna Hire you">
                                            Hire You
                                        </SelectItem>
                                        <SelectItem value="Web Dev">
                                            Web Development
                                        </SelectItem>
                                        <SelectItem value="Backend">
                                            Back End Development
                                        </SelectItem>
                                        <SelectItem value="Devops">
                                            DevOps
                                        </SelectItem>
                                        <SelectItem value="Full Stack">
                                            Full Stack
                                        </SelectItem>
                                        <SelectItem value="Ai">
                                            Artificial Intelligence
                                        </SelectItem>
                                        <SelectItem value="Data Engineering/Science">
                                            Data Engineering/Science
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea name="message"className="h-[200px]" placeholder="Type Your message here!"/>
                            <Button size="md" className="max-w-40">
                                Send Message
                            </Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent-hover rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">
                                            {item.title}
                                        </p>
                                        <h3 className="text-xl">
                                           {item.description}
                                           <CopyToClipboard text={item.description}>
                                                <button>
                                                    <Copy className="text-accent-hover"/> 
                                                </button>
                                            </CopyToClipboard>
                                        </h3>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>

        </motion.section>
    )
}