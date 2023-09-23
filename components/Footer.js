import React from "react";
import Image from "next/image";

const Footer = () => {
  // Create an array of icon objects with icons and their corresponding links
  const socialIcons = [
    {
      icon: "/assets/fb_icon.svg",
      link: "https://www.facebook.com/Nald.dlll ",
    },
    {
      icon: "/assets/github_icon.svg",
      link: "https://github.com/kimbamartinez",
    },
    {
      icon: "/assets/ig_icon.svg",
      link: "https://www.instagram.com/nald.dllc/",
    },
    { icon: "/assets/linked_icon.svg", link: "https://www.linkedin.com/" },
  ];

  return (
    <div className="py-20">
      <ul className="flex items-center justify-center ">
        {socialIcons.map((item, index) => (
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <li
              className="px-4 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-xl p-4 rounded-lg hover:shadow-custom_blue transition-all duration-300 "
              key={index}
            >
              <Image
                src={item.icon}
                width={32}
                height={32}
                alt="social media icons"
              />
            </li>
          </a>
        ))}
      </ul>
      <div>
        <a
          href="https://github.com/karlcrisostomo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className=" hover:text-custom_blue ml-4 transition-all duration-300 flex justify-center text-center max-xl:text-sm xl:text-xs   mt-4">
            In collaboration with Simple_Guyx69
            <span className="ml-2 animate-ping my-auto w-1 h-1 rounded-full bg-custom_blue"></span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
