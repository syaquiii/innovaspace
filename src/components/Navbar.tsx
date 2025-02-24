"use client";

import { navlink } from "@/app/data/navlink";
import Hamburger from "hamburger-react";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" flex justify-end lg:block  w-full mt-4 lg:mt-0   ">
      <div className="hidden lg:bg-wfgray lg:flex justify-between h-20  rounded-lg   lg:px-8 bg-red-200 items-center">
        <div className="flex items-center gap-3">
          <img className="aspect-square w-12 bg-wfblack rounded-lg" />
          <h1 className="bg-wfblack rounded-lg">innovaspace</h1>
        </div>
        <ul className="flex gap-5">
          {navlink.map((item) => (
            <li
              key={item.id}
              className="bg-wfblack lg:w-20 xl:w-32 h-4 rounded-lg"
            ></li>
          ))}
        </ul>
        <div>
          <button className="bg-wfblack w-20 rounded-lg h-8"></button>
        </div>
      </div>
      <div className="lg:hidden ">
        <Hamburger />
      </div>
    </nav>
  );
};

export default Navbar;
