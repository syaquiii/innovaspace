"use client";
import { useMentorContext } from "@/hooks/useMentorContext";
import { usePathname } from "next/navigation";
import React from "react";
import ProfileMentor from "../components/ProfileMentor";
import AtributMentor from "../components/AtributMentor";
import ContactNow from "../components/ContactNow";

const Page = () => {
  const pathname = usePathname();
  const currenPath = pathname.split("/");
  const mentorId = currenPath.length > 2 ? currenPath[2] : null;

  const { getMentorById } = useMentorContext();
  const data = mentorId ? getMentorById(parseInt(mentorId)) : null;

  if (!mentorId || !data) {
    return null;
  }

  return (
    <div className="min-h-screen bg-langganan">
      <div className="mycontainer py-24 lg:py-52">
        <ProfileMentor data={data} />
        <AtributMentor data={data} />
        <ContactNow />
      </div>
    </div>
  );
};

export default Page;
