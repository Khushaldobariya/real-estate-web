import React, { useEffect, useState } from "react";
import { Project } from "../../utils/type.ts";
import MapLine from "../about/MapLine.tsx";

interface ProjectLocationSectionProps {
  title?: string;
  projects: Project[];
  selectedProject: Project;
  onProjectClick: (project: Project) => void;
}

const ProjectLocationSection: React.FC<ProjectLocationSectionProps> = ({
  title,
  projects,
  selectedProject,
  onProjectClick,
}) => {
  // Add a key state to force re-render of the MapLine component when selectedProject changes
  const [mapKey, setMapKey] = useState(0);

  // Update the key whenever selectedProject changes to force a re-render of the map
  useEffect(() => {
    setMapKey(prevKey => prevKey + 1);
  }, [selectedProject]);

  return (
    <>
      {title && <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium leading-6 text-gray-900 text-center mb-6">{title}</h3>}
      <div className="flex flex-row gap-4 md:gap-6 lg:gap-8 px-2 md:px-4 lg:px-6">
        <div className="w-1/2 md:w-2/5 h-[calc(100vh-3rem)] overflow-y-auto space-y-4 md:space-y-6 hide-scrollbar">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`overflow-hidden cursor-pointer  ${selectedProject.name === project.name ? 'border-2 border-[#a43694] ' : 'border border-gray-200'}`}
              onClick={() => onProjectClick(project)}
            >
              <div className="relative group">
                <img
                  src={`/assets/images/project/project${index + 1}.webp`}
                  className="w-full h-[350px] object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/images/placeholder.webp";
                  }}
                  alt={`${project.name} Image`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-sm text-white">{project.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/2 md:w-3/5 sticky top-6">
          <div className="h-[calc(100vh-3rem)] bg-gray-50 rounded-lg shadow-lg">
            {/* Use the key to force re-render when selectedProject changes */}
            <MapLine
              key={mapKey}
              description={selectedProject.description}
              name={selectedProject.name}
              year={selectedProject.year}
              lat={selectedProject.lat}
              lng={selectedProject.lng}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectLocationSection;