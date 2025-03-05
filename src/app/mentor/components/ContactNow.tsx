import React from "react";
import ContactImg from "@/assets/img/contactnow.png";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const ContactNow = () => {
  return (
    <div className="flex justify-center mt-8 lg:mt-20">
      <div className="min-h-60 gap-x-10 py-10 lg:py-0 items-center px-28  mycontainer lg:rounded-[6rem] lg:w-2/3 bg-light-default flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/3 flex justify-center  w-full">
          <Image
            className=" w-40 lg:w-40 h-fit aspect-square"
            src={ContactImg}
            alt="a"
          />
        </div>

        <div className="lg:w-1/3  text-center text-2xl lg:text-4xl font-bold">
          <h4 className="text-normal-default">Hubungi</h4>
          <h4 className="">Sekarang!</h4>
        </div>
        <div className="lg:w-1/3 mt-2">
          <Button className="w-full">Hubungi</Button>
        </div>
      </div>
    </div>
  );
};

export default ContactNow;
