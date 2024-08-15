"use client";
import React from "react";
// Images
import Imagee from "../../public/asset/me.jpg";
// Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
// Type animation
import { TypeAnimation } from "react-type-animation";
// Motion
import { motion } from "framer-motion";
// Variants
import { fadeIn } from "./variants";
import Image from "next/image";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[22px] font-bold leading-[0.8] lg:text-[28px]"
            >
              <span className="text-lg md:text-2xl"> Hi there, 👋</span>
              <br />
              <br />
              Chalachew Tsegaye
              <br />
              <br />
              <br />
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[20px] lg:text-[24px] font-semibold  leading-[1]"
            >
              <span className="text-gray-400 mr-3">I am a</span>
              <TypeAnimation
                sequence={[
                  "fullstack developer",
                  2000,
                  "blockchain developer",
                  2000,
                  "mobile app developer",
                  2000,
                ]}
                speed={50}
                className="text-gray-400 text-xl md:text-2xl"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max md:gap-x-6 gap-x-3 items-center mb-12 mx-auto lg:mx-0"
            >
              <button
                onClick={scrollToContact}
                className="btn btn-lg cursor-pointer"
              >
                Contact Me
              </button>
              <a
                href="https://drive.google.com/file/d/12rqJwG1nt1jbP36Ho1wrtT0YyMdoMLo9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient btn-link cursor-pointer flex space-x-1 items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-white flex"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <span>Resume</span>
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[30px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://www.linkedin.com/in/chalachew-tsegaye-444b26320/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Chachu21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] max-h-[382px] md:max-w-[382px]"
          >
            <Image className="rounded-full" src={Imagee} alt="profile" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
