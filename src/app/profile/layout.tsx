"use client";

import { usePathname } from "next/navigation";
import NavbarProfile from "./components/NavbarProfile";
import Profile from "./components/Profile";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <section className="min-h-screen lg:pt-40 pt-24 bg-langganan">
      <div className="mycontainer">
        <Profile />
        {pathname !== "/profile/editprofile" && <NavbarProfile />}
      </div>
      <div className="mycontainer mt-4">{children}</div>
    </section>
  );
}
