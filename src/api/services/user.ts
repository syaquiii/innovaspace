import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import apiInstance from "../core/core";

interface UserProfile {
  nama: string;
  username: string;
  email: string;
  preferensi: string;
  institusi: string;
}

export const getTokenFromCookies = (): string | undefined => {
  return Cookies.get("token");
};
const token = getTokenFromCookies();

export const fetchUserProfile = async (): Promise<UserProfile> => {
  try {
    if (!token) {
      throw new Error("Token not found in cookies.");
    }

    // Decode the token to get UserId
    const decodedToken = jwtDecode<{ UserId: string; exp: number }>(token);
    const userId = decodedToken.UserId;

    const response = await apiInstance.get(`/users/get-profile/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data.profile as UserProfile;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

export const updateUserProfile = async (
  userId: string,
  updatedData: Partial<UserProfile>
) => {
  try {
    if (!token) {
      throw new Error("Token not found in cookies.");
    }

    const response = await apiInstance.patch(
      `/users/update/${userId}`,
      updatedData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};
