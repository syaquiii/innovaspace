import { useEffect, useState } from "react";
import { Course } from "@/type/TDummyData";

export const useFilterCourses = (
  courses: Course[],
  filters: { [key: string]: string | null }
) => {
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);

  useEffect(() => {
    const filtered = courses.filter((course) => {
      return (
        (!filters.category || course.kategori === filters.category) &&
        (!filters.difficulty ||
          course.tingkat_kesulitan === filters.difficulty) &&
        (!filters.duration || course.duration < filters.duration) // Periksa apakah durasi KURANG DARI nilai yang dipilih
      );
    });
    setFilteredCourses(filtered);
  }, [filters, courses]);

  return filteredCourses;
};
