import React from "react";
import KelaskuCard from "./KelaskuCard";
import { useKelasContext } from "@/hooks/useKelasContext";

const KelasKu = () => {
  const { progressBelajar } = useKelasContext();
  return (
    <div className="">
      <div className="flex flex-col gap-10">
        {progressBelajar.map((item, index) => (
          <KelaskuCard kelas={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default KelasKu;
