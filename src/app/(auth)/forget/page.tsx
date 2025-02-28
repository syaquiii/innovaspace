import { Logo } from "@/components/ui/Logo";
import React from "react";
import Link from "next/link";
import ForgetForm from "./component/ForgetForm";

const page = () => {
  return (
    <div className="flex flex-col items-center lg:items-stretch gap-y-7 w-full min-h-[30rem]">
      <Logo size="normal" style="dark" />
      <h3 className="text-3xl font-bold">Atur Ulang Kata Sandi</h3>
      <span className="text-lg lg:text-start text-center text-slate-500">
        Find your space and innovate with Innova Space!
      </span>
      <ForgetForm />
      <div className="w-full justify-center flex gap-2">
        <span className="">Dont have an account yet?</span>
        <Link className="text-normal-default" href="/register">
          register
        </Link>
      </div>
    </div>
  );
};

export default page;
