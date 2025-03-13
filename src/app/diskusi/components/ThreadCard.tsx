import { Thread } from "@/type/TThread";
import React, { useEffect, useState } from "react";
import { fetchUserProfile } from "@/api/services/user";
import Link from "next/link";

const ThreadCard: React.FC<{ thread: Thread }> = ({ thread }) => {
  const [userName, setUserName] = useState<string>("");
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const userProfile = await fetchUserProfile(thread.user_id);
        setUserName(userProfile.username);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    getUserProfile();
  }, [thread.user_id]);

  return (
    <Link href={`/diskusi/${thread.thread_id}`}>
      <div className="p-8 bg-light-default  rounded-lg min-h-40">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-400"></div>
          <div className="font-bold">{userName}</div>
        </div>
        <p className="font-semibold mt-4">{thread.isi}</p>
      </div>
    </Link>
  );
};

export default ThreadCard;
