import { Thread } from "@/type/TThread";
import React from "react";
import Link from "next/link";

const ThreadCard: React.FC<{ thread: Thread }> = ({ thread }) => {
  return (
    <Link href={`/diskusi/${thread.thread_id}`}>
      <div className="p-8  bg-light-default  rounded-lg min-h-40">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-400"></div>
          <div className="flex flex-col">
            <span className="font-bold">{thread.username}</span>
            <span className="text-xs">{thread.tanggal}</span>
          </div>
        </div>
        <p className="font-semibold mt-4">{thread.isi}</p>
      </div>
    </Link>
  );
};

export default ThreadCard;
