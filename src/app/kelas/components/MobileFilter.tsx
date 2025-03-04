// components/MobileFilter.tsx
import React, { useState } from "react";
import { Course } from "@/type/TDummyData";
import { Settings, X } from "lucide-react";
import { Filter } from "./Filter";

interface MobileFilterProps {
  courses: Course[];
  setFilteredCourses: (courses: Course[]) => void;
}

export const MobileFilter: React.FC<MobileFilterProps> = ({
  courses,
  setFilteredCourses,
}) => {
  const [isOpen, setOpen] = useState(false);

  const toggleFilter = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="lg:hidden">
      {/* Tombol untuk membuka filter */}
      <Settings onClick={toggleFilter} className="cursor-pointer" />

      {/* Modal filter */}
      {isOpen && (
        <div className="fixed top-0 right-0 z-10 h-screen w-screen bg-light-default">
          {/* Tombol untuk menutup filter */}
          <X
            onClick={toggleFilter}
            className="absolute top-4 right-4 cursor-pointer"
          />

          {/* Komponen Filter */}
          <Filter courses={courses} setFilteredCourses={setFilteredCourses} />
        </div>
      )}
    </div>
  );
};
