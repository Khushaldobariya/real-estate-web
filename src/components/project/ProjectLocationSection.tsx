import React, { useEffect, useState } from "react";
import { Project } from "../../utils/type.ts";
import MapLine from "../about/MapLine.tsx";
import { MapPinned } from "lucide-react";
import ProjectDetails from "./ProjectDetails.tsx";

interface ProjectLocationSectionProps {
  title?: string;
  projects: Project[];
  selectedProject: Project;
  isMapShow: Boolean;
  showBottomName: boolean;
  onProjectClick: (project: Project) => void;
}

const ProjectLocationSection: React.FC<ProjectLocationSectionProps> = ({
  title,
  isMapShow,
  projects,
  selectedProject,
  onProjectClick,
  showBottomName,
}) => {

  const [mapKey, setMapKey] = useState(0);

  
  useEffect(() => {
    setMapKey((prevKey) => prevKey + 1);
  }, [selectedProject]);

  return (
    <>
      {title && (
        <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium leading-6 text-gray-900 text-center mb-6">
          {title}
        </h3>
      )}
      <div className="flex flex-row gap-4 md:gap-6 lg:gap-8 px-2 md:px-4 lg:px-6">
        <div className="w-1/2 md:w-2/5 h-[calc(100vh-3rem)] overflow-y-auto space-y-4 md:space-y-6 custom-scrollbar">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`overflow-hidden cursor-pointer  ${
                selectedProject.name === project.name
                  ? "border-2 border-[#a43694] "
                  : "border border-gray-200"
              }`}
              onClick={() => onProjectClick(project)}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  className="w-full h-[350px] object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = `/assets/images/project/project2.webp`;
                  }}
                  alt={`${project.name} Image`}
                />
                <div
                  className={` bottom-0 w-full bg-[#a0238a] flex items-center justify-between py-2 px-4 ${
                    showBottomName ? "hidden" : "absolute"
                  }`}
                >
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm text-white">{project.year}</p>
                  </div>
                  <div>
                    <MapPinned className="text-white text-2xl" />
                  </div>
                </div>
              </div>
              {showBottomName && (
              <ProjectDetails project={project} />
              )}
            </div>
          ))}
        </div>

        <div className="w-1/2 md:w-3/5 sticky top-6">
          {isMapShow && (
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
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectLocationSection;
