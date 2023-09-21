"use client";
import { Head } from "@/components";
import { useStyledContext } from "@/context/StyledContext";
import { About, Contact, Experience, Projects } from "@/sections";

const Page = () => {
  const { isMenuOpen } = useStyledContext();
  return (
    <div
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
