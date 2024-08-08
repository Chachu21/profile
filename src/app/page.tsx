import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Service from "@/components/Service";
import React from "react";

const HomePage = () => {
  return (
    <section className="flex flex-col space-y-10 mt-5">
      <Hero />
      <About />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </section>
  );
};

export default HomePage;
