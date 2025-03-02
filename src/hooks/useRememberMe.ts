import { useState } from "react";

const useRememberMe = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  return { rememberMe, handleRememberMeChange };
};

export default useRememberMe;
