"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
// import equb from "../asset/equb.jpg";

const projectsData = [
  {
    id: 1,
    title: "Equb semister project with MERN",
    description: "Project 1 description",
    image: "../asset/equbHome.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Chachu21/equb",
    previewUrl: "https://equb.netlify.app/",
  },
  {
    id: 2,
    title: "Mentorship final year next js project ",
    description: "Project 2 description",
    image: "../asset/mentorship.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Chachu21/mentorship",
    previewUrl: "https://mentorship-sooty.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "../asset/equb.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "../asset/equb.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 6,
    title: "online contact store site",
    description: "Project 5 description",
    image: "../asset/contact.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Chachu21/online_contact_store",
    previewUrl: "/",
  },
];

const Project = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={() => {
            handleTagChange("All");
          }}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => {
            handleTagChange("Web");
          }}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={() => {
            handleTagChange("Mobile");
          }}
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

export default Project;
