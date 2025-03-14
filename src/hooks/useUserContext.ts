"use client";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserContext must be used within a UserContext");
  }
  return context;
};
