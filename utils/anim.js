export const globalAnim = {
  initial: {
    opacity: 0,
    y: 200,
  },
  enter: (idx) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: 0.2 + idx * 0.1,
      duration: 0.65,
      ease: [0.37, 0, 0.63, 1],
    },
  }),
  exit: {
    opacity: 0,
    y: 40,
  },
};

export const styledArrow = {
  initial: { opacity: 0, height: 0, width: "3px", y: "60%" },
  enter: {
    opacity: 1,
    height: "200px",
    width: "5px",
    y: "-100%",
    transition: {
      delay: 0.25,
      duration: 0.75,

      ease: [0.37, 0, 0.63, 1],
    },
  },
};

export const styledPointer = {
  initial: {
    opacity: 0,
  },

  enter: {
    opacity: 1,

    transition: {
      delay: 0.7,
      duration: 0.7,
      ease: [0.37, 0, 0.63, 1],
    },
  },
};

export const styledArrowText = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { delay: 0.2, duration: 0.5 },
  },
};
