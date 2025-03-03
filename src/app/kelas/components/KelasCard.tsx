import { Course } from "@/type/TDummyData";
import React, { FC } from "react";

type KelasCard = {
  kelas: Course;
};

const KelasCard: FC<KelasCard> = (kelas) => {
  return (
    <div className="w-full lg:flex-col  lg:h-[20rem] lg:items-start bg-light-default overflow-hidden lg:p-4 p-2 md:p-6 min-h-24  gap-2 rounded-xl flex items-center">
      <div className="w-2/6 lg:w-full lg:h-2/3   aspect-square h-fit rounded-lg  bg-normal-default"></div>
      <div className="w-4/6 lg:w-full">
        <h4 className="font-bold text-sm md:text-2xl truncate  lg:truncate">
          💻 {kelas.kelas.nama}
        </h4>
        <span className="text-xs md:text-sm px-2 py-1 rounded-sm bg-light-hover shadow-sm">
          {kelas.kelas.kategori}
        </span>
        <p className="text-xs md:text-sm mt-2 flex items-center">
          Rating : {kelas.kelas.rating}
        </p>
      </div>
    </div>
  );
};

export default KelasCard;
