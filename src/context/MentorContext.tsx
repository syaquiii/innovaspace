"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { dummyData } from "@/data/DummyData";
import { Mentor, Match } from "@/type/TDummyData";

interface MentorContextType {
  mentors: Mentor[];
  getMentorById: (id_mentor: number) => Mentor | undefined;
  getMentorForUser: (id_user: number) => Mentor | undefined;
  fetchAllMentors: () => Mentor[];
}

const MentorContext = createContext<MentorContextType | undefined>(undefined);

export const MentorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    const fetchMentorsAndMatches = () => {
      setMentors(dummyData.mentors);
      setMatches(dummyData.match);
    };

    fetchMentorsAndMatches();
  }, []);

  const getMentorById = (id_mentor: number) => {
    return mentors.find((mentor) => mentor.id_mentor === id_mentor);
  };

  const getMentorForUser = (id_user: number) => {
    const match = matches.find((match) => match.id_user === id_user);
    return match ? getMentorById(match.id_mentor) : undefined;
  };
  const fetchAllMentors = () => {
    return mentors;
  };

  return (
    <MentorContext.Provider
      value={{ fetchAllMentors, mentors, getMentorById, getMentorForUser }}
    >
      {children}
    </MentorContext.Provider>
  );
};

export default MentorContext;
