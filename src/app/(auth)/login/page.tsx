import { Logo } from "@/components/ui/Logo";
import React from "react";
import LoginForm from "./component/LoginForm";
import AuthAbout from "@/components/AuthAbout";

const page = () => {
  return (
    <section className="lg:h-screen min-h-screen  flex lg:flex-row  bg-white">
      <div className=" lg:w-1/2  mycontainer flex  items-center px-32 py-12 justify-center ">
        <div className="flex flex-col items-center lg:items-stretch gap-y-7 w-full min-h-[30rem]">
          <Logo size="normal" style="dark" />
          <h3 className="text-3xl font-bold">Masuk</h3>
          <span className="text-lg lg:text-start text-center text-slate-500">
            Find your space and innovate with Innova Space!
          </span>
          <LoginForm />
        </div>
      </div>
      <div className=" hidden lg:flex lg:w-1/2 h-screen  items-center py-20 justify-center  bg-light-default">
        <AuthAbout />
      </div>
    </section>
  );
};

export default page;
