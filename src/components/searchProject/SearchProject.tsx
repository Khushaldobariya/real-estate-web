// import React, { useState } from "react";
// import Navbar from "../Navbar.tsx";
// import ProjectLocationSection from "../project/ProjectLocationSection.tsx";
// import { Project } from "../../utils/type.ts";
// import { VasaiComingProject } from "../../utils/consents.ts";

// const SearchProject = () => {
//   const [isHideMap , setIsHideMap] =useState(true)
//   const [selectedProject, setSelectedProject] = useState<Project>(
//     VasaiComingProject.find((project) => project.location.includes("Vasai")) ||
//     VasaiComingProject[0]
//   );

//   const handleProjectClick = (project: Project): void => {
//     setSelectedProject(project);
//   };
//   return (
//     <>
//       <Navbar isHome={false} />
//       <div className="space-y-4 mt-28 px-5 container mx-auto md:px-20">
//         <div className="flex flex-col md:flex-row justify-between w-full ">
//           <div className="w-full md:w-1/2 ">
//             <div className="px-4 py-6">
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
//                 <div>
//                   <div className="mt-10">
//                     <p className=" text-sm md:text-base lg:text-lg">
//                       Home {">"} search
//                     </p>
//                     <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl ">
//                       Search
//                     </h1>
//                   </div>
//                   <p className="text-lg md:text-xl text-gray-600 mt-1">
//                     Results <span className="text-red-500">•</span> 15 Projects
//                   </p>
//                 </div>
//               </div>

//               <div className="flex flex-wrap items-center gap-3">
//                 <div className="flex flex-wrap gap-2">
//                   {["Apartment", "2 Bedrooms", "85,000", "Mira Road"].map(
//                     (filter, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center bg-[#a0238b] text-white px-3 py-1 rounded-md text-sm md:text-base"
//                       >
//                         <span>{filter}</span>
//                         <button className="ml-2 text-white hover:text-gray-200">
//                           ✕
//                         </button>
//                       </div>
//                     )
//                   )}
//                 </div>

//                 {/* Buttons */}
//               </div>
//             </div>
//           </div>

//           {/* Right Side - 50% */}
//           <div className="w-full md:w-1/2 justify-center  space-y-5  flex flex-col ">
//             <div className="w-full flex justify-end md:w-auto">
//               <input
//                 type="text"
//                 placeholder="Search Projects..."
//                 className="w-full md:w-64 px-4 py-2 border rounded-md text-gray-700  border-black focus:outline-none focus:ring-2 focus:ring-[#a0238b]"
//               />
//             </div>
//             <div className="flex gap-2 justify-end">
//               <button className="flex items-center px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-200 text-sm md:text-base">
//                 <span className="mr-2">≡</span> Filters
//               </button>
//               <button onClick={() => setIsHideMap(!isHideMap)} className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-200 text-sm md:text-base">
//                {isHideMap ? "hide map" :"show map"}
//               </button>
//             </div>
//           </div>
//         </div>
//         <ProjectLocationSection
//         isMapShow={isHideMap}
    
//         projects={VasaiComingProject}
//         selectedProject={selectedProject}
//         onProjectClick={handleProjectClick}
//       />
//       </div>
//     </>
//   );
// };

// export default SearchProject;


import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar.tsx";
import ProjectLocationSection from "../project/ProjectLocationSection.tsx";
import { Project } from "../../utils/type.ts";
import { 
  AllCompleteProjects, 
  AllComingProjects,
  VasaiComingProject, 
  MiraRoadComingProject, 
  ThaneComingProject, 
  NaigaonComingProject, 
  BhayanderComingProject, 
  GhatkoparComingProject,
} from "../../utils/consents.ts";
// Import the SearchBar components
import SearchBar from "../searchBar/SearchBar.tsx";
import MobileSearchBar from "../searchBar/MobileSearchBar.tsx";

const SearchProject = () => {
  const location = useLocation();
  const [isHideMap, setIsHideMap] = useState(true);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Parse query parameters
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const projectType = queryParams.get("projectType");
    const configuration = queryParams.get("configuration");
    const priceRange = queryParams.get("priceRange");
    const locationParam = queryParams.get("location");

    // Build active filters array
    const newActiveFilters: string[] = [];
    if (projectType && projectType !== "Any") newActiveFilters.push(projectType);
    if (configuration && configuration !== "Any") newActiveFilters.push(configuration);
    if (priceRange && priceRange !== "Any") newActiveFilters.push(priceRange);
    if (locationParam && locationParam !== "Any") newActiveFilters.push(locationParam);
    
    setActiveFilters(newActiveFilters);

    // Filter projects based on location
    let projects: Project[] = [];
    
    // If location is specified, filter by location
    if (locationParam && locationParam !== "Any") {
      // Get coming projects for the specified location
      switch (locationParam) {
        case "Vasai":
          projects = [...VasaiComingProject];
          break;
        case "Mira Road":
          projects = [...MiraRoadComingProject];
          break;
        case "Thane":
          projects = [...ThaneComingProject];
          break;
        case "Naigaon":
          projects = [...NaigaonComingProject];
          break;
        case "Bhayander":
          projects = [...BhayanderComingProject];
          break;
        case "Hyderabad":
          projects = [...GhatkoparComingProject]; // Using Ghatkopar as a placeholder for Hyderabad
          break;
        default:
          projects = [];
      }

      // Add completed projects for the same location
      const completedProjectsForLocation = AllCompleteProjects.filter(
        project => project.location.includes(locationParam)
      );
      
      projects = [...projects, ...completedProjectsForLocation];
    } else {
      // If no location specified, show all projects
      projects = [...AllComingProjects, ...AllCompleteProjects];
    }

    setFilteredProjects(projects);
    
    // Set the first project as selected if there are any projects
    if (projects.length > 0) {
      setSelectedProject(projects[0]);
    } else {
      setSelectedProject(null);
    }
  }, [location.search]);

  const handleProjectClick = (project: Project): void => {
    setSelectedProject(project);
  };

  const removeFilter = (filterToRemove: string) => {
    const queryParams = new URLSearchParams(location.search);
    
    // Find which parameter this filter belongs to
    for (const [key, value] of Array.from(queryParams.entries())) {
      if (value === filterToRemove) {
        queryParams.delete(key);
        break;
      }
    }
    
    // Update URL without refreshing the page
    window.history.pushState({}, '', `${location.pathname}?${queryParams.toString()}`);
    
    // Trigger the useEffect by manually updating location.search
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <>
      <Navbar isHome={false} />
      <div className="space-y-4 mt-28 px-5  lg:container mx-auto md:px-20">
    
  
        
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="w-full md:w-1/2">
            <div className="px-4 py-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div>
                  <div className="mt-10">
                    <p className="text-sm md:text-base lg:text-lg tracking-wide">
                      Home {">"} search
                    </p>
                    <h1 className="text-4xl sm:text-5xl mt-2 md:text-5xl lg:text-6xl tracking-tight leading-tight">
                      Search
                    </h1>
                  </div>
                  <p className="text-lg md:text-xl  mt-3 tracking-wide">
                    Results <span className="text-red-500 mx-1">•</span> {filteredProjects.length} Projects
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-6">
                <div className="flex flex-wrap gap-3">
                  {activeFilters.map((filter, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-[#a0238b] text-white px-4 py-2 rounded-md text-sm md:text-base  font-medium"
                    >
                      <span>{filter}</span>
                      <button 
                        className="ml-3 text-white hover:text-gray-200 text-lg"
                        onClick={() => removeFilter(filter)}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - 50% */}
          <div className="w-full md:w-1/2 justify-around space-y-7 flex flex-col">
            <div className="w-full flex justify-end md:w-auto relative mt-4">
              <div className="relative w-full md:w-96">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search Projects..."
                  className="w-full pl-12 pr-4 py-3 border text-base md:text-lg  border-black focus:outline-none focus:ring-2 focus:ring-[#a0238b] "
                />
              </div>
            </div>
            <div className="flex gap-4 justify-end mt-6">
              <button className="flex items-center justify-center px-6 py-2.5 border border-black hover:bg-gray-200 text-base md:text-lg font-medium transition duration-300">
                <span className="mr-2 text-xl flex items-center">≡</span> Filters
              </button>
              <button 
                onClick={() => setIsHideMap(!isHideMap)} 
       className="flex items-center justify-center px-6 py-2.5 border border-black hover:bg-gray-200 text-base md:text-lg font-medium transition duration-300"
              >
                {isHideMap ? "Hide Map" : "Show Map"}
              </button>
            </div>
          </div>
        </div>
        
        {selectedProject && (
          <ProjectLocationSection
            isMapShow={isHideMap}
            projects={filteredProjects}
            selectedProject={selectedProject}
            onProjectClick={handleProjectClick}
          />
        )}
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-700">No projects found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search filters</p>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchProject;