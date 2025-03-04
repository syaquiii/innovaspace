import React from "react";
import { Input } from "@/components/ui/InputField";

interface SearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Search: React.FC<SearchProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  return (
    <Input
      variant={"outline"}
      className="w-full "
      placeholder="Cari kelas"
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};
