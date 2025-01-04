"use client";

import React from "react";
import { FileJson, NavigationIcon as Nuxt, GitBranch } from "lucide-react";
import { BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi";
import {
  SiExpress,
  SiFlutter,
  SiNextdotjs,
  SiPostgresql,
  SiSequelize,
  SiTsnode,
} from "react-icons/si";
import { FaReact, FaVuejs } from "react-icons/fa6";

const skills = [
  { name: "Node.js", icon: SiTsnode, color: "green" },
  { name: "Express", icon: SiExpress, color: "green" },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Sequelize", icon: SiSequelize },
  { name: "JavaScript & TypeScript", icon: FileJson },
  { name: "React & Redux", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Flutter", icon: SiFlutter },
  { name: "MongoDB", icon: BiLogoMongodb, color: "green" },
  { name: "Nuxt.js & Vue.js", icon: FaVuejs, color: "green" },
  { name: "Git", icon: GitBranch },
  { name: "Tailwindcss", icon: BiLogoTailwindCss },
];

const AboutSection = () => {
  return (
    <section className="text-white container mx-auto px-4 md:px-8" id="about">
      <div className="flex flex-col items-center text-center py-12 px-4">
        <div className="flex flex-col items-center max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
          <p className="text-lg lg:text-xl leading-normal text-gray-300 mb-6">
            I am a passionate and professional full-stack web developer,
            dedicated to creating intuitive, dynamic, and user-friendly
            applications. My expertise includes working with modern web
            technologies such as{" "}
            <span className="font-semibold">JavaScript</span>,{" "}
            <span className="font-semibold">React</span>,{" "}
            <span className="font-semibold">Node.js</span>,{" "}
            <span className="font-semibold">Next.js</span>, and{" "}
            <span className="font-semibold">SQL/NoSQL databases</span>. I thrive
            on crafting clean, maintainable code and collaborating with teams to
            deliver impactful solutions. My focus is always on combining
            creativity with functionality to meet both client and user needs.
          </p>
          <h3 className="text-2xl font-semibold text-white m-6">Skills</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16 text-lg text-gray-300">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="flex items-center space-x-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                <skill.icon
                  className={`w-12 h-12 ${
                    skill.color ? `text-${skill.color}-400` : "text-blue-400"
                  }`}
                />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
