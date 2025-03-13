import React from "react";
import KelasCard from "./KelasCard";
import Link from "next/link";
import NotFoundCourse from "@/components/notfound/NotFoundData";
import { Course } from "@/type/Tkelas";
interface ContentProps {
  courses: Course[];
}
const Content: React.FC<ContentProps> = ({ courses }) => {
  return (
    <div className="lg:w-3/4 w-full">
      {courses.length === 0 && (
        <NotFoundCourse errorDescription="Kelas tidak ditemukan" />
      )}
      <div className="lg:flex w-full  lg:w-full  justify-between gap-8 ">
        <div className="w-full grid-cols-1 grid lg:w-full lg:grid-cols-2 gap-10">
          {courses.map((item) => (
            <Link key={item.kelas_id} href={`/kelas/${item.kelas_id}`}>
              <KelasCard kelas={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
