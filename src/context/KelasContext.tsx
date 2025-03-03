"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { dummyData } from "@/data/DummyData";
import { Course, ProgressBelajar, Materi } from "@/type/TDummyData";

interface KelasContextType {
  kelas: Course[];
  progressBelajar: ProgressBelajar[];
  getCourseById: (idCourse: number) => Course | undefined;
  getProgressPercentage: (idCourse: number) => number;
  fetchMateriByCourseId: (id_course: number | string) => Materi[];
  getCourseByIdUser: (idUser: number) => Course[];
}

const KelasContext = createContext<KelasContextType | undefined>(undefined);

export const KelasProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [progressBelajar, setProgressBelajar] = useState<ProgressBelajar[]>([]);
  const [kelas, setKelas] = useState<Course[]>([]);

  useEffect(() => {
    const fetchData = () => {
      const data = dummyData.progress_belajar.filter(
        (item: ProgressBelajar) => item.id_user === 1
      );
      setProgressBelajar(data);
      setKelas(dummyData.course);
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

  const getCourseById = (idCourse: number): Course | undefined => {
    return dummyData.course.find((course) => course.id_course === idCourse);
  };

  const fetchMateriByCourseId = (id_course: number | string) => {
    return dummyData.materi.filter((materi) => materi.id_course === id_course);
  };
  const getCourseByIdUser = (idUser: number): Course[] => {
    const userProgress = dummyData.progress_belajar.filter(
      (progress) => progress.id_user === idUser
    );
    const courseIds = userProgress.map((progress) => progress.id_course);
    return dummyData.course.filter((course) =>
      courseIds.includes(course.id_course)
    );
  };

  return (
    <KelasContext.Provider
      value={{
        getCourseByIdUser,
        kelas,
        progressBelajar,
        getCourseById,
        getProgressPercentage,
        fetchMateriByCourseId,
      }}
    >
      {children}
    </KelasContext.Provider>
  );
};

export default KelasContext;
