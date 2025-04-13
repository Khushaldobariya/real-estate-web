import React, { useState } from "react";
import { AllComingProjects } from "../../utils/consents.ts";
import { Project } from "../../utils/type.ts";
import ProjectLocationSection from "./ProjectLocationSection.tsx";

const UpComingProject = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(
    AllComingProjects.find((project) => project.location.includes("Vasai")) ||
      AllComingProjects[0]
  );

  const handleProjectClick = (project: Project): void => {
    setSelectedProject(project);
  };
  
 

  return (
    <div className="flex flex-col gap-8 p-4 md:p-6 lg:p-8">
      <ProjectLocationSection
    
        projects={AllComingProjects}
        selectedProject={selectedProject}
        onProjectClick={handleProjectClick}
      />
     
    </div>
  );
};

export default UpComingProject;
