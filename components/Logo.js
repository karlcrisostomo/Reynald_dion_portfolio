import Image from "next/image";

const Logo = () => {
  const handleReload = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };

  return (
    <span className=" cursor-pointer">
      <Image
        className=" hover:scale-105 transition-all duration-300 hover:shadow-lg  hover:shadow-custom_blue px-2 rounded-md"
        src="/assets/logo.svg"
        alt="Logo"
        width={60}
        height={60}
        onClick={handleReload}
        priority
        quality={60}
      />
    </span>
  );
};

export default Logo;
