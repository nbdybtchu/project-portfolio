"use client";
import React, { useTransition, useState } from "react";
import aboutImage from "../assets/aboutImage.png";
import TabButton from "./TabButton";
import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2">
        {SKILLS.map((skills, index) => (
          <div key={index} className="mb-8 flex">
            <div className="flex items-center">
              <div className="w-auto h-auto">
                {React.cloneElement(skills.icon, { width: '100%', height: '100%' })}
              </div>
              <h3 className="px-4 text-lg">{skills.name}</h3>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Zuitt Coding Bootcamp</li>
        <li>St. John Bosco Institute of Arts and Sciences, Makati</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Zuitte Conding Bootcamp Full Stack Web Developer Certificate</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="container flex flex-col justify-center items-center min-h-screen mx-auto px-6 py-10" id="about">
      <div className="md:grid md:grid-cols-2 lg:gap-[12rem] md:gap-[4rem] items-center w-full lg:max-w-5xl sm:py-16">
        <motion.img
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src={aboutImage} 
        alt="aboutImage" 
        width={400} 
        height={400} 
        className="rounded-full m-auto sm:mb-16" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <motion.h2 
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-4 animate-fade-left animate-delay-100">About Me</motion.h2>
          <motion.p 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0}}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-base animate-fade-right animate-delay-100">
            I am a Full Stack React Developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, Tailwind,
            HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </motion.p>
          <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0}}
          transition={{ staggerChildren: 0.4, duration: 1.5, }}
          viewport={{ once: true }}
          className="mt-6">
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
