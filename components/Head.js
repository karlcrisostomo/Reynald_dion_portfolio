"use client";

import { globalAnim } from "@/utils/anim";
import { motion } from "framer-motion";
import Feature from "./Feature";

const Head = () => {
  const resumePdfUrl = "/Resume-Dion.pdf";

  const title = [
    `Hi, my name is`,
    `Reynald  Dion `,
    `A computer engineer fueled by passion, known for my innovative flair
  and knack for tackling complex challenges.`,
  ];

  const openResume = () => {
    window.open(resumePdfUrl, "_blank");
  };

  return (
    <section className="Header">
      <div className="  flex   flex-col gap-4 " id="Home">
        {title.map((item, idx) => (
          <div key={idx} className=" overflow-hidden   ">
            <motion.p
              className={` ${
                idx !== 0 &&
                idx !== 2 &&
                " font-bold font-Martian leading-tight  max-sm:text-[2.5rem] min-[500px]:text-[3rem] sm:text-6xl lg:text-7xl pb-4 xl:text-8xl "
              } ${idx === 2 && "sm:max-w-lg "}`}
              key={idx}
              variants={globalAnim}
              animate="enter"
              initial="initial"
              exit="exit"
              custom={idx}
            >
              {item}
            </motion.p>
          </div>
        ))}

        <motion.div
          className=" w-fit "
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              delay: 0.3,
              duration: 0.75,
            },
          }}
        >
          <button className="Head__btn" onClick={openResume}>
            RESUME
          </button>
        </motion.div>
      </div>

  
    </section>
  );
};

export default Head;
