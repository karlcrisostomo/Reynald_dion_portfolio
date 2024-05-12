"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { styledArrow, styledPointer, styledArrowText } from "@/utils/anim";

const ScrollToTop = () => {
  const [isHover, setHover] = useState(false);
  const handleScroll = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const arrowRef = useRef(null);

  const isInView = useInView(arrowRef, { once: true });
  return (
    <motion.div
      ref={arrowRef}
      animate={{
        y: isHover ? "-5rem" : 0,
        transition: {
          duration: 0.7,
          ease: [0, 0.55, 0.45, 1],
        },
      }}
      onClick={() => handleScroll()}
      className="flex cursor-pointer w-fit h-fit absolute  max-md:top-[110vh] top-[50vh] right-0 flex-col items-center"
    >
      <motion.div
        variants={styledPointer}
        initial="initial"
        animate={isInView ? "enter" : "initial"}
        className="flex items-center -translate-y-[12rem]"
      >
        <span className=" w-[24px] h-[3px] block translate-x-1  -rotate-45 bg-black" />
        <span className=" w-[24px] h-[3px] block  -translate-x-1 -translate-y-[1px]  rotate-45 bg-black" />
      </motion.div>
      <motion.span
        variants={styledArrow}
        initial="initial"
        animate={isInView ? "enter" : "initial"}
        className="block bg-black"
      />

      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="flex  flex-col justify-center w-full h-full scale-[2] absolute top-0 -translate-y-[100%] right-0 "
      >
        <motion.span
          variants={styledArrowText}
          initial="initial"
          animate={isInView ? "enter" : "initial"}
          className=" absolute text-[0.5rem] font-Martian font-bold -rotate-90 whitespace-nowrap uppercase max-md:left-0 left-4"
        >
          scroll to top
        </motion.span>
      </div>
    </motion.div>
  );
};

export default ScrollToTop;
