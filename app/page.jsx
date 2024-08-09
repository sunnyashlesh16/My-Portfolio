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
                  Hello I'm <br/> <span className="text-accent">Sai Sunny Aashlesh Togarucheeti</span>
                </h1>
                <p className="max-w-[600px] mb-6 text-white/80">
                a dynamic software engineer with a educational background, including an MS in Computer Science from the University at Buffalo.
                With hands-on experience in front-end development, and automation scripting across reputable companies like Caterpillar India and Cognizant.
                Also, excited to get my hands dirty with diverse tech stacks and has a proven track record of leading successful personal projects. Also, there is an advanced chatbot integrated to this website which can be accessible via a chat bot (bot icon in the navigation section). 
                Passionate about leveraging cutting-edge technologies, delivering impactful solutions and committed to driving innovation .
                </p>
                <div className="flex flex-col xl:flex-row  items-center gap-8">
                  <Button >
                    <a href="/resume.pdf" download="resume.pdf">
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