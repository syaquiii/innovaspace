"use client";
import { useKelasContext } from "@/hooks/useKelasContext";
import { usePathname } from "next/navigation";
import React from "react";
import DetailKelas from "../components/DetailKelas";

const Page = () => {
  const pathname = usePathname();
  const currenPath = pathname.split("/");
  const kelasId = currenPath.length > 2 ? currenPath[2] : null;

  const { getCourseById } = useKelasContext();

  if (!kelasId) return null;

  const dataKelas = getCourseById(parseInt(kelasId));

  if (!dataKelas) {
    return <p>Course not found.</p>;
  }

  return (
    <section className="min-h-screen bg-langganan py-24 lg:py-44">
      <div className="mycontainer">
        <DetailKelas data={dataKelas} />
      </div>
    </section>
  );
};

export default Page;
