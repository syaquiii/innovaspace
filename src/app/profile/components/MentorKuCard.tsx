import { Button } from "@/components/ui/Button";
import { Mentor } from "@/type/TDummyData";
import React from "react";

type MentorKuCardProps = {
  mentor: Mentor;
};

const MentorKuCard: React.FC<MentorKuCardProps> = ({ mentor }) => {
  return (
    <div className="lg:w-[50%] p-4 flex flex-col justify-center bg-light-default min-h-[14rem]">
      <div className="flex flex-col lg:flex-row justify-between gap-4 items-center ">
        <div className="lg:w-1/4 w-2/3 aspect-square rounded-full  bg-normal-default"></div>
        <div className="lg:w-3/4">
          <h4 className="text-4xl font-bold">{mentor.nama}</h4>
          <p className="text-sm text-justify mt-4 ">{mentor.detail}</p>
        </div>
      </div>
      <Button className="mt-4">Hubungi</Button>
    </div>
  );
};

export default MentorKuCard;
