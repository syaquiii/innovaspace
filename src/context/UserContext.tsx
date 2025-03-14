"use client";

import { fetchUserProfile } from "@/api/services/user";
import { Mentor } from "@/type/Tmentor";
import { getTokenFromCookies } from "@/utils/getToken";
import { jwtDecode } from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";

export interface UserProfile {
  nama: string;
  username: string;
  email: string;
  preferensi: string;
  institusi: string;
  mentor_id: string;
  mentor: Mentor[];
  kelas: {
    kelas_id: string;
    nama: string;
    deskripsi: string;
    kategori: string;
    jumlah_materi: number;
  }[];
  is_premium: boolean;
}

interface UserContextProps {
  userProfile: UserProfile | null;
  loading: boolean;
  error: string | null;
  isUserEnrolled: (courseId: string) => boolean;
}

export const UserContext = createContext<UserContextProps>({
  userProfile: null,
  loading: false,
  error: null,
  isUserEnrolled: () => false,
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
        const token = getTokenFromCookies();
        if (!token) {
          throw new Error("Token not found in cookies.");
        }

        const decodedToken = jwtDecode<{ UserId: string; exp: number }>(token);
        const userId = decodedToken.UserId;
        const profileData = await fetchUserProfile(userId);

        // Ensure 'kelas' is always an array and transform data if necessary
        const updatedProfileData: UserProfile = {
          ...profileData,
          kelas: Array.isArray(profileData.kelas) ? profileData.kelas : [],
        };

        setUserProfile(updatedProfileData);
        console.log(updatedProfileData);
      } catch (error) {
        setError("Failed to fetch user profile.");
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    getUserProfile();
  }, []);

  const isUserEnrolled = (courseId: string) => {
    if (!userProfile) return false;
    return userProfile.kelas.some((course) => course.kelas_id === courseId);
  };

  return (
    <UserContext.Provider
      value={{ userProfile, loading, error, isUserEnrolled }}
    >
      {children}
    </UserContext.Provider>
  );
};
