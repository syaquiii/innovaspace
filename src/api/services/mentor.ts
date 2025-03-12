import apiInstance from "../core/core";
import { getTokenFromCookies } from "./user";
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
    console.log("API response:", response);

    if (response.data && response.data.data && response.data.data.mentor) {
      return response.data.data.mentor; // Accessing the mentor object directly
    } else {
      console.error("Unexpected API response structure", response.data);
      return null;
    }
  } catch (error) {
    console.error("Error fetching mentor details:", error);
    throw error;
  }
};
