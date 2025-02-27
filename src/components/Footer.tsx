"use client";

import React from "react";
import { Logo } from "./ui/Logo";
import { Instagram, Mail, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  if (
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/forget"
  ) {
    return null;
  }
  return (
    <footer className="bg-light-default lg rounded-t-3xl">
      <div className="mycontainer gap-y-14 lg:items-center flex flex-col  lg:flex-row lg:justify-between py-24 ">
        <div className=" gap-4  flex flex-col items-center  justify-center lg:gap-8  ">
          <Logo size="large" style="dark" className="mb-2" />
          <span className="text-xs  lg:text-lg ">
            Find your space and innovate
          </span>
        </div>
        <ul className="flex  flex-col gap-3">
          <li className="flex justify-center lg:justify-end gap-2">
            @innova_space <Instagram />
          </li>
          <li className="flex justify-center lg:justify-end gap-2">
            0812-3456-7890 <Phone />
          </li>
          <li className="flex  justify-center lg:justify-end gap-2">
            innovaspace@gmail.com
            <Mail />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
