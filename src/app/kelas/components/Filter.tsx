import React from "react";
import { Course } from "@/type/TDummyData";
import { FilterButton } from "./FilterButton";
import { FilterDataCourse } from "@/data/FilterData";
import { getDurationLabel } from "@/utils/durationLabels";
import { useFilter } from "@/hooks/useFilterCourse";

interface FilterProps {
  courses: Course[];
  setFilteredCourses: (courses: Course[]) => void;
}

export const Filter: React.FC<FilterProps> = ({
  courses,
  setFilteredCourses,
}) => {
  const { filters, handleClick } = useFilter(courses, setFilteredCourses);

  return (
    <div className={`w-full h-full`}>
      <div className="bg-light-default rounded-xl shadow-lg w-full min-h-[30rem] p-10 ">
        <p className="text-xl font-bold mb-4">Filter</p>

        <span className="text-sm font-bold">Tipe</span>
        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
          {FilterDataCourse.categories.map((category) => (
            <FilterButton
              key={category.value}
              label={category.label}
              active={filters.category === category.value}
              onClick={() => handleClick("category", category.value)}
            />
          ))}
        </div>

        <span className="text-sm font-bold mt-6 block">Tingkat Kesulitan</span>
        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
          {FilterDataCourse.difficulties.map((difficulty) => (
            <FilterButton
              key={difficulty.value}
              label={difficulty.label}
              active={filters.difficulty === difficulty.value}
              onClick={() => handleClick("difficulty", difficulty.value)}
            />
          ))}
        </div>

        <span className="text-sm font-bold mt-6 block">Durasi (jam)</span>
        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
          {FilterDataCourse.durations.map((duration) => (
            <FilterButton
              key={duration}
              label={getDurationLabel(duration)}
              active={filters.duration === duration.toString()}
              onClick={() => handleClick("duration", duration.toString())}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
