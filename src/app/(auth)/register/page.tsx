import { Logo } from "@/components/ui/Logo";
import React from "react";
import Link from "next/link";
import RegisterForm from "./component/RegisterForm";

const page = () => {
  return (
    <div className="flex flex-col items-center lg:items-stretch lg:gap-y-4 gap-y-7 w-full min-h-[30rem]">
      <Logo size="normal" style="dark" />
      <h3 className="text-3xl lg:text-xl xl:text-3xl font-bold">Register</h3>
      <span className="text-lg lg:text-sm xl:text-lg lg:text-start text-center text-slate-500">
        Find your space and innovate with Innova Space!
      </span>
      <RegisterForm />
      <span className="text-center">
        Already have an account?
        <Link className="text-normal-default ml-2" href="/login">
          login
        </Link>
      </span>
    </div>
  );
};

export default page;
