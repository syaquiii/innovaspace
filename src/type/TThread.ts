export interface Thread {
  thread_id: string;
  kategori: string;
  isi: string;
  tanggal: string;
  user_id: string;
  username: string;
  comments: Comment[];
}
export interface Comment {
  comment_id: string;
  isi_komentar: string;
  thread_id: string;
  tanggal: string;
  username: string;
  user_id: string;
}

export interface CreateCommentResponse {
  comment: Comment;
}

export interface ThreadResponse {
  data: Thread;
  message: string;
  success: boolean;
}
