
import React from "react";
import { Drawer } from "@mui/material";
import { motion } from "framer-motion";
import FilterSelect from "./FilterSelect.tsx";
import { Configurations, LocationsArea, PriceRanges, ProjectTypes } from "../../utils/consents.ts";

interface FilterDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  filters: {
    projectType: string;
    configuration: string;
    priceRange: string;
    location: string;
  };
  handleChange: (field: string, value: string) => void;
  onSearch: () => void;
}

const DrawerMenu: React.FC<FilterDrawerProps> = ({ open, setOpen, filters, handleChange, onSearch }) => {
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{
        sx: {
          overflow: "visible", 
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        },
      }}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full h-[350px] p-4 flex flex-col items-center justify-center bg-white shadow-lg rounded-t-2xl"
      >
        <div className="w-full space-y-4">
          <FilterSelect
            isMobile={true}
            label="Project Type"
            options={["Any", ...ProjectTypes]}
            value={filters.projectType}
            onChange={(value: string) => handleChange("projectType", value)}
          />
          <FilterSelect
            label="Configuration"
            options={["Any", ...Configurations]}
            value={filters.configuration}
            onChange={(value: string) => handleChange("configuration", value)}
            isMobile={true}
          />
          <FilterSelect
            label="Price Range"
            options={["Any", ...PriceRanges]}
            value={filters.priceRange}
            onChange={(value: string) => handleChange("priceRange", value)}
            isMobile={true}
          />
          <FilterSelect
            label="Location"
            options={["Any", ...LocationsArea]}
            value={filters.location}
            onChange={(value: string) => handleChange("location", value)}
            isMobile={true}
          />
          <button 
            onClick={onSearch}
            className="w-full mt-4 px-4 py-3 bg-[#a0238b] text-white rounded-md transition duration-300 hover:bg-[#8a1e77]"
          >
            SEARCH PROJECTS
          </button>
        </div>
      </motion.div>
    </Drawer>
  );
};

export default DrawerMenu;
