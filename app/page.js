"use client";
import { Head } from "@/components";
import Feature from "@/components/Feature";
import { useStyledContext } from "@/context/StyledContext";
import { About, Contact, Experience, Projects } from "@/sections";
import { useRef } from "react";

const Page = () => {
  const { isMenuOpen } = useStyledContext();
  const scrollContainerRef = useRef(null);

  return (
    <div
      ref={scrollContainerRef}
      className={` ${
        isMenuOpen
          ? "blur-sm h-screen pointer-events-none"
          : "bg-inherit pointer-events-auto"
      }`}
    >
      <section id="home">
        <Head />
        <Feature />
      </section>

      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="works">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Page;
