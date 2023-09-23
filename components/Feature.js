import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <div className="Styled__Feature">
      <div className="Styled__Feature__Container" />

      <div className="Grid__dots__container">
        <Image
          className=" grid_dots"
          src="/assets/grid_dots.svg"
          width={200}
          height={300}
          alt="grid-dots"
        />
      </div>
    </div>
  );
};

export default Feature;
