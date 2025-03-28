import  React from 'react'
import { useState } from 'react';
import FilterSelect from './FilterSelect.tsx';
import { Configurations, Locations, PriceRanges, ProjectTypes } from '../../utils/consents.ts';

const SearchBar = () => {
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
  

    <div className="container mx-auto px-4">
  <div className="bg-transparent hidden md:block">
    <div className="flex flex-wrap items-center justify-around gap-1 lg:gap-4 h-[150px] lg:h-[120px] bg-white  border border-black/40 ">
      <FilterSelect
        label="Project Type"
        options={["Any", ...ProjectTypes]}
        value={filters.projectType}
        onChange={(value) => handleChange("projectType", value)}
        isMobile={false}
      />
      <FilterSelect
        label="Configuration"
        options={["Any", ...Configurations]}
        value={filters.configuration}
        onChange={(value) => handleChange("configuration", value)}
        isMobile={false}
      />
      <FilterSelect
        label="Price Range"
        options={["Any", ...PriceRanges]}
        value={filters.priceRange}
        onChange={(value) => handleChange("priceRange", value)}
        isMobile={false}
      />
      <FilterSelect
        label="Location"
        options={["Any", ...Locations]}
        value={filters.location}
        onChange={(value) => handleChange("location", value)}
        isMobile={false}
      />
      <button className="px-3 lg:px-6 py-3 lg:5 text-sm lg:text-base border border-black transition duration-300 hover:bg-black hover:text-white ">
        SEARCH PROJECTS
      </button>
    </div>
  </div>
</div>

  )
}

export default SearchBar