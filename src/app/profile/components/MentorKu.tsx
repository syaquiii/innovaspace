import React, { useContext } from "react";
import MentorKuCard from "./MentorKuCard";
import MentorContext from "@/context/MentorContext";

const MentorKu = () => {
  const context = useContext(MentorContext);
  if (!context) {
    throw new Error("MentorContext must be used within a MentorProvider");
  }
  const { getMentorForUser } = context;
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
