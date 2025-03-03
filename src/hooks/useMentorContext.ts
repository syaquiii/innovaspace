"use client";
import MentorContext from "@/context/MentorContext";
import { useContext } from "react";

export const useMentorContext = () => {
  const context = useContext(MentorContext);
  if (!context) {
    throw new Error("ProgressContext must be used within a ProgressProvider");
  }
  return context;
};
