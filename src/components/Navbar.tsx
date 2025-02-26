"use client";

import { navlink } from "@/data/navlink";
import Hamburger from "hamburger-react";
import React from "react";
import Logo from "./ui/Logo";

const Navbar = () => {
  return (
    <nav className=" flex justify-end lg:justify-center  w-full mt-4 lg:mt-0   ">
      <div className="hidden lg:w-full xl:w-3/4  font-semibold  lg:text-md xl:text-xl bg-light-default lg:flex justify-between h-20   rounded-3xl   lg:px-8  items-center">
        <Logo />
        <ul className="flex lg:gap-8 xl:gap-10 ">
          {navlink.map((item) => (
            <ul key={item.id}>{item.title}</ul>
          ))}
        </ul>
        <button className="px-4 py-2 bg-normal-default text-light-default rounded-xl">
          Masuk
        </button>
      </div>
      <div className="lg:hidden ">
        <Hamburger />
      </div>
    </nav>
  );
};

export default Navbar;
