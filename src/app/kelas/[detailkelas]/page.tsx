"use client";
import { useKelasContext } from "@/hooks/useKelasContext";
import { usePathname } from "next/navigation";
import React from "react";
import DetailKelas from "../components/DetailKelas";
import MateriList from "../components/MateriList";

const Page = () => {
  const pathname = usePathname();
  const currenPath = pathname.split("/");
  const kelasId = currenPath.length > 2 ? currenPath[2] : null;

  const { getCourseById, fetchMateriByCourseId } = useKelasContext();

  if (!kelasId) return null;

  const dataKelas = getCourseById(parseInt(kelasId));
  const dataMateri = fetchMateriByCourseId(parseInt(kelasId));
  if (!dataKelas) {
    return <p>Course not found.</p>;
  }

  return (
    <section className="h-fit bg-langganan py-24 lg:py-44">
      <div className="mycontainer">
        <DetailKelas data={dataKelas} />
      </div>
      <div className="mycontainer">
        <MateriList dataMateri={dataMateri} />{" "}
      </div>
    </section>
  );
};

export default Page;
