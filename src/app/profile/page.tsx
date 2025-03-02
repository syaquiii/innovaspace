import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  return <div className="min-h-screen">{redirect("/profile/kelasku")}</div>;
};

export default page;
