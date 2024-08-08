"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import me from "../../public/asset/me.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const TAB_DATA: any = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript & Typescript</li>
        <li>React</li>
        <li>Next js</li>
        <li>Fultter</li>
        <li>MongoDb</li>
        <li>Rell</li>
        <li>Chromia</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>Bahir Dar university</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
        <li>IBM Introdu ction to Softw are Engineering</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  //   const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    console.log(id);
    setTab(id);
    // startTransition(() => {

    // });
  };

  return (
    <section className="text-white container mx-auto px-2 md:px-0" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  py-8 px-2 md:px-0 xl:gap-16 sm:py-16 ">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <Image src={me} width={500} height={500} alt="about me" />
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mt-4 md:mt-0 text-left flex flex-col"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-gray-300">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              <span> Skills</span>
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              <span> Education</span>
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              <span>Certifications</span>
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t: any) => t.id === tab).content}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
