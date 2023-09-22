"use client";
import { Head } from "@/components";
import { useStyledContext } from "@/context/StyledContext";
import { About, Contact, Experience, Projects } from "@/sections";
import { useEffect, useRef } from "react";

const Page = () => {
  const { isMenuOpen } = useStyledContext();
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      if (scrollContainerRef.current) {
        const locomotiveScroll = new LocomotiveScroll({
          el: scrollContainerRef.current,
        });
      }
    })();
  }, []);
  return (
    <div
      ref={scrollContainerRef}
      className={`container mx-auto ${
        isMenuOpen ? "blur-sm h-screen" : "bg-inherit"
      }`}
    >
      <section id="home">
        <Head />
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
