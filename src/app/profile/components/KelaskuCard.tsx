import { Course } from "@/type/Tkelas";
import React from "react";
import "react-circular-progressbar/dist/styles.css";

const KelaskuCard = (kelas: Course) => {
  return (
    <div className="p-4 w-full flex-col lg:flex-row flex gap-4 bg-light-default rounded-xl border shadow-md">
      <div className="lg:w-80 lg:h-32 h-fit w-full aspect-video rounded-3xl bg-normal-default"></div>
      <div className="w-full py-4">
        <h1 className="text-xl font-bold">{kelas.nama}</h1>
        <div className="flex justify-between gap-4 items-center mt-6 md:mt-4 lg:-mt-4">
          <div className="w-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default KelaskuCard;
