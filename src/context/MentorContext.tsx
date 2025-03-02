"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { dummyData } from "@/data/DummyData";
import { Mentor, Match } from "@/type/TDummyData";

interface MentorContextType {
  mentors: Mentor[];
  getMentorById: (id_mentor: number) => Mentor | undefined;
  getMentorForUser: (id_user: number) => Mentor | undefined;
}

const MentorContext = createContext<MentorContextType | undefined>(undefined);

export const MentorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    const fetchMentorsAndMatches = () => {
      setMentors(dummyData.mentor);
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

  return (
    <MentorContext.Provider
      value={{ mentors, getMentorById, getMentorForUser }}
    >
      {children}
    </MentorContext.Provider>
  );
};

export const useMentor = () => {
  const context = useContext(MentorContext);
  if (!context) {
    throw new Error("useMentor must be used within a MentorProvider");
  }
  return context;
};

export default MentorContext;
