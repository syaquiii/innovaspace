"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/InputField";
import React, { useEffect, useRef, useState } from "react";
import useRegisterForm from "@/hooks/useRegisterForm";
import { handleRegister } from "@/action/handleRegister";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const { registerForm, handleChange } = useRegisterForm();
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await handleRegister(
        registerForm.email,
        registerForm.username,
        registerForm.password,
        registerForm.nama
      );
      router.push("/login");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
      <div className="flex lg:flex-row flex-col gap-8 lg:gap-10">
        <div>
          <label htmlFor="fullname" className="font-bold">
            Nama
          </label>
          <Input
            required
            name="nama"
            placeholder="nama"
            type="text"
            value={registerForm.nama}
            onChange={handleChange}
            ref={inputRef}
          />
        </div>
        <div>
          <label htmlFor="fullname" className="font-bold">
            Username
          </label>
          <Input
            required
            name="username"
            placeholder="username"
            type="text"
            value={registerForm.username}
            onChange={handleChange}
            ref={inputRef}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-bold text-lg">
          Email
        </label>
        <Input
          required
          name="email"
          placeholder="youremail@gmail.com"
          type="text"
          value={registerForm.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <label htmlFor="password" className="font-bold text-lg">
            Password
          </label>
        </div>
        <Input
          required
          name="password"
          placeholder="********"
          type="password"
          minLength={8}
          value={registerForm.password}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-start gap-2">
        <span className="text-slate-500">
          Dengan mendaftar, Anda menyetujui Syarat & Ketentuan serta Kebijakan
          Privasi dari Innova Space.
        </span>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <Button variant="normal" size="lg" type="submit">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
