import React from "react";
import Link from "next/link";
import { Mentor } from "@/type/TDummyData";
import MentorCard from "./MentorCard";
interface MentorProps {
  mentor: Mentor[];
}
const Content: React.FC<MentorProps> = ({ mentor }) => {
  return (
    <div className="lg:w-3/4 w-full">
      <div className="lg:flex w-full  lg:w-full  justify-between gap-8 ">
        <div className="w-full grid-cols-2 grid lg:w-full lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {mentor.map((item) => (
            <Link key={item.id_mentor} href={`/mentor/${item.id_mentor}`}>
              <MentorCard mentor={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
