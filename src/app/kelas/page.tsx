"use client";
import Hero from "./components/Hero";
import Content from "./components/Content";
import { useState, useEffect } from "react";
import { MobileFilter } from "./components/MobileFilter";
import { Filter } from "./components/Filter";
import { Search } from "./components/Search";
import { handleCourseSearch } from "@/utils/handleSearch";
import { useCourseContext } from "@/hooks/useCourseContext";

const Page = () => {
  const { courses } = useCourseContext();
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setFilteredCourses(courses);
  }, [courses]);

  return (
    <section className="h-fit">
      <Hero />
      <div className="min-h-[50rem] lg:py-10 py-4 bg-white mycontainer">
        <div className="mb-8 flex lg:block justify-between gap-4 items-center">
          <Search
            searchQuery={searchQuery}
            onSearchChange={(query) =>
              handleCourseSearch(
                query,
                courses,
                setSearchQuery,
                setFilteredCourses
              )
            }
          />
          <MobileFilter
            courses={courses}
            setFilteredCourses={setFilteredCourses}
          />
        </div>

        <div className="flex gap-8">
          <div className="hidden lg:block w-1/3">
            <Filter courses={courses} setFilteredCourses={setFilteredCourses} />
          </div>
          <Content courses={filteredCourses} />
        </div>
      </div>
    </section>
  );
};
export default Page;
