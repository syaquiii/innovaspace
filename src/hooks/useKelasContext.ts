"use client";
import KelasContext from "@/context/KelasContext";
import { useContext } from "react";

export const useKelasContext = () => {
  const context = useContext(KelasContext);
  if (!context) {
    throw new Error("ProgressContext must be used within a ProgressProvider");
  }
  return context;
};
