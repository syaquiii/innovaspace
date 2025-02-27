"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/InputField";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const LoginForm = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form className="flex flex-col gap-y-6">
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
          <Link className="font-normal text-normal-default" href="/">
            forget password?
          </Link>
        </div>
        <Input
          name="password"
          placeholder="********"
          type="password"
          minLength={8}
        />
      </div>
      <div className="flex justify-start gap-2">
        <Input className="w-4 h-4" type="checkbox" />
        <label htmlFor="remember-me">remember me</label>
      </div>
      <Button variant="normal" size="lg">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
