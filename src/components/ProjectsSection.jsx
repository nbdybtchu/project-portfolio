import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "PinPoint",
    description: "A full-stack social media application built with React, Tailwind, and Sanity.",
    image: "/images/projects/project1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chuarib/pinpoint-frontend",
    previewUrl: "https://pin-point.netlify.app/",
  },
  {
    id: 2,
    title: "Modern UI/UX React Native App",
    description: "A modern React Native App | NFT Marketplace where you can buy, store, collect NFTS, exchange & earn crypto.",
    image: "/images/projects/project2.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/chuarib/react-native-app",
    previewUrl: "https://showcase-react-native-app.netlify.app/",
  },
  {
    id: 3,
    title: "Todo List App",
    description: "A simple React JS Todo List App",
    image: "/images/projects/project3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chuarib/todo-list",
    previewUrl: "https://chus-todo-list.netlify.app/",
  },
  // {
  //   id: 4,
  //   title: "Personal Tattoo Portfolio",
  //   description: "A personal tattoo portfolio website designed with HTML, CSS, and JavaScript.",
  //   image: "/images/projects/project4.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://chuarib.gitlab.io/project-tattoo/",
  //   previewUrl: "https://chuarib.gitlab.io/project-tattoo/",
  // },
  // Add more projects as needed
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-[6rem] px-14">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;