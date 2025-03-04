"use client";
import Hero from "./components/Hero";
import Content from "./components/Content";
import { useKelasContext } from "@/hooks/useKelasContext";
import { useState } from "react";
import { MobileFilter } from "./components/MobileFilter";
import { Filter } from "./components/Filter";
import { Search } from "./components/Search";
import { handleSearch } from "@/utils/handleSearch";

const Page = () => {
  const { kelas } = useKelasContext();
  const courseData = kelas;
  const [filteredCourses, setFilteredCourses] = useState(kelas);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="h-fit">
      <Hero />
      <div className="min-h-[50rem] lg:py-10 py-4 bg-white mycontainer">
        <div className="mb-8 flex lg:block justify-between gap-4 items-center">
          <Search
            searchQuery={searchQuery}
            onSearchChange={(query) =>
              handleSearch(
                query,
                courseData,
                setSearchQuery,
                setFilteredCourses
              )
            }
          />
          <MobileFilter
            courses={courseData}
            setFilteredCourses={setFilteredCourses}
          />
        </div>

        <div className="flex gap-8">
          <div className="hidden lg:block w-1/3">
            <Filter
              courses={courseData}
              setFilteredCourses={setFilteredCourses}
            />
          </div>

          <Content courses={filteredCourses} />
        </div>
      </div>
    </section>
  );
};

export default Page;
