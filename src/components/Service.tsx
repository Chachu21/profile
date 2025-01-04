import React from "react";
import { FiMonitor } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import { ImMobile } from "react-icons/im";
import { SiBlockchaindotcom } from "react-icons/si";
const Service = () => {
  const services = [
    {
      id: 1,
      title: "Web Design",
      icon: <FiMonitor />,
      description:
        " Web design is the process of creating and maintaining websites. It encompasses the creation of the visual elements of a website, such as the layout, colors, and fonts, as well as the functionality of the website, such as the navigation and user experience.",
    },
    {
      id: 2,
      title: "Web Development",
      icon: <FaCode />,
      description:
        "Web development is the process of creating and maintaining websites. It encompasses the coding and programming of a website, as well as the design and functionality of the website.",
    },
    {
      id: 3,
      title: "Mobile App Development",
      icon: <ImMobile />,
      description:
        "Mobile app development is the process of creating and maintaining mobile apps. It encompasses the coding and programming of a mobile app, as well as the design and functionality of the mobile app.",
    },
    // {
    //   id: 4,
    //   title: "Blockchain Development",
    //   icon: <SiBlockchaindotcom />,
    //   description:
    //     "Blockchain development is the process of creating and maintaining blockchain applications. It encompasses the coding and programming of a blockchain application, as well as the design and functionality of the blockchain application.",
    // },
    // {
    //   id: 5,
    //   icon: <DiResponsive />,
    //   title: "responsive design",
    //   description:
    //     "Responsive design is a web design approach that ensures that a website or web application looks good and functions well on all devices, regardless of their screen size or resolution. This is achieved by using flexible layouts and fluid images that can adapt to different screen sizes.",
    // },
  ];
  return (
    <section
      id="services"
      className="flex flex-col space-y-10 py-10 container mx-auto px-2 md:px-0"
    >
      <div className="flex flex-col space-y-5 items-center">
        <h3 className="text-2xl font-bold">Services</h3>
        <p className="text-lg text-center">
          I offer full stack development, Blockchain and mobile app development
          services.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col text-center border-2 rounded-lg border-gray-400 p-6"
          >
            <div className="flex relative justify-center w-fit left-1/2 transform -translate-x-1/2 p-2 rounded-full items-center text-[4rem] mb-12 hover:bg-[#0078ff] hover:text-white hover:shadow-[0 0 0 10px #cde1f8] hover:transition-all">
              {service.icon}
            </div>
            <h2 className="text-xl uppercase text-center pb-[1.4rem]">
              {service.title}
            </h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
