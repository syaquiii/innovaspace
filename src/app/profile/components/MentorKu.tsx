import React from "react";
import MentorKuCard from "./MentorKuCard";
import { useMentorContext } from "@/hooks/useMentorContext";

const MentorKu = () => {
  const { getMentorForUser } = useMentorContext();
  const mentor = getMentorForUser(1); //will be update based on user
  if (!mentor) {
    return <div>Mentor not found for this user.</div>;
  }
  return (
    <div>
      <MentorKuCard mentor={mentor} />
    </div>
  );
};

export default MentorKu;
