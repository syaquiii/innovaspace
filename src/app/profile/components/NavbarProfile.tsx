"use client";

import { navlinkprofile } from "@/data/navlinkprofile";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavbarProfile = () => {
  const pathname = usePathname();
  const basePath = "/profile";
  return (
    <div className="overflow-x-scroll md:overflow-hidden mt-4 py-2 lg:py-4 lg:mt-4  lg:border-b-2 border-normal-default scrollbar-thin scrollbar-thumb-normal-default scrollbar-rounded-full   ">
      <ul className="flex lg:text-lg lg:justify-start lg:gap-x-20   justify-between md:w-full text-sm gap-4">
        {navlinkprofile.map((item) => (
          <Link key={item.id} href={`${basePath}/${item.url}`}>
            <li
              className={`
                ${
                  pathname === basePath + item.url
                    ? "font-bold animate-pulse text-normal-default"
                    : ""
                } transition-all`}
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavbarProfile;
