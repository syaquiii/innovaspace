import { useKelasContext } from "@/hooks/useKelasContext";
import React from "react";
import KelasCard from "./KelasCard";

const Content = () => {
  const { kelas } = useKelasContext();
  const dataKelas = kelas;
  return (
    <div className="lg:flex justify-between gap-4 ">
      <div className="w-1/5 hidden lg:block bg-light-default">
        ini fitur filter
      </div>
      <div className="w-full  grid lg:w-4/5 lg:grid-cols-2 gap-4">
        {dataKelas.map((item) => (
          <KelasCard key={item.id_course} kelas={item} />
        ))}
      </div>
    </div>
  );
};

export default Content;
