import { useState, useEffect } from "react";

export const useUpdateForm = <T extends object>(
  initialState: T,
  storageKey: string
) => {
  const savedState = JSON.parse(sessionStorage.getItem(storageKey) || "null");

  const [formState, setFormState] = useState<T>(savedState || initialState);

  useEffect(() => {
    sessionStorage.setItem(storageKey, JSON.stringify(formState));
  }, [formState, storageKey]);

  const handleInputChange = (field: keyof T, value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return {
    formState,
    handleInputChange,
  };
};
