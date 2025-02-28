import React from "react";
import Image from "next/image";
import Tsubslist from "@/type/Tsubslist";
import { Button } from "./Button";

interface SubscriptionCardProps {
  subs: Tsubslist;
  hasButton?: boolean;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  subs,
  hasButton,
}) => {
  return (
    <div className="w-full cursor-pointer hover:bg-light-hover hover:scale-105 transition-all shadow-lg px-8 py-12 bg-light-default relative flex justify-center rounded-xl min-h-fit">
      <div className="rounded-full aspect-square w-20 h-fit flex items-center absolute -top-10 justify-center shadow-lg bg-white">
        <Image
          className="aspect-square w-14"
          src={subs.icon}
          alt={subs.title}
        />
      </div>
      <div className="text-center mt-6 flex flex-col justify-between">
        <h4 className="font-bold my-4 text-2xl text-ourblack">{subs.title}</h4>
        <p className="text-sm">{subs.content}</p>
        {hasButton && (
          <div className="mt-4 ">
            <Button>Langganan Sekarang</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionCard;
