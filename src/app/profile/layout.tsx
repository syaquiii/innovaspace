import Profile from "./components/Profile";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="min-h-screen lg:pt-40 pt-24 bg-langganan">
      <div className=" mycontainer">
        <Profile />
      </div>
      <div className=" mycontainer">{children}</div>
    </section>
  );
}
