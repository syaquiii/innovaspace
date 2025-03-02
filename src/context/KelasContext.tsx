"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { dummyData } from "@/data/DummyData";
import { ProgressBelajar } from "@/type/TDummyData";

interface KelasContextType {
  dataKelasKu: ProgressBelajar[];
  getCourseName: (idCourse: number) => string;
  getCourseId: (courseName: string) => number | undefined;
  getProgressPercentage: (idCourse: number) => number;
}

const KelasContext = createContext<KelasContextType | undefined>(undefined);

export const KelasProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [dataKelasKu, setDataKelasKu] = useState<ProgressBelajar[]>([]);

  useEffect(() => {
    const fetchData = () => {
      const data = dummyData.progress_belajar.filter(
        (item: ProgressBelajar) => item.id_user === 1
      );
      setDataKelasKu(data);
    };

    fetchData();
  }, []);

  const getProgressPercentage = (idCourse: number) => {
    const course = dummyData.course.find(
      (course) => course.id_course === idCourse
    );
    if (!course) return 0;

    const totalMateri = course.jumlah_materi;
    const progress = dummyData.progress_belajar.filter(
      (item) => item.id_course === idCourse && item.status === "sudah dilihat"
    ).length;

    return Math.round((progress / totalMateri) * 100);
  };
  const getCourseName = (idCourse: number) => {
    const course = dummyData.course.find(
      (course) => course.id_course === idCourse
    );
    return course ? course.nama : "Unknown Course";
  };

  const getCourseId = (courseName: string) => {
    const course = dummyData.course.find(
      (course) => course.nama === courseName
    );
    return course ? course.id_course : undefined;
  };

  return (
    <KelasContext.Provider
      value={{ dataKelasKu, getCourseName, getCourseId, getProgressPercentage }}
    >
      {children}
    </KelasContext.Provider>
  );
};

export default KelasContext;
