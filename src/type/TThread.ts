export interface Thread {
  thread_id: string;
  kategori: string;
  isi: string;
  user_id: string;
  comments: Comment[];
}
export interface Comment {
  comment_id: string;
  isi_komentar: string;
  thread_id: string;
  user_id: string;
}
export interface ThreadResponse {
  data: Thread;
  message: string;
  success: boolean;
}
