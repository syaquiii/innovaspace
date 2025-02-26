import React from "react";
import { Logo } from "./ui/Logo";
import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-light-default  rounded-t-3xl">
      <div className="mycontainer gap-y-14  flex flex-col items-center lg:flex-row justify-between py-24 ">
        <div className="flex gap-8">
          <img className="aspect-square w-24 h-24  bg-black rounded-lg" />
          <div className=" flex justify-center flex-col">
            <Logo size="large" />
            <span>Find your space and innovate</span>
          </div>
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
