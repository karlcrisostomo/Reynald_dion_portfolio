import Link from "next/link";
import Image from "next/image"; 

const Logo = () => {
  return (
    <Link href="/">
      <Image className=" hover:scale-105 transition-all duration-300 hover:shadow-lg  hover:shadow-custom_blue px-2 rounded-md" src="/assets/logo.svg" alt="Logo" width={60} height={60} />
    </Link>
  );
};

export default Logo;
