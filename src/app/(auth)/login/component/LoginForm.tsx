"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/InputField";
import Link from "next/link";
import React, { useState } from "react";
import useLoginForm from "@/hooks/useLoginForm";
import useRememberMe from "@/hooks/useRememberMe";
import { handleLogin } from "@/utils/handelogin";

const LoginForm: React.FC = () => {
  const { loginForm, handleChange } = useLoginForm();
  const { rememberMe, handleRememberMeChange } = useRememberMe();
  const [error, setError] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleLogin(
      loginForm.email,
      loginForm.password,
      rememberMe,
      setError
    );
  };

  return (
    <form className="flex flex-col gap-y-6" onSubmit={onSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-bold text-lg">
          Email
        </label>
        <Input
          name="email"
          placeholder="youremail@gmail.com"
          type="text"
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
