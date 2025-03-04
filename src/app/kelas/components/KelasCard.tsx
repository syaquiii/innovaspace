import { Course } from "@/type/TDummyData";
import React, { FC } from "react";

type KelasCard = {
  kelas: Course;
};

const KelasCard: FC<KelasCard> = (kelas) => {
  return (
    <div className="w-full lg:flex-col  hover:scale-105 transition-all hover:bg-light-hover cursor-pointer lg:h-[20rem] lg:items-start bg-light-default overflow-hidden lg:p-4 p-4 md:p-6 min-h-24  gap-2 rounded-xl flex items-center">
      <div className="w-2/6 lg:w-full lg:h-2/3   aspect-square h-fit rounded-lg  bg-normal-default"></div>
      <div className="w-4/6 lg:w-full">
        <h4 className="font-bold text-sm md:text-2xl   lg:truncate">
          💻 {kelas.kelas.nama}
        </h4>
        <div className="text-[8px] flex gap-2 md:text-sm flex-wrap lg:text-xs my-2">
          <span className=" px-2 py-1  border border-normal-default rounded-xl shadow-sm">
            {kelas.kelas.kategori}
          </span>
          <span className=" px-2 py-1  border border-normal-default rounded-xl shadow-sm">
            {kelas.kelas.tingkat_kesulitan}
          </span>
          <span className=" px-2 py-1  border border-normal-default rounded-xl shadow-sm">
            {kelas.kelas.duration} jam
          </span>
        </div>

        <p className="text-xs md:text-sm mt-2 flex items-center">
          Rating : {kelas.kelas.rating}
        </p>
      </div>
    </div>
  );
};

export default KelasCard;
