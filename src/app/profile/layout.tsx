"use client";

import NavbarProfile from "./components/NavbarProfile";
import Profile from "./components/Profile";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="min-h-screen lg:pt-40 pt-24 bg-langganan">
      <div className="mycontainer">
        <Profile hasbuttonToProfile={false} />
        <NavbarProfile />
      </div>
      <div className="mycontainer mt-4">{children}</div>
    </section>
  );
}
