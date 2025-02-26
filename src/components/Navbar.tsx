"use client";

import { navlink } from "@/data/navlink";
import Hamburger from "hamburger-react";
import React from "react";
import { Logo } from "./ui/Logo";
import { Button } from "./ui/Button";

const Navbar = () => {
  return (
    <nav className=" flex justify-end lg:justify-center mycontainer  w-full mt-4 lg:mt-0   ">
      <div className="hidden lg:w-full xl:w-[70rem] mycontainer  font-semibold  lg:text-md xl:text-xl bg-light-default lg:flex justify-between h-20   rounded-3xl   lg:px-8  items-center">
        <Logo size="normal" />
        <ul className="flex lg:gap-8 xl:gap-16 ">
          {navlink.map((item) => (
            <ul key={item.id}>{item.title}</ul>
          ))}
        </ul>
        <Button variant="normal" size="normal">
          Masuk
        </Button>
      </div>
      <div className="lg:hidden ">
        <Hamburger />
      </div>
    </nav>
  );
};

export default Navbar;
