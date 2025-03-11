"use client";

import { fetchUserProfile } from "@/api/services/user";
import React, { createContext, useEffect, useState } from "react";

export interface UserProfile {
  nama: string;
  username: string;
  email: string;
  preferensi: string;
  institusi: string;
}

interface UserContextProps {
  userProfile: UserProfile | null;
  loading: boolean;
  error: string | null;
}

export const UserContext = createContext<UserContextProps>({
  userProfile: null,
  loading: false,
  error: null,
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const profileData = await fetchUserProfile();
        setUserProfile(profileData);
      } catch (error) {
        setError("Failed to fetch user profile.");
        throw error;
      } finally {
        setLoading(false);
      }
    };

    getUserProfile();
  }, []);

  return (
    <UserContext.Provider value={{ userProfile, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
