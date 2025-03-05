import { Course } from "@/type/TDummyData";
import React, { FC } from "react";
import StarRating from "./StarRating";

type KelasCard = {
  kelas: Course;
};

const KelasCard: FC<KelasCard> = (kelas) => {
  return (
    <div className="max-w-full lg:flex-col  hover:scale-105 transition-all hover:bg-light-hover cursor-pointer lg:h-[20rem] lg:items-start shadow-lg bg-light-default overflow-hidden lg:pb-8 lg:p-4 p-4 md:p-6 min-h-24  gap-2 rounded-xl flex items-center">
      <div className="w-2/6 lg:w-full lg:h-2/3   aspect-square h-fit rounded-lg  bg-normal-default"></div>
      <div className="w-4/6  lg:w-full overflow-clip">
        <h4 className="font-bold text-xs md:text-2xl truncate   lg:truncate">
          💻 {kelas.kelas.nama}
        </h4>
        <div className="text-[7px] font-semibold flex gap-2 md:text-sm flex-wrap lg:text-xs my-2">
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
        <div className="flex items-center gap-2">
          <StarRating
            className="w-4 h-4 lg:h-5 lg:w-5"
            key={null}
            rating={kelas.kelas.rating}
          />
          <span className="text-[10px] lg:text-sm mt-[3px]">
            {kelas.kelas.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default KelasCard;
