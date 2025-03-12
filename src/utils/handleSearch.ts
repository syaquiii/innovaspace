import { Course } from "@/type/TDummyData";
import { Mentor } from "@/type/Tmentor";

export const handleCourseSearch = (
  query: string,
  courses: Course[],
  setSearchQuery: (query: string) => void,
  setFilteredCourses: (courses: Course[]) => void
) => {
  setSearchQuery(query);

  const filteredCourses = courses.filter((course) =>
    course.nama.toLowerCase().includes(query.toLowerCase())
  );

  setFilteredCourses(filteredCourses);
};

export const handleMentorSearch = (
  query: string,
  mentors: Mentor[],
  setSearchQuery: (query: string) => void,
  setFilteredMentors: (mentors: Mentor[]) => void
) => {
  setSearchQuery(query);

  const filteredMentors = mentors.filter(
    (mentor) =>
      mentor.nama.toLowerCase().includes(query.toLowerCase()) ||
      mentor.spesialisasi.toLowerCase().includes(query.toLowerCase())
  );

  setFilteredMentors(filteredMentors);
};
