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
      <Settings onClick={toggleFilter} className="cursor-pointer" />

      <div
        className={`fixed top-0 right-0 z-[100] h-fit w-screen bg-light-default transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <X
          onClick={toggleFilter}
          className="absolute top-4 right-4 cursor-pointer"
        />

        <Filter courses={courses} setFilteredCourses={setFilteredCourses} />
      </div>
    </div>
  );
};
