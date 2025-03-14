import React from "react";
import KelaskuCard from "./KelaskuCard";
import { Course } from "@/type/Tkelas";

interface KelasKuProps {
  kelas: Course[];
}

const KelasKu: React.FC<KelasKuProps> = ({ kelas }) => {
  if (kelas?.length === 0) {
    return <p>Kamu belum enroll kelas</p>;
  }

  return (
    <div className="">
      <div className="flex flex-col gap-10">
        {Array.isArray(kelas) ? (
          kelas.map((item, index) => <KelaskuCard kelas={item} key={index} />)
        ) : (
          <KelaskuCard kelas={kelas as Course} /> // Handle single string case
        )}
      </div>
    </div>
  );
};

export default KelasKu;
