"use client";
import { Button } from "@/components/ui/Button";
import { useThreadContext } from "@/hooks/useThreadContext";
import { useUserContext } from "@/hooks/useUserContext";
import React, { useState, useRef, useEffect } from "react";

const CreateThread: React.FC = () => {
  const { addThread } = useThreadContext();
  const { userProfile } = useUserContext();
  const [formData, setFormData] = useState({
    kategori: " ",
    isi: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userProfile) {
      setLoading(true);
      try {
        await addThread(formData.kategori, formData.isi);
        setSuccess(true);
        setFormData({ kategori: " ", isi: "" });
      } catch (error) {
        console.error("Error creating thread:", error);
      } finally {
        setLoading(false);
      }
    } else {
      console.error("User is not authenticated");
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [formData.isi]);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Forum Diskusi</h1>
      <form
        className="w-full shadow-lg bg-light-default gap-4 flex flex-col lg:flex-row rounded-xl px-10 py-10 h-fit"
        onSubmit={handleSubmit}
      >
        <div className="lg:w-1/4 flex items-start justify-center lg:mt-4 ">
          <div className=" bg-blue-400 rounded-full w-32 h-32"></div>
        </div>
        <div className="w-full">
          <div className="w-full">
            <textarea
              className="w-full min-h-[10rem] pb-20 resize-none p-2 rounded-lg "
              name="isi"
              value={formData.isi}
              onChange={handleChange}
              placeholder="apa yang kamu pikirkan?"
              ref={textareaRef}
              required
            ></textarea>
            <div className="-mt-14 mr-4 flex justify-end">
              <Button type="submit" className="" disabled={loading}>
                {loading ? "Mengunggah..." : "Unggah"}
              </Button>
            </div>
          </div>
        </div>
      </form>
      {success && (
        <div className="mt-4 text-green-600">Thread berhasil dibuat!</div>
      )}
    </div>
  );
};

export default CreateThread;
