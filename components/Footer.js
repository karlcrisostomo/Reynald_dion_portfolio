import React from "react";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
  // Create an array of icon objects with icons and their corresponding links
  const socialIcons = [
    {
      icon: <AiOutlineInstagram size={24} />,
      link: "https://www.instagram.com/",
    },
    { icon: <AiOutlineGithub size={24} />, link: "https://github.com/" },
    { icon: <FaFacebookSquare size={24} />, link: "https://www.facebook.com/" },
    { icon: <ImLinkedin size={24} />, link: "https://www.linkedin.com/" },
  ];

  return (
    <div className="py-20">
      <ul className="flex items-center justify-center ">
        {socialIcons.map((item, index) => (
          <li className="px-4 " key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
      <div className="">
        <a
          href="https://github.com/karlcrisostomo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className=" hover:text-custom_blue transition-all duration-300 flex justify-center text-center max-md:text-sm text-[10px] min-[2000px]:text-[10px] mt-4">
            in collaboration with Simple_Guyx69
            <span className="ml-2 animate-ping my-auto w-1 h-1 rounded-full bg-custom_blue"></span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
