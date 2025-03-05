import React, { useState } from "react";
import { Mentor } from "@/type/TDummyData";

interface Filters {
  preference?: string;
  type?: string;
  popularity?: string;
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

    if (filters.preference) {
      filtered = filtered.filter(
        (mentor) => mentor.preferensi === filters.preference
      );
    }

    if (filters.type) {
      filtered = filtered.filter((mentor) => mentor.type === filters.type);
    }

    setFilteredMentors(filtered);
  }, [filters, mentors, setFilteredMentors]);

  return { filters, handleClick };
};
