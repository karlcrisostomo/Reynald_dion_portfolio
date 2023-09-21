import React, { createContext, useContext, useState } from "react";

const SmoothScrollContext = createContext();

export const useSmoothScroll = () => {
  return useContext(SmoothScrollContext);
};

export const SmoothScrollProvider = ({ children }) => {
  const [scrollTarget, setScrollTarget] = useState(null);

  const smoothScrollTo = (targetId) => {
    setScrollTarget(targetId);
  };

  return (
    <SmoothScrollContext.Provider value={smoothScrollTo}>
      {children}
    </SmoothScrollContext.Provider>
  );
};
