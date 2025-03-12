import { Mentor } from "@/type/Tmentor";
import React, { useState } from "react";

interface Filters {
  spesialisasi?: string;
}

export const useFilterMentor = (
  mentors: Mentor[],
  setFilteredMentors: (mentors: Mentor[]) => void
) => {
  const [filters, setFilters] = useState<Filters>({});

  const handleClick = (filterType: keyof Filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType] === value ? undefined : value,
    }));
  };

  React.useEffect(() => {
    let filtered = mentors;

    if (filters.spesialisasi) {
      filtered = filtered.filter(
        (mentor) => mentor.spesialisasi === filters.spesialisasi
      );
    }

    setFilteredMentors(filtered);
  }, [filters, mentors, setFilteredMentors]);

  return { filters, handleClick };
};
