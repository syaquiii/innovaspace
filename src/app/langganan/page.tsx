import { Subslist } from "@/data/sublist";
import React from "react";
import SubscriptionCard from "../../components/ui/SubscriptionCard";
import Tsubslist from "@/type/Tsubslist";

const page = () => {
  return (
    <section className="h-fit w-full mycontainer py-32 lg:py-44 bg-langganan">
      <h1 className="lg:text-5xl text-3xl text-center font-bold ">
        Paket Langganan
      </h1>
      <div className="grid lg:grid-cols-3 gap-16 mt-20">
        {Subslist.map((item: Tsubslist) => (
          <SubscriptionCard hasButton={true} key={item.id} subs={item} />
        ))}
      </div>
    </section>
  );
};

export default page;
