"use client";

import { ScrollToTop } from "@/components";
import { globalAnim } from "@/utils/anim";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const email = "nalddion@gmail.com";
  const text = ["get", "in", "touch"];

  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: true });
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="contact">
      <div className="Content__Sizing Styled__Contact_Section  ">
        {text.map((item, idx) => (
          <div
            className="Styled_contact overflow-hidden  "
            key={idx}
            ref={containerRef}
          >
            <motion.p
              variants={globalAnim}
              custom={idx}
              initial="initial"
              animate={isInView ? "enter" : "initial"}
              key={idx}
            >
              {item}
            </motion.p>
          </div>
        ))}
        <p>
          I'm actively looking for opportunities, and you can always reach out
          to me. I'll do my best to respond quickly, whether you have questions
          or just want to connect!
        </p>

        <button onClick={handleEmailClick}>Email Me</button>

        <ScrollToTop />
      </div>
    </section>
  );
};

export default Contact;
