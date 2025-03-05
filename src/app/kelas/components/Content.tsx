import React from "react";
import KelasCard from "./KelasCard";
import Link from "next/link";
import { Course } from "@/type/TDummyData";
import NotFoundCourse from "@/components/notfound/NotFoundCourse";
interface ContentProps {
  courses: Course[];
}
const Content: React.FC<ContentProps> = ({ courses }) => {
  return (
    <div className="lg:w-3/4 w-full">
      {courses.length === 0 && <NotFoundCourse />}
      <div className="lg:flex w-full  lg:w-full  justify-between gap-8 ">
        <div className="w-full grid-cols-1 grid lg:w-full lg:grid-cols-2 gap-10">
          {courses.map((item) => (
            <Link key={item.id_course} href={`/kelas/${item.id_course}`}>
              <KelasCard kelas={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
