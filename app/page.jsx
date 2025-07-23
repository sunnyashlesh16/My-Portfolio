"use client";

import { Button} from "@/components/ui/button"
import { FiDownload, FiFownload } from 'react-icons/fi'
import Socials from "@/components/Socials"
import Stats from "@/components/Stats"
import Photo from "@/components/Photo"
import { TypeAnimation } from "react-type-animation";
// import Link from "next/link";
// import { Bot } from "lucide-react";

const Home = () => {
  return (
    <section className="h-full">
        <div className="container mx-auto h-full">
            <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
              <div className="text-center xl:text-left order-2 xl:order-none">
                <TypeAnimation className="text-xl"
                    sequence={["Software Developer", 1000, "Web Developer", 1000, "Full stack developer", 1000, "Backend Engineer", 1000,]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
                <h1 className="h1">
                  Hello I'm <br/> <span className="text-accent">Sai Sunny Togarucheeti</span>
                </h1>
                <p className="max-w-[600px] mb-6 text-white/80">
                With over 3 years of professional experience, I’ve had the opportunity to work across diverse industries from pharmacy to clean energy, building scalable, full-stack applications and delivering impactful solutions. My journey began at Cognizant, where I contributed to secure, high-transaction systems for CVS Pharmacy using React, Spring Boot, and AWS. At Caterpillar, I enhanced internal tools with accessible UI/UX practices and advanced DevOps workflows. During my time as a Graduate Assistant at IBM and OneDataShare, I architected cloud-native microservices with Spring Boot, MongoDB, and Docker, and led real-time interface development with React and WebSockets. I’ve also played a foundational role at Exergy, building a solar analytics platform with Next.js and Supabase. Across each role, I’ve consistently leveraged modern frameworks and CI/CD practices to accelerate development cycles and improve user experiences.
                </p>
                <div className="flex flex-col xl:flex-row  items-center gap-8">
                  <Button >
                    <a href="/resume.pdf" download="sunny.pdf">
                      Download CV
                    </a>
                    <FiDownload className="text-xl"/>
                  </Button>
                  <div className="mb-8 xl:mb-0">
                    <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                  </div>
                </div>
              </div>
              <div className="order-1 xl:order-none mb-8 xl:mb-0">
                <Photo/>
              </div>
            </div> 
        </div>
      <Stats/>
    </section>
  );
}

export default Home;