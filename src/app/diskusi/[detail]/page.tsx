"use client";

import { useThreadContext } from "@/hooks/useThreadContext";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Thread } from "@/type/TThread";
import ThreadCard from "../components/ThreadCard";
import AddCommentForm from "../components/AddCommentForm";
import CommentList from "../components/CommentList";

const Page = () => {
  const pathname = usePathname();
  const currenPath = pathname.split("/");
  const threads_id = currenPath.length > 2 ? currenPath[2] : null;
  const { fetchThreadDetail } = useThreadContext();
  const [data, setData] = useState<Thread | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getThreadData = async () => {
      if (threads_id) {
        try {
          const threadDetail = await fetchThreadDetail(threads_id);
          setData(threadDetail);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    };

    getThreadData();
  }, [threads_id, fetchThreadDetail]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No thread details available.</div>;
  }

  return (
    <div className="bg-langganan min-h-screen py-44">
      <div className="mycontainer">
        <div className="bg-light-default min-h-[40rem] ">
          <ThreadCard key={data.thread_id} thread={data} />
          <div className="border-t-2  border-gray-400 mx-8 font-bold">
            <h1 className="mt-4">Komentar</h1>
          </div>
          <AddCommentForm thread_id={data.thread_id} />
          <CommentList comments={data.comments} />
        </div>
      </div>
    </div>
  );
};

export default Page;
