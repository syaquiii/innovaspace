"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/InputField";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const RegisterForm = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form className="flex  flex-col gap-y-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="fullname" className="font-bold">
          Fullname
        </label>
        <div className="flex  lg:flex-row  gap-y-4 gap-x-2 w-full flex-col justify-between ">
          <Input
            name="firstname"
            placeholder="firstname"
            type="text"
            ref={inputRef}
          />
          <Input
            name="lastname"
            placeholder="lastname"
            type="text"
            ref={inputRef}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-bold text-lg ">
          Email
        </label>
        <Input
          name="email"
          placeholder="youremail@gmail.com"
          type="text"
          ref={inputRef}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <label htmlFor="password" className="font-bold text-lg ">
            Password
          </label>
        </div>
        <Input
          name="password"
          placeholder="********"
          type="password"
          minLength={8}
        />
      </div>
      <div className="flex justify-start gap-2">
        <span className="text-slate-500">
          Dengan mendaftar, Anda menyetujui Syarat & Ketentuan serta Kebijakan
          Privasi dari Innova Space.
        </span>
      </div>
      <Button variant="normal" size="lg">
        Login
      </Button>
    </form>
  );
};

export default RegisterForm;
