"use client";
import { Footer, Head, StyledSection } from "@/components";
import Feature from "@/components/Feature";
import { useStyledContext } from "@/context/StyledContext";
import { About, Contact, Experience, Projects } from "@/sections";
import { useRef, useEffect } from "react";

const Page = () => {
  const { isMenuOpen, menu } = useStyledContext();
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const smoothScroll = new LocomotiveScroll({
        lenisOptions: {
          duration: 3.5,
        },
      });
    })();
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className={` max-md:p-3 ${
        isMenuOpen
          ? "blur-sm pointer-events-none"
          : " pointer-events-auto "
      }`}
    >
      <Head />

      <StyledSection>
        <About />
      </StyledSection>

      <StyledSection>
        <Experience />
      </StyledSection>

      <StyledSection>
        <Projects />
      </StyledSection>

      <StyledSection>
        <Contact />
      </StyledSection>
      <Footer />
    </div>
  );
};

export default Page;
