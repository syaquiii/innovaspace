"use client";
import React from "react";
import { useThreadContext } from "@/hooks/useThreadContext";
import { useUserContext } from "@/hooks/useUserContext";
import ThreadCard from "./ThreadCard";
import { Lock } from "lucide-react";
import Link from "next/link";
import EmptyCard from "./EmptyCard";

const AllThreads: React.FC = () => {
  const { state } = useThreadContext();
  const { userProfile } = useUserContext();
  if (!userProfile) {
    return (
      <div className="w-full  rounded-xl relative mt-4">
        <ul className="flex flex-col gap-10">
          <EmptyCard />
          <EmptyCard />
        </ul>
        <div className="absolute top-0 left-0 flex text-dark-default items-center justify-center flex-col bg-dark-default w-full h-full bg-opacity-5 backdrop-blur-[2px]">
          <Lock className="w-20 h-20 opacity-60" />
          <span>Anda harus login untuk melihat threads ini</span>
          <Link
            className="text-white bg-normal-default px-6 rounded-lg text-sm mt-2 py-1"
            href={"/login"}
          >
            Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-xl ">
      {state === null ? (
        <div>Belum ada threads, yuk buat threads</div>
      ) : state.loading ? (
        <p>Loading...</p>
      ) : state.error ? (
        <p>Error: {state.error}</p>
      ) : (
        <ul className="flex flex-col gap-10">
          {state.threads ? (
            state.threads.map((thread, index) => (
              <ThreadCard key={index} thread={thread} />
            ))
          ) : (
            <p>Belum ada threads, yuk buat threads</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default AllThreads;
