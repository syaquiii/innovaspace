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
      className={`fixed inset-0 z-40 w-full bg-black bg-opacity-35 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setOpen(false)}
    >
      <div
        className={`fixed top-0 right-0 z-50 flex flex-col items-end h-screen w-2/3 bg-langganan bg-light-default transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-10 py-32 ">
          <ul className="flex gap-6 text-right font-bold text-xl flex-col">
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
            <div className="flex justify-end mt-4">
              <Link href="/profile">
                <span className="bg-white aspect-square w-10 shadow-2xl rounded-full flex justify-center items-center">
                  <UserRound className="text-normal-default" />
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <nav
      className={`${
        isVisible ? "top-0" : "opacity-0 -top-20"
      } transition-all duration-300 fixed flex z-50 justify-end md:justify-center lg:justify-center w-full mt-4 lg:mt-0`}
    >
      <MobileNavbar />

      <div className="hidden fixed lg:w-full xl:w-[70rem] md:w-full mycontainer mt-10 font-semibold md:text-md lg:text-md xl:text-xl shadow-2xl bg-light-default md:flex justify-between h-20 rounded-3xl lg:px-8 items-center">
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
        className={`md:hidden m-4 relative z-[200] rounded-lg ${
          isOpen ? "bg-opacity-0 text-black" : " bg-normal-default"
        }  fixed`}
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
