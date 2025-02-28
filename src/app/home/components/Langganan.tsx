"use client";
import React from "react";
import { Subslist } from "@/data/sublist";
import Tsubslist from "@/type/Tsubslist";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import SubscriptionCard from "@/components/ui/SubscriptionCard";

const Langganan: React.FC = () => {
  return (
    <div className="bg-langganan h-fit">
      <div className="mycontainer lg:py-28 py-24">
        <div className=" lg:px-16">
          <h2 className="lg:text-6xl text-4xl font-bold text-right">
            Be a part of <span className="text-normal-default">innovation</span>
            .
          </h2>
          <h2 className="lg:text-6xl text-4xl font-bold text-left mt-2 lg:mt-10">
            Join <span className="text-normal-default">Innova Space</span> now!
          </h2>
        </div>
        <div className="lg:flex flex flex-col-reverse lg:flex-row gap-x-10 justify-between lg:mt-20">
          <div className="lg:w-4/5 grid lg:grid-cols-3 gap-24 lg:gap-8">
            {Subslist.map((item: Tsubslist) => (
              <SubscriptionCard subs={item} key={item.id} />
            ))}
          </div>
          <div className="lg:w-1/5 mt-24 mb-16 flex flex-row lg:flex-col justify-center">
            <h2 className="font-bold text-4xl lg:text-6xl">Subsc</h2>
            <h2 className="font-bold text-4xl lg:text-6xl">ription</h2>
          </div>
        </div>
        <div className="w-full flex justify-center mt-10 lg:mt-20">
          <Link href={"/langganan"}>
            <Button size={"lg"}>Langganan sekarang</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Langganan;
