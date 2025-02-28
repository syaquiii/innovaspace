"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/InputField";
import React, { useEffect, useRef, useState } from "react";

const ForgetForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      // Handle form submission
    }
  };

  return (
    <form className="flex  flex-col gap-y-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="font-bold text-lg">
          New password
        </label>
        <Input
          name="password"
          placeholder="********"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={inputRef}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <label htmlFor="cpassword" className="font-bold text-lg">
            Confirm password
          </label>
        </div>
        <Input
          name="cpassword"
          placeholder="********"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex justify-start gap-2">
        <span className="text-slate-500">
          Dengan mendaftar, Anda menyetujui Syarat & Ketentuan serta Kebijakan
          Privasi dari Innova Space.
        </span>
      </div>
      <Button variant="normal" size="lg">
        Submit
      </Button>
    </form>
  );
};

export default ForgetForm;
