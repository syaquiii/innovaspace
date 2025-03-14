import { getTokenFromCookies } from "@/utils/getToken";
import apiInstance from "../core/core";
const token = getTokenFromCookies();

export const createThread = async (kategori: string, isi: string) => {
  try {
    const response = await apiInstance.post(
      "/threads/create-thread",
      {
        kategori,
        isi,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating thread:", error);
    throw error;
  }
};

export const getAllThreads = async () => {
  try {
    const response = await apiInstance.get(`/threads/show-all-thread`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching threads:", error);
  }
};

export const getThreadDetail = async (id: string) => {
  try {
    const response = await apiInstance.get(`/threads/get-detail-thread/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching thread detail:", error);
    throw error;
  }
};
