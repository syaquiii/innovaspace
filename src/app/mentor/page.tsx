"use client";
import Hero from "./components/Hero";
import Content from "./components/Content";
import { useMentorContext } from "@/hooks/useMentorContext";
import { MobileFilter } from "./components/MobileFilter";
import { useState } from "react";
import { Filter } from "./components/Filter";
import { Search } from "./components/Search";
import { handleMentorSearch } from "@/utils/handleSearch";

const Page = () => {
  const { mentors } = useMentorContext();
  const mentorsData = mentors;
  const [filteredMentors, setFilteredMentors] = useState(mentors);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="h-fit">
      <Hero />
      <div className="min-h-[50rem] lg:py-10 py-4 bg-white mycontainer">
        <div className="mb-8 flex lg:block justify-between gap-4 items-center">
          <Search
            searchQuery={searchQuery}
            onSearchChange={(query) =>
              handleMentorSearch(
                query,
                mentorsData,
                setSearchQuery,
                setFilteredMentors
              )
            }
          />
          <MobileFilter
            mentors={mentorsData}
            setFilteredMentors={setFilteredMentors}
          />
        </div>

        <div className="flex gap-8">
          <div className="hidden lg:block w-1/3">
            <Filter mentors={mentors} setFilteredMentors={setFilteredMentors} />
          </div>
          <Content mentor={filteredMentors} />
        </div>
      </div>
    </section>
  );
};

export default Page;
