import React from "react";
import MentorKuCard from "./MentorKuCard";
import { Mentor } from "@/type/Tmentor";

interface MentorKuProps {
  mentors: Mentor[];
}

const MentorKu: React.FC<MentorKuProps> = ({ mentors }) => {
  if (!mentors || mentors.length === 0) {
    return <div>Kamu belum memiliki mentor</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      {mentors.map((mentor, index) => (
        <MentorKuCard key={index} mentor={mentor} />
      ))}
    </div>
  );
};

export default MentorKu;
