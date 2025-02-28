"use client";

import { navlink } from "@/data/navlink";
import Hamburger from "hamburger-react";
import React, { useState, useEffect, useRef } from "react";
import { Logo } from "./ui/Logo";
import { Button } from "./ui/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY.current) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      lastScrollY.current = window.scrollY;
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  if (
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/forget"
  ) {
    return null;
  }

  const MobileNavbar = () => {
    return (
      <div
        className={`${
          isOpen ? "" : "opacity-0 -top-20"
        } transition-all duration-300 w-full bg-light-default h-screen -mt-4`}
      >
        <div className=" mt-32 ml-6 w-2/3">
          <ul className="flex gap-6 font-bold text-xl  flex-col">
            {navlink.map((item) => (
              <li
                className={
                  pathname === item.url || pathname.startsWith(item.url)
                    ? "text-normal-default animate-pulse font-bold"
                    : "text-black"
                }
                key={item.id}
              >
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
          <Link href={"/login"}>
            <Button className="mt-4" variant="normal" size="lg">
              Masuk
            </Button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <nav
      className={`${
        isVisible ? "top-0" : "opacity-0 -top-20"
      } transition-all duration-300 fixed flex z-10 justify-end lg:justify-center w-full mt-4 lg:mt-0`}
    >
      {MobileNavbar()}

      <div className="hidden fixed lg:w-full xl:w-[70rem] mycontainer mt-10 font-semibold lg:text-md xl:text-xl bg-light-default lg:flex justify-between h-20 rounded-3xl lg:px-8 items-center">
        <Logo size="normal" style="dark" />
        <ul className="flex lg:gap-8 xl:gap-16">
          {navlink.map((item) => (
            <li
              className={
                pathname === item.url || pathname.startsWith(item.url)
                  ? "text-normal-default animate-pulse font-bold"
                  : "text-black"
              }
              key={item.id}
            >
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
        <Link href="/login">
          <Button variant="normal" size="normal">
            Masuk
          </Button>
        </Link>
      </div>
      <div
        className={` lg:hidden m-4 rounded-lg ${
          isOpen ? "bg-light-default" : "bg-normal-default"
        } text-white fixed`}
      >
        <Hamburger
          size={24}
          color={isOpen ? "black" : "white"}
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
    </nav>
  );
};

export default Navbar;
