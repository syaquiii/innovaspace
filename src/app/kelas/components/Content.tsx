import { useKelasContext } from "@/hooks/useKelasContext";
import React from "react";
import KelasCard from "./KelasCard";
import Link from "next/link";
import { Course } from "@/type/TDummyData";
interface ContentProps {
  courses: Course[];
}
const Content: React.FC<ContentProps> = ({ courses }) => {
  return (
    <div className="lg:flex  lg:w-full  justify-between gap-8 ">
      <div className="w-full  grid lg:w-full lg:grid-cols-2 gap-10">
        {courses.map((item) => (
          <Link key={item.id_course} href={`/kelas/${item.id_course}`}>
            <KelasCard kelas={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Content;
