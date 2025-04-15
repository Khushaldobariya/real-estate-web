// import React, { useState } from "react";
// import { Search } from "lucide-react";
// import DrawerMenu from "./DrawerMenu.tsx"



// const MobileSearchBar: React.FC = () => {
//   const [open, setOpen] = useState(false);
//   const [filters, setFilters] = useState({
//     projectType: "Any",
//     configuration: "Any",
//     priceRange: "Any",
//     location: "Any",
//   });

//   const handleChange = (key: string, value: string) => {
//     setFilters((prev) => ({ ...prev, [key]: value }));
//   };

//   return (
//     <div className="w-full mx-auto h-12  block md:hidden ">
//       <button
//         className="w-full h-full text-black/40 flex items-center justify-start px-5 gap-4 bg-transparent rounded-xl bg-white border border-white/40"
//         onClick={() => setOpen(true)}
//       >
//         <Search /> Search
//       </button>

//       <DrawerMenu open={open} setOpen={setOpen} filters={filters} handleChange={handleChange} />
//     </div>
//   );
// };

// export default MobileSearchBar;


import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Search } from "lucide-react";
import DrawerMenu from "./DrawerMenu.tsx"

const MobileSearchBar: React.FC = () => {
  const navigate = useNavigate();
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

  const handleSearch = () => {
    // Create query parameters based on filters
    const queryParams = new URLSearchParams();
    
    if (filters.projectType !== "Any") queryParams.append("projectType", filters.projectType);
    if (filters.configuration !== "Any") queryParams.append("configuration", filters.configuration);
    if (filters.priceRange !== "Any") queryParams.append("priceRange", filters.priceRange);
    if (filters.location !== "Any") queryParams.append("location", filters.location);
    
    // Navigate to search page with query parameters
    navigate(`/searchProject?${queryParams.toString()}`);
    setOpen(false); // Close the drawer after search
  };

  return (
    <div className="w-full mx-auto h-12 block md:hidden">
      <button
        className="w-full h-full text-black/40 flex items-center justify-start px-5 gap-4 bg-transparent rounded-xl bg-white border border-white/40"
        onClick={() => setOpen(true)}
      >
        <Search /> Search
      </button>

      <DrawerMenu 
        open={open} 
        setOpen={setOpen} 
        filters={filters} 
        handleChange={handleChange} 
        onSearch={handleSearch}
      />
    </div>
  );
};

export default MobileSearchBar;