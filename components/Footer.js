import Image from "next/image";
import { socMedIcons } from "@/constant";
const Footer = () => {
  return (
    <div className="py-20">
      <ul className="flex items-center justify-center  ">
        {socMedIcons.map((item, index) => (
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
            In collaboration with Karl Crisostomo
            <span className="ml-2 animate-ping my-auto w-1 h-1 rounded-full bg-custom_blue"></span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
