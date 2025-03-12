// components/MentorFilter.tsx
import React from "react";
import { FilterButton } from "./FilterButton";
import { FilterDataMentor } from "@/data/FilterData";
import { useFilterMentor } from "@/hooks/useFilterMentor";
import { Mentor } from "@/type/Tmentor";

interface MentorFilterProps {
  mentors: Mentor[];
  setFilteredMentors: (mentors: Mentor[]) => void;
}

export const Filter: React.FC<MentorFilterProps> = ({
  mentors,
  setFilteredMentors,
}) => {
  const { filters, handleClick } = useFilterMentor(mentors, setFilteredMentors);

  return (
    <div className="w-full h-full">
      <div className="bg-light-default rounded-xl shadow-lg w-full h-[30rem] lg:h-fit p-10">
        <p className="text-xl font-bold mb-4">Filter Mentor</p>

        <span className="text-sm font-bold">spesialisasi</span>
        <div className="flex flex-wrap gap-2 mt-4 text-sm">
          {FilterDataMentor.spesialiasasi.map((spesialisasi) => (
            <FilterButton
              key={spesialisasi.value}
              label={spesialisasi.label}
              active={filters.spesialisasi === spesialisasi.value}
              onClick={() => handleClick("spesialisasi", spesialisasi.value)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
