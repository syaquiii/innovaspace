"use client";
import { updateUserProfile } from "@/api/services/user";
import { UserProfile } from "@/context/UserContext";
import { useUpdateForm } from "@/hooks/useUpdateForm";
import { useState } from "react";

const HandleUpdateUser = (initialProfile: UserProfile | null) => {
  const { formState, handleInputChange } = useUpdateForm<UserProfile>(
    initialProfile || {
      nama: "",
      username: "",
      email: "",
      preferensi: "",
      institusi: "",
    },
    "userProfile"
  );

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (userId: string) => {
    if (!formState) return;

    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      await updateUserProfile(userId, formState);
      setSuccess("Profile updated successfully.");
    } catch (error) {
      setError("Failed to update profile. Please try again.");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    formState,
    loading,
    success,
    error,
    handleInputChange,
    handleSubmit,
  };
};

export default HandleUpdateUser;
