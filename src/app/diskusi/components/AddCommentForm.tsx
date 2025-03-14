import React, { useState } from "react";
import { useThreadContext } from "@/hooks/useThreadContext";
import { Button } from "@/components/ui/Button";

interface AddCommentProps {
  thread_id: string;
}

const AddCommentForm: React.FC<AddCommentProps> = ({ thread_id }) => {
  const { addComment, state } = useThreadContext();
  const [comment, setComment] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim() && state.userId) {
      try {
        await addComment(thread_id, comment);
        setComment("");
        window.location.reload();
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    } else {
      console.error("Comment or User ID is missing.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 mx-8">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Komentari Thread ini"
        className="w-full p-2 resize-none border  rounded-lg shadow mb-4"
      />
      <div className="w-full flex justify-end">
        <Button
          type="submit"
          className="mt-2 px-4 py-2 w-full lg:w-1/6 bg-blue-500 text-white rounded"
        >
          Add Comment
        </Button>
      </div>
    </form>
  );
};

export default AddCommentForm;
