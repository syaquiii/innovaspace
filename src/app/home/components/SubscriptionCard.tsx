import React from "react";
import Image from "next/image";
import Tsubslist from "@/type/Tsubslist";

interface SubscriptionCardProps {
  subs: Tsubslist;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ subs }) => {
  return (
    <div className="w-full cursor-pointer hover:bg-light-hover hover:scale-105 transition-all shadow-lg  px-8 py-12 bg-light-default relative flex justify-center rounded-xl min-h-fit">
      <div className="rounded-full aspect-square w-20 h-fit flex items-center absolute -top-10 justify-center shadow-lg  bg-white ">
        <Image className="aspect-square w-14" src={subs.icon} alt="" />
      </div>
      <div className="text-center">
        <h4 className="font-bold my-4 text-2xl text-ourblack">{subs.title}</h4>
        <p className="text-sm">{subs.content}</p>
      </div>
    </div>
  );
};

export default SubscriptionCard;
