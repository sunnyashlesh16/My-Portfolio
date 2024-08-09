"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import photo from "@/public/Heros.jpg"

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div initial={{opacity:0}} animate={{opacity:1, transition: {delay:0.4, duration: 0.4, ease: "easeIn"}}}>
                <motion.div 
                    initial={{opacity:0}} animate={{opacity:1, transition: {delay:0.4, duration: 0.4, ease: "easeInOut"}}}
                    className="w-[250px] h-[250px] xl:w-[390px] xl:h-[390px] mix-blend-lighten absolute">
                    <Image src={photo} priority quality={100} fill alt="" className="object-cover rounded-full aspect-square"/>
                </motion.div>
                <motion.svg className="w-[300px] xl:w-[476px] h-[300px] xl:h-[476px]"
                    fill="transparent" viewBox="0 0 586 506" xmlns="http://w3.org/2000/svg">
                    <motion.circle cx="250" cy="205" r="247" stroke="#00ff99" strokeWidth="6"
                        strokeLinecap= "round" strokeLinejoin="round" initial={{ strokeDasharray: "24 10 0 0"}} animate={{strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], rotate: [120, 360], }}
                        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse"}}/>
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo;