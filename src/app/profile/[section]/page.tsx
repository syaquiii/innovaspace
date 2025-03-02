"use client";

import React from "react";
import { usePathname } from "next/navigation";
import KelasKu from "../components/KelasKu";
const Page = () => {
  const pathname = usePathname();

  const renderComponent = () => {
    switch (pathname) {
      case "/profile/kelasku":
        return <KelasKu />;
      default:
        return <KelasKu />;
    }
  };

  return <div className="pb-20">{renderComponent()}</div>;
};

export default Page;
