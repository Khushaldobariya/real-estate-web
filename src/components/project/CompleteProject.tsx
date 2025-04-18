import React, { useState } from "react";
import { AllCompleteProjects } from "../../utils/consents.ts";
import "swiper/css";
import "swiper/css/navigation";
import { Project } from "../../utils/type.ts";
import ProjectLocationSection from "./ProjectLocationSection.tsx";

const CompleteProject: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(
    AllCompleteProjects[0]
  );

  const handleProjectClick = (project: Project): void => {
    setSelectedProject(project);
  };

  return (
    <div className="flex flex-col gap-8 p-4 md:p-6 lg:p-8 ">
      <ProjectLocationSection
      showBottomName={false}
      isMapShow={true}
        projects={AllCompleteProjects}
        selectedProject={selectedProject}
        onProjectClick={handleProjectClick}
      />
    </div>
  );
};

export default CompleteProject;
