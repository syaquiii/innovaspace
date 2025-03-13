"use client";
import { redirect, usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import DetailKelas from "../components/DetailKelas";
import { useCourseContext } from "@/hooks/useCourseContext";
import { Course } from "@/type/Tkelas";
import MateriList from "../components/MateriList";
import { useUserContext } from "@/hooks/useUserContext";

const Page = () => {
  const pathname = usePathname();
  const currenPath = pathname.split("/");
  const kelasId = currenPath.length > 2 ? currenPath[2] : null;
  const { fetchCourseDetail, isLoading, error } = useCourseContext();
  const [dataKelas, setDataKelas] = useState<Course | null>(null);
  const { userProfile } = useUserContext();
  useEffect(() => {
    const fetchData = async () => {
      if (kelasId) {
        try {
          const course = await fetchCourseDetail(kelasId);
          if (course) {
            setDataKelas(course);
          }
        } catch (err) {
          console.error("Error fetching course detail:", err);
        }
      }
    };
    fetchData();
  }, [kelasId, fetchCourseDetail]);
  if (!userProfile) {
    redirect("/login");
  }
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <section className="h-fit bg-langganan py-24 lg:py-44">
      <div className="mycontainer">
        {dataKelas && <DetailKelas data={dataKelas} />}
        {dataKelas?.materi && <MateriList dataMateri={dataKelas.materi} />}
      </div>
    </section>
  );
};

export default Page;
