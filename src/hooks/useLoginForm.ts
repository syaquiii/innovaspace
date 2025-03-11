import { LoginFormState } from "@/type/TLoginState";
import { useState } from "react";

const useLoginForm = () => {
  const [loginForm, setLoginForm] = useState<LoginFormState>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return { loginForm, handleChange };
};

export default useLoginForm;
