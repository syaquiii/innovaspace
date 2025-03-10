import apiInstance from "../core/core";

export const getAllMentors = async () => {
  try {
    const response = await apiInstance.get("/mentors/");
    return response.data;
  } catch (error) {
    console.error("Error fetching mentors:", error);
    throw error;
  }
};
