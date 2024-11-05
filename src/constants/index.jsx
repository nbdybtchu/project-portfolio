import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiSanity } from "react-icons/si";
import { PiFigmaLogoDuotone } from "react-icons/pi";


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Chu Arib",
  info: "Welcome to my Portfolio. Have a look around.",
};

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-5xl text-cyan-400" />,
    name: "React",
  },
  {
    icon: <TbBrandNextjs className="text-4xl lg:text-5xl text-white" />,
    name: "Next.js",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl lg:text-5xl text-blue-400" />,
    name: "Tailwind CSS",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-5xl text-green-600" />,
    name: "MongoDB",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-5xl text-green-600" />,
    name: "Node.js",
  },
  {
    icon: <FaGitAlt className="text-4xl lg:text-5xl text-orange-600" />,
    name: "Git",
  },
  {
    icon: <SiSanity className="text-4xl lg:text-5xl text-red-700" />,
    name: "Sanity",
  },
  {
    icon: <PiFigmaLogoDuotone className="text-4xl lg:text-5xl text-pink-500" />,
    name: "Figma",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/nbdybtchu",
    icon: <FaFacebook fontSize={25} className="hover:bg-blue-800 rounded-full" />,
  },
  {
    href: "https://www.instagram.com/nbdybtchu/",
    icon: <FaInstagram fontSize={25} className="hover:bg-pink-700 rounded" />,
  },
  {
    href: "https://github.com/nbdybtchu",
    icon: <FaGithub fontSize={25} className="hover:bg-blue-900 rounded-full" />,
  },
  {
    href: "https://www.linkedin.com/in/chuarib/",
    icon: <FaLinkedin fontSize={25} className="hover:bg-blue-900 rounded" />,
  },
];
