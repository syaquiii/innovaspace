import { ThreadContext } from "@/context/DiskusiContext";
import React from "react";

export const useThreadContext = () => {
  const context = React.useContext(ThreadContext);
  if (!context) {
    throw new Error("useThreadContext must be used within a ThreadProvider");
  }
  return context;
};
