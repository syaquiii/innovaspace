// components/MentorFilter.tsx
import React from "react";
import { Mentor } from "@/type/TDummyData";
import { FilterButton } from "./FilterButton";
import { FilterDataMentor } from "@/data/FilterData";
import { useFilterMentor } from "@/hooks/useFilterMentor";

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
        <span className="text-sm font-bold mt-6 block">Tipe</span>
        <div className="grid grid-cols-2 gap-4 my-4 text-sm">
          {FilterDataMentor.types.map((type) => (
            <FilterButton
              key={type.value}
              label={type.label}
              active={filters.type === type.value}
              onClick={() => handleClick("type", type.value)}
            />
          ))}
        </div>
        <span className="text-sm font-bold">Preferensi</span>
        <div className="flex flex-wrap gap-2 mt-4 text-sm">
          {FilterDataMentor.preferensi.map((preference) => (
            <FilterButton
              key={preference.value}
              label={preference.label}
              active={filters.preference === preference.value}
              onClick={() => handleClick("preference", preference.value)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
