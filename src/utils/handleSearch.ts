import { Course } from "@/type/TDummyData";

export const handleSearch = (
  query: string,
  courses: Course[],
  setSearchQuery: (query: string) => void,
  setFilteredCourses: (courses: Course[]) => void
) => {
  setSearchQuery(query);
  const filtered = courses.filter((course) =>
    course.nama.toLowerCase().includes(query.toLowerCase())
  );
  setFilteredCourses(filtered);
};
