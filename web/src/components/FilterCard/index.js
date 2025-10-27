import React from "react";
import { Filter } from "lucide-react";
import { Button } from "../ui/button";

function FilterCard({ title, actived }) {
  return (
    <Button
      variant={actived ? "default" : "outline"}
      className={`w-full flex items-center space-x-2 ${
        actived
          ? "bg-sage-600 text-cream-50 hover:bg-sage-700"
          : "bg-cream-50 text-forest-700 hover:bg-sage-50 border-sage-200"
      }`}
    >
      <Filter className="w-4 h-4" />
      <span>{title}</span>
    </Button>
  );
}

export default FilterCard;
