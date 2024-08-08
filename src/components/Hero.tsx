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
              className="mb-6 text-[20px] lg:text-[24px] font-semibold capitalize leading-[1]"
            >
              <span className="text-gray-400 mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Fullstack Developer",
                  2000,
                  "Blockchain Developer",
                  2000,
                  "mobile App Developer",
                  2000,
                ]}
                speed={50}
                className="text-gray-400 text-2xl"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button
                onClick={scrollToContact}
                className="btn btn-lg cursor-pointer"
              >
                Contact Me
              </button>
              <a
                href="https://github.com/Chachu21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient btn-link cursor-pointer"
              >
                My Portfolio
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
            className="hidden lg:flex flex-1 max-w-[320px] max-h-[400px] md:max-w-[482px]"
          >
            <Image className="rounded-full" src={Imagee} alt="profile" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
