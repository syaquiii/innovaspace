"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/InputField";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { DummyUser } from "@/data/DummyUser";
import { redirect } from "next/navigation";

const LoginForm = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const { user } = DummyUser;
    if (email === user.email && password === user.password) {
      setError("");
      redirect("/home");
    } else {
    }
  };

  return (
    <form className="flex flex-col gap-y-6" onSubmit={handleLogin}>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-bold text-lg ">
          Email
        </label>
        <Input
          name="email"
          placeholder="youremail@gmail.com"
          type="text"
          ref={inputRef}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <label htmlFor="password" className="font-bold text-lg ">
            Password
          </label>
          <Link className="font-normal text-normal-default" href="/forget">
            forget password?
          </Link>
        </div>
        <Input
          name="password"
          placeholder="********"
          type="password"
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex justify-start gap-2">
        <Input className="w-4 h-4" type="checkbox" />
        <label htmlFor="remember-me">remember me</label>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <Button variant="normal" size="lg" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
