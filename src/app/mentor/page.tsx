"use client";
import Hero from "./components/Hero";
import Content from "./components/Content";
import { useMentorContext } from "@/hooks/useMentorContext";
import { MobileFilter } from "./components/MobileFilter";
import { useState } from "react";
import { Filter } from "./components/Filter";
import { Search } from "./components/Search";
import { handleMentorSearch } from "@/utils/handleSearch";
import { Mentor } from "@/type/Tmentor";

const Page = () => {
  const { mentors } = useMentorContext();
  const [filteredMentors, setFilteredMentors] = useState<Mentor[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  console.log(mentors);
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
                mentors || [],
                setSearchQuery,
                setFilteredMentors
              )
            }
          />
          <MobileFilter
            mentors={mentors || []}
            setFilteredMentors={setFilteredMentors}
          />
        </div>

        <div className="flex gap-8">
          <div className="hidden lg:block w-1/3">
            <Filter
              mentors={mentors || []}
              setFilteredMentors={setFilteredMentors}
            />
          </div>
          <Content mentor={filteredMentors} />
        </div>
      </div>
    </section>
  );
};

export default Page;
