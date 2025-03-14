import { CreateCommentResponse } from "@/type/TThread";
import apiInstance from "../core/core";
import { getTokenFromCookies } from "./user";

const token = getTokenFromCookies();

export const createComment = async (
  thread_id: string,
  user_id: string,
  isi_komentar: string
): Promise<CreateCommentResponse> => {
  try {
    const response = await apiInstance.post<CreateCommentResponse>(
      "/comments/create-comment",
      {
        thread_id,
        user_id,
        isi_komentar,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating comment:", error);
    throw error;
  }
};
