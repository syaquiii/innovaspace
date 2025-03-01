import Profile from "./components/Profile";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="min-h-screen mycontainer lg:pt-40 bg-langganan">
      <div>
        <Profile />
      </div>
      <div>{children}</div>
    </section>
  );
}
