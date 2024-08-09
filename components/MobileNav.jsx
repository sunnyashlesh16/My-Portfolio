"use client";

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from "next/image";
import { MdMenuBook } from 'react-icons/md';
import profile from "@/public/p-1.png"
import ThemeToggle from './ThemeToggle';
import AiChatButton from './AiChatButton';

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "academicProjects",
        path: "/academicProjects",
    },
    {
        name: "details",
        path: "/details",
    },
    {
        name: "personalProjects",
        path: "/personalProjects",
    },
    {
        name: "contact",
        path: "/contact",
    },

]

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                {/* <CiMenuFries className=" text-[32px] text-white"></CiMenuFries> */}
                <MdMenuBook className=" text-[32px] text-white"></MdMenuBook>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className='mt-32 mb-40 text-center text-2xl'>
                    <Link href="/">
                        {/* <h1 className='text-4xl font-semibold'>
                            SUNNY
                        </h1> */}
                        <Image className='mx-10' size={50} width={80} height={80} src={profile} alt="Profile"/>
                    </Link>
                </div>
                <>
                <nav className='flex flex-col justify-center items-center gap-7'>
                   {links.map((link, index) => {
                    return (
                    <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"}text-xl capitalize hover:text-accent transition-all`}>
                        {link.name}
                    </Link>
                    )
                   })}
                </nav>
                <div className="flex items-center gap-4">
                <AiChatButton/>
                {/* <ThemeToggle /> */}
                </div>
                </>
                

            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;