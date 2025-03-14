import { getTokenFromCookies } from "@/utils/getToken";
import apiInstance from "../core/core";
import { jwtDecode } from "jwt-decode";
const token = getTokenFromCookies();

export const getAllMentors = async () => {
  try {
    const response = await apiInstance.get("/mentors/");
    return response.data;
  } catch (error) {
    console.error("Error fetching mentors:", error);
    throw error;
  }
};

export const getMentorDetails = async (mentorId: string) => {
  try {
    const response = await apiInstance.get(
      `/mentors/mentor-details/${mentorId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data && response.data.data && response.data.data.mentor) {
      return response.data.data.mentor;
    } else {
      console.error("Unexpected API response structure", response.data);
      return null;
    }
  } catch (error) {
    console.error("Error fetching mentor details:", error);
    throw error;
  }
};
export const setMentor = async (mentorId: string) => {
  try {
    const token = getTokenFromCookies();
    if (!token) {
      throw new Error("Token not found in cookies.");
    }
    const decodedToken = jwtDecode<{ UserId: string; exp: number }>(token);
    const userId = decodedToken.UserId;
    const response = await apiInstance.patch(
      `/users/set-mentor/${userId}`,
      {
        mentor_id: mentorId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
