import { Course } from "@/type/Tkelas";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "react-circular-progressbar/dist/styles.css";

interface KelaskuCardProps {
  kelas: Course;
}

const KelaskuCard: React.FC<KelaskuCardProps> = ({ kelas }) => {
  return (
    <div className="p-4 w-full flex-col lg:flex-row flex gap-4 bg-light-default rounded-xl border shadow-md">
      <div className="lg:w-80 lg:h-32 h-fit w-full aspect-video rounded-3xl overflow-hidden bg-normal-default">
        <Image
          width={200}
          height={200}
          src={kelas.cover_course}
          alt={kelas.nama}
          className="w-full h-full object-cover object-top "
        />
      </div>
      <div className="w-full py-4">
        <h1 className="text-xl font-bold">{kelas.nama}</h1>
        <div className="flex justify-between gap-4 items-center mt-6 md:mt-4 lg:-mt-4">
          <div className="w-full flex lg:w-44 lg:mt-10 ">
            <Link
              className="bg-normal-default w-full text-center rounded-lg text-sm px-4 py-2 text-white"
              href={`/kelas/${kelas.kelas_id}`}
            >
              Lanjutkan Belajar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KelaskuCard;
