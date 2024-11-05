import React, { useState, useEffect } from "react";
import { PROFILE } from "../constants";
import profilePic from "../assets/hero.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import TabButton from "./TabButton";
import { SKILLS } from "../constants";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-3">
        {SKILLS.map((skills, index) => (
          <motion.div
          key={index}
          className="mb-8 flex cursor-grab"
          initial={{
            opacity: 0,
            x: Math.random() * 300 - 150, // Randomize initial X position
            y: Math.random() * 300 - 150, // Randomize initial Y position
          }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          drag
          dragConstraints={{ left: -80, right: 80, top: -80, bottom: 80 }}
          whileDrag={{ scale: 1.1 }}
        >
            <div className="flex items-center">
              <div className="w-auto h-auto">
                {React.cloneElement(skills.icon, { width: '100%', height: '100%' })}
              </div>
              <h3 className="px-4 text-lg">{skills.name}</h3>
            </div>
          </motion.div>
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
        <li>Zuitte Coding Bootcamp Full Stack Web Developer Certificate</li>
      </ul>
    ),
  },
];

const HeroSection = () => {
  const [tab, setTab] = useState("skills");
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  // Trigger state change after 3 seconds to indicate that the intro is complete
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroComplete(true);
    }, 3000); // Adjust this timing as needed

    return () => clearTimeout(timer);
  }, []);

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <div className="relative flex min-h-screen" id="hero">
      {isIntroComplete && (
        <>
          <motion.img
            src={profilePic}
            alt={PROFILE.name}
            className="absolute inset-0 z-10 h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.div
            className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          ></motion.div>
        </>
      )}
      <div className="relative z-20 flex w-full md:w-1/2 px-14 pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isIntroComplete ? 1 : 0 }}
          transition={{ duration: 2, delay: isIntroComplete ? 0.5 : 0 }}
          className="w-full"
        >
          <h1 className="text-5xl font-extrabold uppercase tracking-wide md:text-6xl text-left text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-1100 font-sans">
            {PROFILE.name}
          </h1>
          <div className="pt-2 text-xs font-extrabold uppercase px-2 text-[#efefef]">
            <TypeAnimation
              sequence={[
                "Full-stack React Developer",
                1000,
                "With a flair for graphic design",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: isIntroComplete ? 1 : 0, y: isIntroComplete ? 0 : -40 }}
            transition={{ duration: 1 }}
            className="text-3xl font-extrabold text-white mt-8"
          >
            Hi! Feel free to look around.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: isIntroComplete ? 1 : 0, x: isIntroComplete ? 0 : -40 }}
            transition={{ duration: 1.5 }}
            className="text-base mt-4"
          >
            I am a Full Stack React Developer passionate about building interactive and responsive web applications.
            Proficient in JavaScript, React, Node.js, and modern web tools,
            I am a quick learner and collaborative team player eager to create impactful applications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isIntroComplete ? 1 : 0, y: isIntroComplete ? 0 : 40 }}
            transition={{ duration: 1 }}
            className="flex flex-row justify-start mt-8"
          >
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
          {isIntroComplete && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ staggerChildren: 0.4, duration: 1.5 }}
              className="mt-6"
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
