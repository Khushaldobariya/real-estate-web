import React, { useState } from "react";
import { Search } from "lucide-react";
import DrawerMenu from "./DrawerMenu.tsx"

import { Configurations, Locations, PriceRanges, ProjectTypes } from "../../utils/consents";

const MobileSearchBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState({
    projectType: "Any",
    configuration: "Any",
    priceRange: "Any",
    location: "Any",
  });

  const handleChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="w-full mx-auto h-12  block md:hidden ">
      <button
        className="w-full h-full text-black/40 flex items-center justify-start px-5 gap-4 bg-transparent rounded-xl bg-white border border-white/40"
        onClick={() => setOpen(true)}
      >
        <Search /> Search
      </button>

      <DrawerMenu open={open} setOpen={setOpen} filters={filters} handleChange={handleChange} />
    </div>
  );
};

export default MobileSearchBar;
