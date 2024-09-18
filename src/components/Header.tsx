"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
// import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [outer, setOuter] = useState("");
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (url: string) => {
    setOuter(url);
    toggleMenu();
  };

  const Links = [
    {
      id: 1,
      title: "Home",
      url: "home",
    },
    {
      id: 2,
      title: "About me ",
      url: "about",
    },
    {
      id: 3,
      title: "Services",
      url: "services",
    },
    {
      id: 4,
      title: "Projects",
      url: "projects",
    },
    {
      id: 5,
      title: "Contact me",
      url: "contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      Links.forEach((link) => {
        const section = document.getElementById(link.url);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(link.url);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="fixed top-0 z-50 left-1/2 transform -translate-x-1/2 max-w-screen-xl container mx-auto">
      <nav className="relative">
        <div className="py-4 md:flex md:justify-between md:items-center px-3 md:px-0 bg-[#0A192F]">
          <div className="flex items-center justify-between z-50 ">
            <Link href="/">
              <h1 className="capitalize font-bold text-2xl">chalachew</h1>
            </Link>

            {/* Mobile menu button */}
            <div className="flex md:hidden ">
              <button
                onClick={toggleMenu}
                type="button"
                className="focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute inset-x-0 z-50 w-full px-6 py-4 md:px-0 md:py-0 transition-all duration-300 ease-in-out bg-[#0A192F] md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              {Links.map((link) => (
                <ScrollLink
                  to={link.url}
                  smooth={true}
                  duration={500}
                  spy={true}
                  key={link.id}
                >
                  <li
                    className={`my-3 list-none text-gray-300 text-xl capitalize transition-colors duration-300 transform  ${
                      activeSection === link.url
                        ? "underline underline-offset-[12px]"
                        : "hover:underline hover:underline-offset-[12px]"
                    } md:mx-4 md:my-0`}
                    onClick={() => handleLinkClick(link.url)}
                  >
                    {link.title}
                  </li>
                </ScrollLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
