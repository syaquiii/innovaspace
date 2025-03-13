import React, { useEffect, useState } from "react";
import { Comment } from "@/type/TThread"; // Ensure this path is correct
import { fetchUserProfile } from "@/api/services/user";

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  const [usernames, setUsernames] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (!Array.isArray(comments) || comments.length === 0) {
      return;
    }

    const fetchUsernames = async () => {
      const fetchedUsernames: { [key: string]: string } = {};
      try {
        for (const comment of comments) {
          if (!usernames[comment.user_id]) {
            const userProfile = await fetchUserProfile(comment.user_id);
            fetchedUsernames[comment.user_id] = userProfile.username;
          }
        }
        setUsernames((prevUsernames) => ({
          ...prevUsernames,
          ...fetchedUsernames,
        }));
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsernames();
  }, [comments]);

  return (
    <div className="lg:ms-10 flex flex-col gap-10 mt-10 pb-20">
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
              <span className="font-bold">
                {usernames[comment.user_id] || comment.user_id}
              </span>
            </div>
            <p className="mt-4">{comment.isi_komentar}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentList;
