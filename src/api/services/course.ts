import apiInstance from "../core/core";
import { getTokenFromCookies } from "./user";
const token = getTokenFromCookies();

export const getAllCourses = async () => {
  try {
    const response = await apiInstance.get("/kelas/");
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

export const getCourseDetail = async (courseId: string) => {
  try {
    const response = await apiInstance.get(
      `/kelas/get-detail-kelas/${courseId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching course details:", error);
    throw error;
  }
};

export const updateProgress = async (materi_id: string) => {
  try {
    const response = await apiInstance.post(
      "/progress/",
      {
        materi_id: materi_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating progress:", error);
    throw error;
  }
};
