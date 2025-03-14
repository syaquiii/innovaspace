import React from "react";
import { Button } from "@/components/ui/Button";
import { Mentor } from "@/type/Tmentor";
import Image from "next/image";

type MentorCardProps = {
  mentor: Mentor;
};

const MentorCard: React.FC<MentorCardProps> = ({ mentor }) => {
  return (
    <div className="w-full flex-col justify-between hover:bg-light-hover transition-all hover:scale-105 gap-2 h-[20rem] flex rounded-xl shadow-lg bg-light-default p-3 lg:p-4">
      <div className="w-full overflow-hidden  h-2/3   rounded-lg bg-normal-default">
        <Image
          className="w-full h-full object-cover object-top "
          width={200}
          height={200}
          alt="mentor"
          src={mentor.profil_mentor}
        />
      </div>
      <div className="text-center w-full">
        <h4 className="font-bold text-[10px] lg:text-sm">{mentor.nama}</h4>
        <h4 className="text-[8px] lg:text-xs tracking-tighter">
          {mentor.spesialisasi}
        </h4>
      </div>
      <Button className="p-0 text-sm">Lihat</Button>
    </div>
  );
};

export default MentorCard;
