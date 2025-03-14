"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Pembayaran from "../components/Pembayaran";
import { useUserContext } from "@/hooks/useUserContext";
import MentorKu from "../components/MentorKu";

const Page = () => {
  const pathname = usePathname();
  const { userProfile } = useUserContext();
  const data = userProfile;

  if (!data) {
    return <div>Loading...</div>;
  }

  const renderComponent = () => {
    switch (pathname) {
      // case "/profile/kelasku":
      //   return <KelasKu kelas={data.kelas} />;
      case "/profile/mentorku":
        return <MentorKu mentors={data.mentor} />;
      case "/profile/history":
        return <Pembayaran />;
      default:
        return null;
    }
  };

  return <div className="pb-20">{renderComponent()}</div>;
};

export default Page;
