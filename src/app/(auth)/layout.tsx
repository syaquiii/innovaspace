import AuthAbout from "@/components/AuthAbout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="lg:h-screen relative min-h-screen  flex lg:flex-row  bg-white">
      <div className=" lg:w-1/2 mycontainer flex  items-center px-64 py-12 justify-center ">
        {children}
      </div>
      <div className=" hidden lg:flex lg:w-1/2 h-screen  items-center py-20 justify-center  bg-light-default">
        <AuthAbout />
      </div>
    </section>
  );
}
