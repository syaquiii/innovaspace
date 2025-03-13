"use client";
import { CourseContext } from "@/context/KelasContext";
import { useContext } from "react";

export const useCourseContext = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("ProgressContext must be used within a ProgressProvider");
  }
  return context;
};
