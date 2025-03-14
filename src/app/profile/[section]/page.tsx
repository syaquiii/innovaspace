"use client";

import React from "react";
import { usePathname } from "next/navigation";
// import KelasKu from "../components/KelasKu";
import Pembayaran from "../components/Pembayaran";
import { useUserContext } from "@/hooks/useUserContext";
// import MentorKu from "../components/MentorKu";
const Page = () => {
  const pathname = usePathname();
  const { userProfile } = useUserContext();
  const data = userProfile;
  if (!data) {
    return <div>Loading...</div>;
  }
  console.log(data);
  const renderComponent = () => {
    switch (pathname) {
      // case "/profile/kelasku":
      //   return <KelasKu kelas={data.kelas} />;
      // case "/profile/mentorku":
      //   return <MentorKu mentor={data.mentor} />;
      case "/profile/history":
        return <Pembayaran />;
      default:
        return null;
    }
  };

  return <div className="pb-20">{renderComponent()}</div>;
};

export default Page;
