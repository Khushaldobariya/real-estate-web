import React from "react";
import MapLine from "../about/MapLine.tsx";

import { Project } from "../../utils/type.ts";



interface ProjectSectionProps {
  projects: Project[];
  title: string;
  selectedProject: Project | null;
  onProjectClick: (project: Project) => void;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  projects,
  title,
  selectedProject,
  onProjectClick
}) => {
  return (
    <div className="max-w-7xl mx-auto space-y-12 px-4 sm:px-6 lg:px-8 py-8">

     
 
      
      <h3 className="text-xl md:text-2xl font-semibold text-center mt-8">
        {selectedProject?.name || "Select a project to view location"}
      </h3>

      <div className="h-96 w-full overflow-hidden shadow-md mt-4">
        {selectedProject && (
          <MapLine
            description={selectedProject.description}
            name={selectedProject.name}
            year={selectedProject.year}
            lat={selectedProject.lat}
            lng={selectedProject.lng}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectSection;