"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/InputField";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { DummyUser } from "@/data/DummyUser";
import { redirect } from "next/navigation";
import Cookies from "js-cookie";

const LoginForm = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const { user } = DummyUser;
    if (
      loginForm.email === user.email &&
      loginForm.password === user.password
    ) {
      setError("");

      Cookies.set("token", "dummyTokenValue", {
        expires: 30,
        path: "/",
      });

      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberMe");
      }

      redirect("/home");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <form className="flex flex-col gap-y-6" onSubmit={handleLogin}>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-bold text-lg">
          Email
        </label>
        <Input
          name="email"
          placeholder="youremail@gmail.com"
          type="text"
          ref={inputRef}
          value={loginForm.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <label htmlFor="password" className="font-bold text-lg">
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
          value={loginForm.password}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-start gap-2">
        <Input
          className="w-4 h-4"
          type="checkbox"
          onChange={handleRememberMeChange}
        />
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
