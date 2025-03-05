import { Button } from "@/components/ui/Button";
import React from "react";

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  active,
  onClick,
}) => {
  return (
    <Button variant={active ? "normal" : "outline"} onClick={onClick}>
      {label}
    </Button>
  );
};
