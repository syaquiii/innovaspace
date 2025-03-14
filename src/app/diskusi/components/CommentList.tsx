import React from "react";
import { Comment } from "@/type/TThread"; // Ensure this path is correct

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="lg:mx-14 flex flex-col gap-10 mt-10 pb-20">
      {!comments ? (
        <p className="w-full text-center">No comments yet.</p>
      ) : (
        comments.map((comment) => (
          <div
            key={comment.comment_id}
            className="border-b-2 lg:ms-10 mx-10 border-gray-300 py-2"
          >
            <div className="flex gap-2 items-center">
              <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
              <div className="flex flex-col">
                <span className="font-bold">{comment.username}</span>
                <span className="text-xs">{comment.tanggal}</span>
              </div>
            </div>
            <p className="mt-4">{comment.isi_komentar}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentList;
