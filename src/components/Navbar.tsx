"use client";

import { navlink } from "@/data/navlink";
import Hamburger from "hamburger-react";
import React, { useState, useEffect } from "react";
import { Logo } from "./ui/Logo";
import { Button } from "./ui/Button";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      lastScrollY = window.scrollY;
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <nav
      className={`${
        isVisible ? "top-0" : "opacity-0 -top-20"
      } transition-all  duration-300 fixed flex justify-end lg:justify-center  w-full mt-4 lg:mt-0`}
    >
      <div className="hidden fixed lg:w-full xl:w-[70rem] mycontainer mt-10 font-semibold lg:text-md xl:text-xl bg-light-default lg:flex justify-between h-20 rounded-3xl lg:px-8 items-center">
        <Logo size="normal" />
        <ul className="flex lg:gap-8 xl:gap-16">
          {navlink.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <Button variant="normal" size="normal">
          Masuk
        </Button>
      </div>
      <div className="lg:hidden mt-4 text-white fixed">
        <Hamburger />
      </div>
    </nav>
  );
};

export default Navbar;
