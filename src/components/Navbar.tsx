"use client";

import { navlink } from "@/data/navlink";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { Logo } from "./ui/Logo";
import { Button } from "./ui/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { UserRound } from "lucide-react";
import useToken from "@/hooks/useToken";
import useScrollVisibility from "@/hooks/useScrollVisibility";
import Profile from "@/app/profile/components/Profile";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const token = useToken();
  const isVisible = useScrollVisibility();
  const [isOpen, setOpen] = useState(false);

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
      <div className={`w-2/3 px-10 py-20 h-[100vh]   bg-light-default`}>
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
        {!token ? (
          <Link href={"/login"}>
            <Button className="mt-4 px-8" variant="normal" size="normal">
              Masuk
            </Button>
          </Link>
        ) : (
          <Profile hasbuttonToProfile={true} />
        )}
      </div>
    </div>
  );

  return (
    <nav
      className={`${
        isVisible ? "top-0" : "opacity-0 -top-20"
      } transition-all duration-300 fixed flex z-50   justify-end  md:justify-center lg:justify-center w-full mt-4 lg:mt-0`}
    >
      {isOpen && <MobileNavbar />}

      <div className="hidden fixed lg:w-full xl:w-[70rem]  md:w-full mycontainer mt-10 font-semibold md:text-md lg:text-md xl:text-xl shadow-2xl bg-light-default md:flex justify-between h-20 rounded-3xl lg:px-8 items-center">
        <Logo size="normal" style="dark" />
        <ul className="flex lg:gap-8 md:gap-4 xl:gap-16">
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
        className={`md:hidden m-4 rounded-lg ${
          isOpen ? "bg-opacity-0" : "bg-normal-default "
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
