"use client";

import React from "react";
import { usePathname } from "next/navigation";
import KelasKu from "../components/KelasKu";
import MentorKu from "../components/MentorKu";
import Pembayaran from "../components/Pembayaran";
const Page = () => {
  const pathname = usePathname();
  const renderComponent = () => {
    switch (pathname) {
      case "/profile/kelasku":
        return <KelasKu />;
      case "/profile/mentorku":
        return <MentorKu />;
      case "/profile/history":
        return <Pembayaran />;
      default:
        return null;
    }
  };

  return <div className="pb-20">{renderComponent()}</div>;
};

export default Page;
