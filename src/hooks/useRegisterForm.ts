import { useState } from "react";

const useRegisterForm = () => {
  const [registerForm, setRegisterForm] = useState({
    email: "",
    username: "",
    password: "",
    nama: "",
    institusi: "",
    preferensi: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return { registerForm, handleChange };
};

export default useRegisterForm;
