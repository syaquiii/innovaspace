"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Pembayaran from "../components/Pembayaran";
import { useUserContext } from "@/hooks/useUserContext";
import MentorKu from "../components/MentorKu";
import KelasKu from "../components/KelasKu";

const Page: React.FC = () => {
  const pathname = usePathname();
  const { userProfile } = useUserContext();
  const [currentPath, setCurrentPath] = useState<string>(pathname);
  const [refreshKey, setRefreshKey] = useState<number>(0);

  useEffect(() => {
    setCurrentPath(pathname);
    setRefreshKey((prevKey) => prevKey + 1); // Supaya page page ini merefresh latast userProfile
  }, [pathname]);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  const renderComponent = () => {
    switch (currentPath) {
      case "/profile/kelasku":
        return <KelasKu key={refreshKey} kelas={userProfile.kelas} />;
      case "/profile/mentorku":
        return <MentorKu key={refreshKey} mentors={userProfile.mentor} />;
      case "/profile/history":
        return <Pembayaran key={refreshKey} />;
      default:
        return null;
    }
  };

  return <div className="pb-20">{renderComponent()}</div>;
};

export default Page;
