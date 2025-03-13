import { Course } from "@/type/Tkelas";
import { useState, useEffect } from "react";

export const useFilter = (
  courses: Course[],
  setFilteredCourses: (courses: Course[]) => void
) => {
  const [filters, setFilters] = useState<{ [key: string]: string | null }>({
    category: null,
    difficulty: null,
    durasi: null,
  });

  const [isFilteredDataEmpty, setIsFilteredDataEmpty] = useState(false);

  useEffect(() => {
    const filtered = courses.filter((course) => {
      const courseDuration = Number(course.durasi);
      const filterDuration = filters.durasi ? Number(filters.durasi) : null;

      return (
        (!filters.category || course.kategori === filters.category) &&
        (!filters.difficulty ||
          course.tingkat_kesulitan === filters.difficulty) &&
        (filterDuration === null || courseDuration < filterDuration)
      );
    });

    setFilteredCourses(filtered);
    setIsFilteredDataEmpty(filtered.length === 0);
  }, [filters, courses, setFilteredCourses]);

  const handleClick = (filterType: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType] === value ? null : value,
    }));
  };

  return {
    filters,
    handleClick,
    isFilteredDataEmpty,
  };
};
