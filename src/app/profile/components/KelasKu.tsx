import React, { useContext } from "react";
import KelaskuCard from "./KelaskuCard";
import KelasContext from "@/context/KelasContext";

const KelasKu = () => {
  const context = useContext(KelasContext);
  if (!context) {
    throw new Error("ProgressContext must be used within a ProgressProvider");
  }
  const { dataKelasKu } = context;
  return (
    <div className="">
      <div className="flex flex-col gap-10">
        {dataKelasKu.map((item, index) => (
          <KelaskuCard kelas={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default KelasKu;
