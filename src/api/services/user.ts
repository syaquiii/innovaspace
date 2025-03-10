import apiInstance from "../core/core";

interface UserProfile {
  id: string;
  name: string;
  email: string;
  institusi?: string;
  mentor_id?: string;
}

export const getUserProfile = async (
  userId: string,
  token: string
): Promise<UserProfile> => {
  try {
    const response = await apiInstance.get<UserProfile>(
      `/users/get-profile/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw error;
  }
};

export const updateProfile = async (
  userId: string,
  token: string,
  data: { institusi: string }
): Promise<UserProfile> => {
  try {
    const response = await apiInstance.patch<UserProfile>(
      `/users/update/${userId}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  }
};

export const setMentor = async (
  userId: string,
  token: string,
  mentorId: string
): Promise<UserProfile> => {
  try {
    const response = await apiInstance.patch<UserProfile>(
      `/users/set-mentor/${userId}`,
      { mentor_id: mentorId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error setting mentor:", error);
    throw error;
  }
};

export const updateMentor = async (
  userId: string,
  data: { mentor_id: string }
): Promise<UserProfile> => {
  try {
    const response = await apiInstance.patch<UserProfile>(
      `/users/update-mentor/${userId}`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error updating mentor:", error);
    throw error;
  }
};
