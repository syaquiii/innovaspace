import React from "react";
import MentorKuCard from "./MentorKuCard";
import { Mentor } from "@/type/Tmentor";

interface MentorKuProps {
  mentor: Mentor;
}

const MentorKu: React.FC<MentorKuProps> = ({ mentor }) => {
  if (!mentor) {
    return <div>Kamu belum memiliki mentor</div>;
  }

  return (
    <div>
      <MentorKuCard mentor={mentor} />
    </div>
  );
};

export default MentorKu;
