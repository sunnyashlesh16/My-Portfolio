import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaInstagram, FaTwitter} from "react-icons/fa"

import { SiBento } from "react-icons/si";

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/sunnyashlesh16"},
    {icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/sai-sunny-aashlesh-togarucheeti"},
    {icon: <SiBento/>, path: "https://bento.me/saisunny"},
    {icon: <FaInstagram/>, path: "https://www.instagram.com/saisunny_16"},
];

const Socials = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Socials;