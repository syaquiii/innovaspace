"use client";

import { navlink } from "@/data/navlink";
import Cookies from "js-cookie";
import Hamburger from "hamburger-react";
import React, { useState, useEffect, useRef } from "react";
import { Logo } from "./ui/Logo";
import { Button } from "./ui/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { UserRound } from "lucide-react";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [token, setToken] = useState<string | null>(null);
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
    const fetchedToken = Cookies.get("token");
    setToken(fetchedToken || null);

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

  const MobileNavbar = () => (
    <div
      className={`${
        isOpen &&
        "bg-black bg-opacity-35 flex justify-end -mt-4 w-full h-screen"
      }`}
    >
      <div className={`w-2/3 px-10 py-20 h-[100vh] bg-light-default`}>
        <ul className="flex gap-6 font-bold text-xl flex-col">
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
        {!token && (
          <Link href={"/login"}>
            <Button className="mt-4 px-8" variant="normal" size="normal">
              Masuk
            </Button>
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <nav
      className={`${
        isVisible ? "top-0" : "opacity-0 -top-20"
      } transition-all duration-300 fixed flex z-10 justify-end lg:justify-center w-full mt-4 lg:mt-0`}
    >
      {isOpen && <MobileNavbar />}

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
        {!token ? (
          <Link href="/login">
            <Button variant="normal" size="normal">
              Masuk
            </Button>
          </Link>
        ) : (
          <Link href="/profile">
            <span className="bg-white aspect-square w-10 shadow-xl rounded-full flex justify-center items-center">
              <UserRound className="text-normal-default" />
            </span>
          </Link>
        )}
      </div>
      <div
        className={`lg:hidden m-4 rounded-lg ${
          isOpen ? "bg-opacity-0" : "bg-normal-default"
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
