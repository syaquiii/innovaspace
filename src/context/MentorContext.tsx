"use client";
import { getAllMentors, getMentorDetails } from "@/api/services/mentor";
import { Mentor } from "@/type/Tmentor";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from "react";

export interface MentorContextProps {
  mentors: Mentor[];
  isLoading: boolean;
  error: Error | null;
  fetchMentorDetails: (mentorId: string) => Promise<Mentor | null>;
}

interface MentorProviderProps {
  children: ReactNode;
}

export const MentorContext = createContext<MentorContextProps | undefined>(
  undefined
);

export const useMentorContext = () => {
  const context = useContext(MentorContext);
  if (!context) {
    throw new Error("useMentorContext must be used within a MentorProvider");
  }
  return context;
};

export const MentorProvider: React.FC<MentorProviderProps> = ({ children }) => {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await getAllMentors();
        if (response.data && response.data.mentor) {
          setMentors(response.data.mentor);
        } else {
          setError(new Error("Unexpected API response structure"));
        }
      } catch (error) {
        console.error("Error fetching mentors:", error);
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMentors();
  }, []);

  const fetchMentorDetails = async (mentorId: string) => {
    try {
      const mentor = await getMentorDetails(mentorId);
      return mentor;
    } catch (error) {
      console.error("Error fetching mentor details:", error);
      return null;
    }
  };

  const value = useMemo(
    () => ({ mentors, isLoading, error, fetchMentorDetails }),
    [mentors, isLoading, error]
  );

  return (
    <MentorContext.Provider value={value}>{children}</MentorContext.Provider>
  );
};
