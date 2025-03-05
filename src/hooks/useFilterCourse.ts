import { useState, useEffect } from "react";
import { Course } from "@/type/TDummyData";

export const useFilter = (
  courses: Course[],
  setFilteredCourses: (courses: Course[]) => void
) => {
  const [filters, setFilters] = useState<{ [key: string]: string | null }>({
    category: null,
    difficulty: null,
    duration: null,
  });

  const [isFilteredDataEmpty, setIsFilteredDataEmpty] = useState(false);

  useEffect(() => {
    const filtered = courses.filter((course) => {
      return (
        (!filters.category || course.kategori === filters.category) &&
        (!filters.difficulty ||
          course.tingkat_kesulitan === filters.difficulty) &&
        (!filters.duration || course.duration < filters.duration)
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
