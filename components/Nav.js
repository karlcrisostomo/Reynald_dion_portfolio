"use client";

import React, { useState, useEffect, useRef } from "react";
import { NavLinks } from "@/constant";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import Logo from "./Logo";
import { useStyledContext } from "@/context/StyledContext";

const Nav = () => {
  const { isMenuOpen, setIsMenuOpen, toggleTheme, isMenu, setMenu } =
    useStyledContext();
  const [isScroll, setScroll] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenu((toggle) => !toggle);
    toggleTheme();
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setMenu(false);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenu(false);
      setIsMenuOpen(false);
    }
  };

  const handleClickLink = (e) => {
    e.preventDefault();

    setMenu(false);
    setIsMenuOpen(false);

    const target = e.currentTarget.getAttribute("href");

    if (target) {
      const targetElement = document.querySelector(target);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };
  useEffect(() => {
    if (isMenu) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenu]);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY >= 400);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="py-4 z-[99999] relative lg:max-w-[1560px] mx-auto  ">
      <div
        className={`Content__Sizing flex justify-between items-center p-4 sm:max-w-2xl md:max-w-none fixed left-0 top-0  md:px-6  ${
          isScroll && !isMenuOpen && "bg-black/10  backdrop-blur-sm"
        }`}
      >
        <div className=" w-full flex items-center justify-between container mx-auto">
          <Logo handleClickLink={handleClickLink} />
          <div className="md:hidden z-50 cursor-pointer ">
            {isMenu ? (
              <AiOutlineClose color="white" size={32} onClick={toggleMenu} />
            ) : (
              <div className="border-2 rounded-lg border-gray-300 hover:shadow-lg hover:scale-105 hover:shadow-custom_blue  hover:border-custom_blue transition-all duration-300">
                <HiMenuAlt4
                  size={28}
                  onClick={toggleMenu}
                  className=" border-gray-200 rounded-lg p-1"
                />
              </div>
            )}
          </div>
          <div
            ref={menuRef}
            className={`md:flex  ${
              isMenu
                ? " fixed top-0 right-0  h-screen w-[80%] bg-custom_blue text-white pt-[6em] font-medium text-xl p-6 "
                : " hidden"
            }`}
          >
            <ul className="md:flex lg:text-base   ">
              {NavLinks.map((link) => (
                <li className=" max-md:pt-6 px-2" key={link.href}>
                  <Link
                    className=" hover:font-bold  hover:tracking-wider transition-all duration-300 hover:shadow-xl p-4  hover:shadow-custom_blue rounded-lg"
                    href={link.href}
                    onClick={handleClickLink}
                  >
                    {link?.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
