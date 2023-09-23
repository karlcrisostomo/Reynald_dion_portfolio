"use client";

import React, { useState, useEffect, useRef } from "react";
import { NavLinks } from "@/constant";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import Logo from "./Logo";
import { useStyledContext } from "@/context/StyledContext";

import "animate.css"
const Nav = () => {
  const [menu, setMenu] = useState(false);
  const { setIsMenuOpen, toggleTheme } = useStyledContext();
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
    // Add an event listener for the window resize event
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

  const handleLinkClick = (e) => {
    // Prevent the default link behavior
    e.preventDefault();

    // Close the menu when a link is clicked
    setMenu(false);
    setIsMenuOpen(false);

    // Get the target element's ID or href
    const target = e.currentTarget.getAttribute("href");

    // Scroll to the target element smoothly
    if (target) {
      const targetElement = document.querySelector(target);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start", // You can adjust this as needed
        });
      }
    }
  };
  useEffect(() => {
    // Add or remove the class based on the menu state
    if (menu) {
      document.body.classList.add("scrollbar-hidden");
    } else {
      document.body.classList.remove("scrollbar-hidden");
    }

    if (menu) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menu]);

  return (
    <nav className="py-4 z-[99999] relative lg:max-w-[1560px] mx-auto  ">
      <div className="Content__Sizing flex justify-between items-center p-4 sm:max-w-2xl md:max-w-none md:px-6 ">
        <Logo />
        <div className="md:hidden z-50 cursor-pointer">
          {menu ? (
            <AiOutlineClose size={32} onClick={toggleMenu} />
          ) : (
            <div className="  border-2 rounded-lg border-gray-300 hover:shadow-lg  hover:border-custom_blue transition-all duration-300">
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
          className={`md:flex menu__animation  ${
            menu
              ? " absolute right-0  h-screen w-[60%] bg-custom_blue  menu__animation___open text-white pt-[6em] font-medium text-xl p-6   top-0"
              : "  hidden"
          }`}
        >
          <ul className="md:flex lg:text-base   ">
            {NavLinks.map((link) => (
              <li className=" max-md:pt-6 px-2" key={link.href}>
                <Link
                  className=" hover:font-bold  hover:tracking-wider transition-all duration-300 hover:shadow-xl p-4  hover:shadow-custom_blue rounded-lg"
                  href={link.href}
                  onClick={handleLinkClick}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
